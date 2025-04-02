import React, { useEffect, useState } from 'react';

const Stars = () => {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; delay: number }[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 150; i++) {
        newStars.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 5
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      {stars.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle ${2 + Math.random() * 4}s infinite ${star.delay}s`
          }}
        />
      ))}
    </div>
  );
};

export default Stars;