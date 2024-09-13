import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useLocation } from "react-router-dom";

const SmoothScroll = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      scroll.scrollToTop({
        duration: 500,
        smooth: "easeInOutQuart",
      });
    };

    scrollToTop();
  }, [location.pathname]);

  return <>{children}</>;
};

export default SmoothScroll;
