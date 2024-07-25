import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { ArrowUpwardRounded } from '@mui/icons-material';
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <IconButton
          onClick={scrollToTop}
          className="fixed right-5 bottom-5  z-50 mx-auto  bg-teal-500 text-white p-4 rounded-full shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUpwardRounded />
        </IconButton>
      )}
    </>
  );
};

export default BackToTopButton;
