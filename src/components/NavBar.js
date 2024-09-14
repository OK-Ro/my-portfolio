import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaSun, FaMoon, FaFileAlt, FaBars, FaRocket } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";

// Container for the navigation bar
const NavContainer = styled.div`
  position: fixed;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 1000;

  @media (min-width: 768px) {
    top: 4rem;
    left: 5rem;
    right: 5rem;
  }
`;

// Style for the navigation bar itself
const Nav = styled.nav`
  background-color: ${(props) =>
    props.scrolled
      ? props.theme.navBackgroundScrolled
      : props.theme.navBackground};
  backdrop-filter: blur(10px);
  color: ${(props) => props.theme.navText};
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid ${(props) => props.theme.navBorder};
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 2rem;
  }
`;

// Logo with new design and icon
const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: transparent;
  background: linear-gradient(45deg, #ff5c5c, #ffb36b, #7b92ff);
  background-clip: text;
  -webkit-background-clip: text;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  position: relative;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    text-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }

  &:before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(
      45deg,
      rgba(255, 92, 92, 0.6),
      rgba(255, 179, 107, 0.6),
      rgba(123, 146, 255, 0.6)
    );
    border-radius: 10px;
    z-index: -1;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover:before {
    opacity: 1;
    filter: blur(8px);
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

// Icon inside the logo
const LogoIcon = styled(FaRocket)`
  font-size: 2rem;
  margin-right: 0.5rem;
  color: ${(props) => props.theme.navText};
`;

// Navigation items
const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: auto;
  }
`;

const NavItem = styled.li`
  margin: 0.5rem 0;

  @media (min-width: 768px) {
    margin: 0 1rem;
  }
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
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    margin-top: 0;
    justify-content: flex-end;
  }
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

const ResumeLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.navText};
  text-decoration: none;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  border: 2px solid ${(props) => props.theme.navText};
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.navText};
    color: ${(props) => props.theme.navBackground};
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const MenuToggle = styled.button`
  display: block;
  background: none;
  border: none;
  color: ${(props) => props.theme.navText};
  font-size: 1.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

// Navigation bar component
function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

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

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <NavContainer>
      <Nav scrolled={scrolled}>
        <Logo to="/">
          <LogoIcon />
          ROBFOLIO
        </Logo>
        <MenuToggle onClick={toggleMenu}>
          <FaBars />
        </MenuToggle>
        <NavList isOpen={isOpen}>
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
        </NavList>
        <RightSection>
          <ResumeLink to="/resume">
            <FaFileAlt />
            Resume
          </ResumeLink>
          <ThemeToggle onClick={toggleTheme}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
          <LetsTalkButton to="/contact">Let's Talk</LetsTalkButton>
        </RightSection>
      </Nav>
    </NavContainer>
  );
}

export default NavBar;
