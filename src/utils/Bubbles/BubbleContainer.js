import React from 'react';
import Parallax from '../Parralax';
import Bubble from './Bubble';
import styles from './BubbleContainer.module.scss';

const BubbleContainer = () => {
  const bubbles = [
    { size: 80, top: 10, left: 5, speed: -1 },
    { size: 100, top: 70, left: 50, speed: 1 },
    { size: 90, top: 65, left: 80, speed: 1 },
    { size: 110, top: 60, left: 20, speed: 2 },
    { size: 60, top: 5, left: 85, speed: 1 },
    { size: 130, top: 65, left: 5, speed: -1 },
    { size: 70, top: 20, left: 30, speed: 1 },
    { size: 60, top: 20, left: 90, speed: -2 },
  ];

  return (
    <div className={styles.bubbleContainer}>
      {bubbles.map((bubble, index) => (
        <Parallax key={index} speed={bubble.speed}>
          <Bubble
            size={bubble.size}
            top={bubble.top}
            left={bubble.left}
          />
        </Parallax>
      ))}
    </div>
  );
};

export default BubbleContainer;