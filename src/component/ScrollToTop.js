import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Optional: using FontAwesome for arrow icon
import './ScrollToTop.css'; // You can customize styles in this CSS file

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-button">
          <FaArrowUp /> {/* Icon from FontAwesome, can be replaced */}
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
