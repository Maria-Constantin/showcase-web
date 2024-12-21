import React, { useEffect, useRef } from 'react';
import Rellax from 'rellax';

const Parallax = ({ speed = 0, className = '', style = {}, children }) => {
  const rellaxRef = useRef(null);

  useEffect(() => {
    const rellax = new Rellax(rellaxRef.current, {
      speed,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    return () => {
      rellax.destroy();
    };
  }, [speed]);

  return (
    <div
      ref={rellaxRef}
      className={`rellax ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Parallax;
