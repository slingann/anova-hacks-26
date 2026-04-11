import type React from "react"
import { useState, useMemo, useEffect } from "react"
import Papa from "papaparse"
import { motion } from "framer-motion"
import { Search, Users, Code, Briefcase } from "lucide-react"

interface Mentor {
  firstName: string
  lastName: string
  year: string
  major: string
  codingLanguages: string[]
  projects: string[]
  picture: string
}

const Mentors = () => {
  const [mentorsData, setMentorsData] = useState<Mentor[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [selectedProjects, setSelectedProjects] = useState<string[]>([])
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})
  const [loading, setLoading] = useState(true)  // Initially set loading to true

  const handleImageError = (mentorId: string) => {
    setImageErrors((prev) => ({
      ...prev,
      [mentorId]: true,
    }))
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/anova-mentors2.csv")
        const text = await response.text()
        const results = Papa.parse(text, { header: true })

        if (results.data) {
          const formattedData = results.data
            .filter((mentor: any) => mentor["First Name"] && mentor["Last Name"])
            .map((mentor: any) => ({
              firstName: mentor["First Name"] || "",
              lastName: mentor["Last Name"] || "",
              year: mentor["Year"] || "",
              major: mentor["Major"] || "",
              codingLanguages: mentor["Coding languages"] ? mentor["Coding languages"].split(", ") : [],
              projects: mentor["Projects/Concepts"] ? mentor["Projects/Concepts"].split(", ") : [],
              picture: mentor["Picture of you"] || "",
            }))

          setMentorsData(formattedData)
        }
      } catch (error) {
        console.error("Error fetching mentor data:", error)
      } finally {
        setLoading(false)  // Set loading to false once data is fetched
      }
    }

    fetchData()
  }, [])

  const getImageUrl = (mentor: Mentor): string => {
    const mentorId = `${mentor.firstName}-${mentor.lastName}`

    if (imageErrors[mentorId]) {
      return ""
    }

    if (!mentor.picture) {
      return ""
    }

    return `/mentorpics2/${mentor.picture}`
  }

  const allLanguages = useMemo(
    () => Array.from(new Set(mentorsData.flatMap((mentor) => mentor.codingLanguages))),
    [mentorsData],
  )
  const allProjects = useMemo(
    () => Array.from(new Set(mentorsData.flatMap((mentor) => mentor.projects))),
    [mentorsData],
  )

  const filteredMentors = useMemo(() => {
    return mentorsData.filter((mentor) => {
      const searchMatch = `${mentor.firstName} ${mentor.lastName} ${mentor.major}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
      const languageMatch =
        selectedLanguages.length === 0 || selectedLanguages.every((lang) => mentor.codingLanguages.includes(lang))
      const projectMatch =
        selectedProjects.length === 0 || selectedProjects.every((proj) => mentor.projects.includes(proj))
      return searchMatch && languageMatch && projectMatch
    })
  }, [searchTerm, selectedLanguages, selectedProjects, mentorsData])

  const toggleSelection = (
    selection: string[],
    setSelection: React.Dispatch<React.SetStateAction<string[]>>,
    item: string,
  ) => {
    setSelection((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))
  }

  const InitialsAvatar = ({ mentor }: { mentor: Mentor }) => {
    const initials = `${mentor.firstName.charAt(0)}${mentor.lastName.charAt(0)}`
    const colorClass = "bg-blue-500"

    return (
      <div className={`w-full h-48 flex items-center justify-center rounded-lg ${colorClass}`}>
        <span className="text-4xl font-bold text-white">{initials}</span>
      </div>
    )
  }

  return (
    <div className="page-container pt-24">
      <motion.div
        className="flex items-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Users className="w-8 h-8 mr-3 text-blue-400" />
        <h1 className="text-4xl font-bold">Meet Our Mentors</h1>
      </motion.div>

      <motion.div
        className="card mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 relative">
          <div className="absolute top-3 left-2 transform">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
            <input
              type="text"
              placeholder="Search mentors..."
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#9DD4DB] text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center mb-2">
              <Code className="w-5 h-5 mr-2 text-blue-400" />
              <h3 className="text-lg font-semibold">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {allLanguages.map((language) => (
                <button
                  key={language}
                  onClick={() => toggleSelection(selectedLanguages, setSelectedLanguages, language)}
                  className={`px-3 py-1 rounded-full text-sm ${selectedLanguages.includes(language) ? "bg-[#228a8c] text-white" : "bg-white/5 text-white hover:bg-white/10"}`}
                >
                  {language}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center mb-2">
              <Briefcase className="w-5 h-5 mr-2 text-blue-400" />
              <h3 className="text-lg font-semibold">Projects</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {allProjects.map((project) => (
                <button
                  key={project}
                  onClick={() => toggleSelection(selectedProjects, setSelectedProjects, project)}
                  className={`px-3 py-1 rounded-full text-sm ${selectedProjects.includes(project) ? "bg-[#228a8c] text-white" : "bg-white/5 text-white hover:bg-white/10"}`}
                >
                  {project}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Loading Spinner or text */}
      {loading ? (
        <div className="flex justify-center items-center py-16">
          <div>Loading mentors...</div>  {/* Simple loading text */}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor, index) => {
            const mentorId = `${mentor.firstName}-${mentor.lastName}`
            const imageUrl = getImageUrl(mentor)

            return (
              <motion.div
                key={mentorId}
                className="card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 z-0">
                    <InitialsAvatar mentor={mentor} />
                  </div>

                  {imageUrl && (
                    <img
                      src={imageUrl || "/placeholder.svg"}
                      alt={`${mentor.firstName} ${mentor.lastName}`}
                      className="w-full h-80 object-cover rounded-lg relative z-10"
                      onError={() => handleImageError(mentorId)}
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg z-20" />
                </div>
                <h3 className="text-xl font-semibold mb-1">
                  {mentor.firstName} {mentor.lastName}
                </h3>
                <p className="text-white-200 mb-2">
                  {mentor.year} Year • {mentor.major}
                </p>
                <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold text-white-300 mb-1">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {mentor.codingLanguages.map(lang => (
                    <span key={lang} className="px-2 py-1 bg-white/5 rounded-full text-xs">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-white-300 mb-1">Projects</h4>
                <div className="flex flex-wrap gap-2">
                  {mentor.projects.map(project => (
                    <span key={project} className="px-2 py-1 bg-white/5 rounded-full text-xs">
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            </div>
              </motion.div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Mentors
