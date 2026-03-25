import React from 'react';
import './BackgroundShapes.css';

/**
 * Generates an array of star objects with random positions, sizes, and animation delays.
 */
const stars = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: 2 + Math.random() * 3,          // 2px – 5px
  delay: Math.random() * 6,             // 0s – 6s
  duration: 3 + Math.random() * 4,      // 3s – 7s
}));

function BackgroundShapes() {
  return (
    <div className="bg-stars" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className="bg-star"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundShapes;
