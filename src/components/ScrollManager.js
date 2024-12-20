import React, { useEffect, useState, useRef } from 'react';

const ScrollManager = ({ children, footerRef }) => {
  const sectionRefs = useRef([]);
  const [touchStart, setTouchStart] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const scrollToSection = (index) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].scrollIntoView({ behavior: 'smooth' });
      setCurrentSectionIndex(index);
    }
  };

  const scrollToFooter = () => {
    footerRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].clientY);
  };

  const handleTouchEnd = (event) => {
    const touchEnd = event.changedTouches[0].clientY;
    if (touchStart - touchEnd > 50 && currentSectionIndex < sectionRefs.current.length - 1) {
      scrollToSection(currentSectionIndex + 1); // Swipe up (next section)
    } else if (touchEnd - touchStart > 50 && currentSectionIndex > 0) {
      scrollToSection(currentSectionIndex - 1); // Swipe down (previous section)
    }
  };

  useEffect(() => {
    // Add touch event listeners for swipe navigation
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchStart, currentSectionIndex]);

  return children({ sectionRefs, scrollToFooter, scrollToSection });
};

export default ScrollManager;
