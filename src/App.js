import React, { Suspense, useEffect, useState } from "react";
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

import { Helmet } from "react-helmet";
import GlobalStyles from "./GlobalStyles";
import LoadingScreen from "./components/LoadingScreen";

const lightTheme = {
  body: "linear-gradient(135deg, #f0f2f5, #e0e7ff)",
  text: "#333333",
  secondaryText: "#666666",
  cardBackground: "rgba(255, 255, 255, 0.6)",
  backgroundCala: "rgba(248, 249, 250, 0.7)",
  profileCardBackground:
    "url('https://wallpapers.com/images/hd/white-solid-background-k03v99q4obz7fu6p.jpg')",
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
  navBackgroundSolid: "#FFFFFF",
  navText: "#333333",
  navBorder: "rgba(255, 255, 255, 0.2)",
  buttonBackground: "rgba(0, 122, 255, 0.8)",
  buttonText: "#FFFFFF",
  buttonHoverBackground: "rgba(90, 200, 250, 0.8)",

  formBackground:
    "linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%)",
  formBorder: "rgb(255, 255, 255)",
  formBoxShadow: "rgba(133, 189, 215, 0.8784313725)",
  inputBackground: "white",
  inputBorder: "#e0e0e0",
  inputBoxShadow: "#cff0ff",
  inputFocusBorder: "#12B1D1",
  labelColor: "rgb(170, 170, 170)",
  buttonGradient:
    "linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%)",
  buttonBoxShadow: "rgba(133, 189, 215, 0.8784313725)",
  iconColor: "rgb(16, 137, 211)",
  // resume colors
  resumeBackground:
    "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
  resumeText: "#ffffff",
  resumeCardBackground: "rgba(255, 255, 255, 0.9)",
  resumeCardText: "#333333",
  resumeAccent: "#23a6d5",
  resumeButtonBackground: "white",
  resumeButtonText: "black",
  resumeButtonHoverBackground: "linear-gradient(to right, #6dd5ed, #2193b0)",
  resumeButtonHoverText: "white",
  resumeSectionBackground: "#ffffff",
  resumeSectionTitle: "#23a6d5",
  resumeWorkItemBackground: "#f8f9fa",
  resumeWorkTitle: "#e73c7e",
  resumeWorkCompany: "#333333",
  resumeWorkDate: "#666666",
  resumeSocialLinkBackground: "#23a6d5",
  resumeSocialLinkHoverBackground: "#1c8ab9",
};

const darkTheme = {
  body: "#1a1a1a",
  text: "#E4E6EB",
  secondaryText: "#B0B3B8",
  cardBackground: "rgba(30, 37, 46, 0.8)",
  backgroundCala: "rgba(34, 41, 51, 0.7)",
  profileCardBackground: "#1a1a1a",
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
  navBackgroundSolid: "#1E252E",
  navText: "#E4E6EB",
  navBorder: "rgba(56, 56, 58, 0.5)",
  buttonBackground: "rgba(10, 132, 255, 0.8)",
  buttonText: "#FFFFFF",
  buttonHoverBackground: "rgba(100, 210, 255, 0.8)",
  formBackground:
    "linear-gradient(0deg, rgb(30, 37, 46) 0%, rgb(34, 41, 51) 100%)",
  formBorder: "rgb(59, 68, 81)",
  formBoxShadow: "rgba(0, 0, 0, 0.2)",
  inputBackground: "rgba(45, 53, 64, 0.8)",
  inputBorder: "rgba(59, 68, 81, 0.5)",
  inputBoxShadow: "rgba(0, 0, 0, 0.1)",
  inputFocusBorder: "rgb(64, 156, 255)",
  labelColor: "rgb(170, 170, 170)",
  buttonGradient:
    "linear-gradient(45deg, rgb(64, 156, 255) 0%, rgb(100, 210, 255) 100%)",
  buttonBoxShadow: "rgba(0, 0, 0, 0.2)",
  iconColor: "rgb(64, 156, 255)",
  // resumecolors
  resumeBackground: "#1a1a1a",
  resumeText: "#e0e0e0",
  resumeCardBackground: "rgba(40, 40, 40, 0.9)",
  resumeCardText: "#e0e0e0",
  resumeAccent: "#64b5f6",
  resumeButtonBackground: "#444",
  resumeButtonText: "white",
  resumeButtonHoverBackground: "linear-gradient(to right, #6dd5ed, #2193b0)",
  resumeButtonHoverText: "white",
  resumeSectionBackground: "#2c2c2c",
  resumeSectionTitle: "#64b5f6",
  resumeWorkItemBackground: "#3c3c3c",
  resumeWorkTitle: "#ff8a65",
  resumeWorkCompany: "#e0e0e0",
  resumeWorkDate: "#bdbdbd",
  resumeSocialLinkBackground: "#64b5f6",
  resumeSocialLinkHoverBackground: "#4a90e2",
};
function AppContent() {
  const { isDarkMode } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        {isLoading ? (
          <LoadingScreen isLoading={isLoading} />
        ) : (
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
        )}
      </Suspense>
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
