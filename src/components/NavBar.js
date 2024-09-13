import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaSun, FaMoon, FaFileAlt, FaBars } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";

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

const Logo = styled(Link)`
  font-size: 1.2rem;
  font-weight: bold;
  text-shadow: 0 0 10px ${(props) => props.theme.navTextShadow};
  text-decoration: none;
  color: ${(props) => props.theme.navText};
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0;
  }
`;

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
        <Logo to="/">ROBFOLIO</Logo>
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
