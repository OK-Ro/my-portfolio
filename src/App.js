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

const lightTheme = {
  body: "#FFFFFF",
  text: "#000000",
  secondaryText: "#8E8E93",
  cardBackground: "#FFFFFF",
  backgroundCala: "#f8f9fa",
  cardBorder: "#E5E5EA",
  cardBorderline: "#FFFFFF",
  scrollbarThumb: "#C7C7CC",
  scrollbarThumbHover: "#8E8E93",
  scrollbarTrack: "#F2F2F7",
  contactCardGradient: "linear-gradient(135deg, #F2F2F7, #E5E5EA)",
  contactCardShine:
    "radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 80%)",
  boxShadow: "rgba(0, 0, 0, 0.05)",
  letsTalkGradient: "linear-gradient(45deg, #007AFF, #5AC8FA)",
  letsTalkLink: "#007AFF",
  letsTalkLinkHover: "#5AC8FA",
  textShadow: "rgba(0, 0, 0, 0.1)",
  accent: "white",
  success: "#34C759",
  warning: "#FF9500",
  error: "#FF3B30",
};

const darkTheme = {
  body: "#000000",
  text: "#FFFFFF",
  secondaryText: "#8E8E93",
  cardBackground: "#1C1C1E",
  cardBorder: "#38383A",
  scrollbarThumb: "#48484A",
  scrollbarThumbHover: "#8E8E93",
  scrollbarTrack: "#2C2C2E",
  contactCardGradient: "linear-gradient(135deg, #2C2C2E, #1C1C1E)",
  contactCardShine:
    "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 80%)",
  boxShadow: "rgba(0, 0, 0, 0.3)",
  letsTalkGradient: "linear-gradient(45deg, #0A84FF, #64D2FF)",
  letsTalkLink: "#0A84FF",
  letsTalkLinkHover: "#64D2FF",
  textShadow: "rgba(0, 0, 0, 0.3)",
  accent: "#0A84FF",
  success: "#30D158",
  warning: "#FF9F0A",
  error: "#FF453A",
};

function AppContent() {
  const { isDarkMode } = useTheme();

  return (
    <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
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
