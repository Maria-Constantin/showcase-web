import React, { useRef, useState, useEffect } from 'react';

const SmoothScroll = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const [currentSection, setCurrentSection] = useState(0);

  const sections = [section1Ref, section2Ref, section3Ref];

  // Function to scroll to a specific section
  const scrollToSection = (index) => {
    sections[index].current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWheel = (event) => {
    if (event.deltaY > 0 && currentSection < sections.length - 1) {
      // Scroll down: move to the next section
      setCurrentSection((prev) => prev + 1);
    } else if (event.deltaY < 0 && currentSection > 0) {
      // Scroll up: move to the previous section
      setCurrentSection((prev) => prev - 1);
    }
  };

  useEffect(() => {
    scrollToSection(currentSection);
  }, [currentSection]);

  useEffect(() => {
    // Adding event listener for wheel scroll
    window.addEventListener('wheel', handleWheel);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSection]);

  return (
    <div>
      <div ref={section1Ref} style={{ height: '100vh', backgroundColor: '#ff6f61' }}>
        <h2>Section 1</h2>
      </div>
      <div ref={section2Ref} style={{ height: '100vh', backgroundColor: '#6fa3ff' }}>
        <h2>Section 2</h2>
      </div>
      <div ref={section3Ref} style={{ height: '100vh', backgroundColor: '#61ff6f' }}>
        <h2>Section 3</h2>
      </div>
    </div>
  );
};

export default SmoothScroll;
