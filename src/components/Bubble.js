import React from 'react';

const Bubble = ({ size, top, left, zIndex  }) => {
  return (
    <div
      className="bubble"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}vh`,    
        left: `${left}vw`,  
        zIndex: zIndex,
      }}
    ></div>
  );
};

export default Bubble;
