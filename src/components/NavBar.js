import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaSun, FaMoon, FaFileAlt } from "react-icons/fa";

const NavContainer = styled.div`
  position: fixed;
  top: 4rem;
  left: 5rem;
  right: 5rem;
  z-index: 1000;
`;

const Nav = styled.nav`
  background-color: ${(props) =>
    props.scrolled
      ? props.theme.navBackgroundScrolled
      : props.theme.navBackground};
  backdrop-filter: blur(10px);
  color: ${(props) => props.theme.navText};
  padding: 2rem 2rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid ${(props) => props.theme.navBorder};
  transition: all 0.3s ease-in-out;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 0 0 10px ${(props) => props.theme.navTextShadow};
  text-decoration: none;
  color: ${(props) => props.theme.navText};
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.navText};
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: ${(props) => props.theme.navText};
    transition: width 0.3s ease;
  }
  &:hover:after {
    width: 100%;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.navText};
  font-size: 1.2rem;
  cursor: pointer;
  margin-right: 1rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: rotate(30deg);
  }
`;

const LetsTalkButton = styled(Link)`
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonText};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme.buttonHoverBackground};
  }
`;

function NavBar({ toggleTheme, isDarkTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <NavContainer>
      <Nav scrolled={scrolled}>
        <Logo to="/">My Portfolio</Logo>
        <NavList>
          <NavItem>
            <NavLink
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/services"
              className={location.pathname === "/services" ? "active" : ""}
            >
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/portfolio"
              className={location.pathname === "/portfolio" ? "active" : ""}
            >
              Portfolio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/resume"
              className={location.pathname === "/resume" ? "active" : ""}
            >
              <FaFileAlt style={{ marginRight: "0.5rem" }} />
              Resume
            </NavLink>
          </NavItem>
        </NavList>
        <RightSection>
          <ThemeToggle onClick={toggleTheme}>
            {isDarkTheme ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
          <LetsTalkButton to="/contact">Let's Talk</LetsTalkButton>
        </RightSection>
      </Nav>
    </NavContainer>
  );
}

export default NavBar;
