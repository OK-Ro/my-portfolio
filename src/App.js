import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import {
  ThemeProvider as CustomThemeProvider,
  useTheme,
} from "./components/ThemeProvider";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import SmoothScroll from "./pages/SmoothScroll";

const lightTheme = {
  body: "rgba(255, 255, 255, 0.8)",
  text: "#333333",
  secondaryText: "#666666",
  cardBackground: "rgba(255, 255, 255, 0.6)",
  backgroundCala: "rgba(248, 249, 250, 0.7)",
  cardBorder: "rgba(255, 255, 255, 0.2)",
  cardBorderline: "#FFFFFF",
  scrollbarThumb: "rgba(200, 200, 200, 0.5)",
  scrollbarThumbHover: "rgba(180, 180, 180, 0.7)",
  scrollbarTrack: "rgba(240, 240, 240, 0.3)",
  contactCardGradient:
    "linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(240, 240, 240, 0.5))",
  contactCardShine:
    "radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 70%)",
  boxShadow: "rgba(0, 0, 0, 0.05)",
  letsTalkGradient:
    "linear-gradient(45deg, rgba(0, 122, 255, 0.8), rgba(90, 200, 250, 0.8))",
  letsTalkLink: "rgba(0, 122, 255, 0.8)",
  letsTalkLinkHover: "rgba(90, 200, 250, 0.8)",
  textShadow: "rgba(255, 255, 255, 0.5)",
  accent: "rgba(0, 122, 255, 0.8)",
  success: "rgba(52, 199, 89, 0.8)",
  warning: "rgba(255, 149, 0, 0.8)",
  error: "rgba(255, 59, 48, 0.8)",
  navBackground: "rgba(255, 255, 255, 0.1)",
  navBackgroundScrolled: "rgba(255, 255, 255, 0.8)",
  navText: "#333333",
  navBorder: "rgba(255, 255, 255, 0.2)",
  buttonBackground: "rgba(0, 122, 255, 0.8)",
  buttonText: "#FFFFFF",
  buttonHoverBackground: "rgba(90, 200, 250, 0.8)",
};

const darkTheme = {
  body: "rgba(22, 28, 36, 0.95)",
  text: "#E4E6EB",
  secondaryText: "#B0B3B8",
  cardBackground: "rgba(30, 37, 46, 0.8)",
  backgroundCala: "rgba(34, 41, 51, 0.7)",
  cardBorder: "rgba(59, 68, 81, 0.5)",
  cardBorderline: "rgba(59, 68, 81, 0.3)",
  scrollbarThumb: "rgba(76, 86, 100, 0.8)",
  scrollbarThumbHover: "rgba(99, 112, 129, 0.8)",
  scrollbarTrack: "rgba(45, 53, 64, 0.5)",
  contactCardGradient:
    "linear-gradient(135deg, rgba(45, 53, 64, 0.8), rgba(30, 37, 46, 0.8))",
  contactCardShine:
    "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%)",
  boxShadow: "rgba(0, 0, 0, 0.2)",
  letsTalkGradient:
    "linear-gradient(45deg, rgba(64, 156, 255, 0.8), rgba(100, 210, 255, 0.8))",
  letsTalkLink: "rgba(64, 156, 255, 0.8)",
  letsTalkLinkHover: "rgba(100, 210, 255, 0.8)",
  textShadow: "rgba(0, 0, 0, 0.3)",
  accent: "rgba(64, 156, 255, 0.8)",
  success: "rgba(72, 187, 120, 0.8)",
  warning: "rgba(246, 173, 85, 0.8)",
  error: "rgba(245, 101, 101, 0.8)",
  navBackground: "rgba(30, 37, 46, 0.1)",
  navBackgroundScrolled: "rgba(30, 37, 46, 0.8)",
  navText: "#E4E6EB",
  navBorder: "rgba(56, 56, 58, 0.5)",
  buttonBackground: "rgba(10, 132, 255, 0.8)",
  buttonText: "#FFFFFF",
  buttonHoverBackground: "rgba(100, 210, 255, 0.8)",
};
function AppContent() {
  const { isDarkMode } = useTheme();

  return (
    <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <SmoothScroll>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </SmoothScroll>
      </Router>
    </StyledThemeProvider>
  );
}

function App() {
  return (
    <CustomThemeProvider>
      <AppContent />
    </CustomThemeProvider>
  );
}

export default App;
