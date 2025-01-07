import React from 'react';
import styles from './Bubble.module.scss';

const Bubble = ({ size, top, left, zIndex }) => {
  return (
    <div
      className={styles.bubble}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}vh`,    
        left: `${left}vw`,  
        zIndex: zIndex || 10,
      }}
    ></div>
  );
};


export default Bubble;
