import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  FaFileAlt,
  FaBars,
  FaComments,
  FaSun,
  FaMoon,
  FaHome,
  FaUser,
  FaCog,
  FaFolder,
} from "react-icons/fa";
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
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 900;
  letter-spacing: 1px;
  color: ${(props) => props.theme.logoText};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const LogoText = styled.span`
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const LogoSubtext = styled.span`
  font-size: 0.8em;
  font-weight: 400;
  color: ${(props) => props.theme.logoSubtext};
  margin-left: 5px;
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
    margin: 0 0.5rem;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  border-radius: 1.5rem;
  transition: all 0.3s ease;
  font-weight: 900;
  overflow: hidden;
  margin-right: 2rem;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.color};
    opacity: 0.2;
    transition: opacity 0.3s ease;
  }

  &:hover:before {
    opacity: 0.4;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  &.active {
    background-color: ${(props) => props.color};
    color: white;
  }

  &.active:before {
    opacity: 0;
  }

  svg {
    margin-right: 0.5rem;
    font-size: 1.2em;
    color: ${(props) => props.color};
  }

  &.active svg {
    color: white;
  }

  span {
    position: relative;
    z-index: 1;
    color: ${(props) => props.theme.navText};
  }

  &.active span {
    color: white;
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

const SwitchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  height: 55px;
`;

const SwitchOuter = styled.label`
  height: 100%;
  background: ${(props) => (props.isDarkMode ? "#252532" : "#e0e0e0")};
  width: 115px;
  border-radius: 165px;
  box-shadow: ${(props) =>
    props.isDarkMode
      ? "inset 0px 5px 10px 0px #16151c, 0px 3px 6px -2px #403f4e"
      : "inset 0px 5px 10px 0px #c1c1c1, 0px 3px 6px -2px #ffffff"};
  border: 1px solid ${(props) => (props.isDarkMode ? "#32303e" : "#d0d0d0")};
  padding: 6px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  position: relative;
  transition: all 0.3s ease;
`;

const CheckboxInput = styled.input`
  opacity: 0;
  position: absolute;
`;

const ButtonToggle = styled.div`
  height: 42px;
  width: 42px;
  background: ${(props) =>
    props.isDarkMode
      ? "linear-gradient(#3b3a4e, #272733)"
      : "linear-gradient(#f5f5f5, #e0e0e0)"};
  border-radius: 100%;
  box-shadow: ${(props) =>
    props.isDarkMode
      ? "inset 0px 5px 4px 0px #424151, 0px 4px 15px 0px #0f0e17"
      : "inset 0px 5px 4px 0px #ffffff, 0px 4px 15px 0px #a1a1a1"};
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#ffd700")};
  font-size: 1.2rem;

  ${CheckboxInput}:checked + & {
    transform: translateX(58px);
  }
`;

const ButtonIndicator = styled.div`
  height: 25px;
  width: 25px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;

  &.sun {
    right: 10px;
    border: 3px solid #ffd700;
    color: #ffd700;
    background-color: rgba(255, 215, 0, 0.2);
  }

  &.moon {
    left: 10px;
    border: 3px solid #c0c0c0;
    color: #c0c0c0;
    background-color: rgba(192, 192, 192, 0.2);
  }
`;

const LetsTalkButton = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 900;
  text-decoration: none;
  color: #ffffff;
  background: linear-gradient(to bottom right, #667eea, #764ba2);
  border: none;
  border-radius: 50px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: all 0.4s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);

    &:before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }

  svg {
    margin-right: 8px;
    font-size: 1.2em;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

const ResumeLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.navText};
  text-decoration: none;
  margin-right: 1rem;
  padding: 0.8rem 1.5rem;
  border: 4px solid ${(props) => props.theme.navText};
  border-radius: 5px;
  transition: all 0.3s ease;
  font-weight: 900;

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
  const navItems = [
    { path: "/", icon: FaHome, text: "Home", color: "#FF6B6B" },
    { path: "/about", icon: FaUser, text: "About", color: "#4ECDC4" },
    { path: "/services", icon: FaCog, text: "Services", color: "#45B7D1" },
    { path: "/portfolio", icon: FaFolder, text: "Portfolio", color: "#FFA07A" },
  ];

  return (
    <NavContainer>
      <Nav scrolled={scrolled}>
        <Logo to="/">
          <LogoText>
            ROB<LogoSubtext>FOLIO</LogoSubtext>
          </LogoText>
        </Logo>
        <MenuToggle onClick={toggleMenu}>
          <FaBars />
        </MenuToggle>
        <NavList isOpen={isOpen}>
          {navItems.map((item) => (
            <NavItem key={item.path}>
              <NavLink
                to={item.path}
                className={location.pathname === item.path ? "active" : ""}
                color={item.color}
              >
                <item.icon />
                <span>{item.text}</span>
              </NavLink>
            </NavItem>
          ))}
        </NavList>
        <RightSection>
          <ResumeLink to="/resume">
            <FaFileAlt />
            Resume
          </ResumeLink>
          <SwitchButton>
            <SwitchOuter isDarkMode={isDarkMode}>
              <CheckboxInput
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleTheme}
              />
              <ButtonToggle isDarkMode={isDarkMode}>
                {isDarkMode ? <FaMoon /> : <FaSun />}
              </ButtonToggle>
              <ButtonIndicator className="sun">
                <FaSun />
              </ButtonIndicator>
              <ButtonIndicator className="moon">
                <FaMoon />
              </ButtonIndicator>
            </SwitchOuter>
          </SwitchButton>
          <LetsTalkButton to="/contact">
            <FaComments />
            Let's Talk
          </LetsTalkButton>
        </RightSection>
      </Nav>
    </NavContainer>
  );
}

export default NavBar;
