import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const lightTheme = {
  body: "#f0f0f0",
  text: "#333",
  navBackground: "rgba(255, 255, 255, 0.1)",
  navText: "#333",
  navTextShadow: "rgba(0, 0, 0, 0.1)",
  navBorder: "rgba(255, 255, 255, 0.3)",
  buttonBackground: "rgba(76, 175, 80, 0.6)",
  buttonText: "#fff",
  buttonHoverBackground: "rgba(76, 175, 80, 0.8)",
};

const darkTheme = {
  body: "#333",
  text: "#f0f0f0",
  navBackground: "rgba(0, 0, 0, 0.3)",
  navText: "#f0f0f0",
  navTextShadow: "rgba(255, 255, 255, 0.1)",
  navBorder: "rgba(255, 255, 255, 0.1)",
  buttonBackground: "rgba(76, 175, 80, 0.6)",
  buttonText: "#fff",
  buttonHoverBackground: "rgba(76, 175, 80, 0.8)",
};

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            }
          />
          <Route
            path="/about"
            element={
              <About toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            }
          />
          <Route
            path="/services"
            element={
              <Services toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            }
          />
          <Route
            path="/portfolio"
            element={
              <Portfolio toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            }
          />
          <Route
            path="/blog"
            element={
              <Blog toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            }
          />
          <Route
            path="/resume"
            element={
              <Resume toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
export default App;
