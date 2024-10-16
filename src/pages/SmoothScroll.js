import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { throttle } from "lodash";

const ScrollContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`;

const PageContainer = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
`;

const ContentContainer = styled(motion.div)`
  opacity: 1;
  transform: scale(1) translateZ(0);
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

const pageVariants = {
  initial: { opacity: 1, scale: 1 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 1.1 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.3,
};

const SmoothScroll = ({ children }) => {
  const location = useLocation();
  const scrollingContainerRef = useRef();
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const scrollToTop = () => {
      if (scrollingContainerRef.current) {
        scrollingContainerRef.current.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    };

    scrollToTop();
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const sections = document.querySelectorAll(".scroll-section");
      const newVisibleSections = {};

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        newVisibleSections[index] =
          rect.top < windowHeight * 0.75 && rect.bottom > 0;
      });

      setVisibleSections(newVisibleSections);
    }, 100); // Call every 100ms

    const container = scrollingContainerRef.current;
    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContainer ref={scrollingContainerRef}>
      <AnimatePresence initial={false} mode="wait">
        <PageContainer
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          {React.Children.map(children, (child, index) => (
            <ContentContainer
              key={index}
              className="scroll-section"
              animate={{
                opacity: visibleSections[index] ? 1 : 0,
                scale: visibleSections[index] ? 1 : 0.9,
              }}
              transition={{ duration: 0.5 }}
            >
              {child}
            </ContentContainer>
          ))}
        </PageContainer>
      </AnimatePresence>
    </ScrollContainer>
  );
};

export default SmoothScroll;
