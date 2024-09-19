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
  FaTimes,
} from "react-icons/fa";
import { useTheme } from "./ThemeProvider";

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem;

  @media (min-width: 768px) {
    top: 2rem;
    left: 2rem;
    right: 2rem;
  }
`;

const Nav = styled.nav`
  background-color: ${(props) => props.theme.navBackgroundSolid};
  color: ${(props) => props.theme.navText};
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 30px ${(props) => props.theme.boxShadow};
  border: 1px solid ${(props) => props.theme.navBorder};
  transition: all 0.3s ease-in-out;
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.navBackgroundSolid};
  transition: right 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-shadow: -5px 0 15px ${(props) => props.theme.boxShadow};
  overflow-y: auto;
  z-index: 1001;

  @media (min-width: 768px) {
    display: none;
  }
`;
const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
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

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 2rem;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 1rem;
  margin: 0;
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const MobileNavList = styled(NavList)`
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.li`
  margin: 0.5rem 0;
  margin-right: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    margin-right: 0;
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
    box-shadow: 0 4px 10px ${(props) => props.theme.boxShadow};
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
    color: ${(props) => props.theme.text};
  }

  &.active span {
    color: white;
  }
`;

const RightSection = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const MobileRightSection = styled(RightSection)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 2rem;
`;

const SwitchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  height: 40px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
`;

const SwitchOuter = styled.label`
  height: 100%;
  background: ${(props) =>
    props.isDarkMode ? props.theme.cardBackground : props.theme.body};
  width: 90px;
  border-radius: 40px;
  box-shadow: inset 0px 5px 10px 0px ${(props) => props.theme.boxShadow};
  border: 1px solid ${(props) => props.theme.cardBorder};
  padding: 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  position: relative;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 80px;
    height: 35px;
  }
`;

const CheckboxInput = styled.input`
  opacity: 0;
  position: absolute;
`;

const ButtonToggle = styled.div`
  height: 32px;
  width: 32px;
  background: ${(props) =>
    props.isDarkMode
      ? props.theme.cardBackground
      : props.theme.buttonBackground};
  border-radius: 50%;
  box-shadow: 0px 4px 15px 0px ${(props) => props.theme.boxShadow};
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.isDarkMode ? props.theme.text : "#ffd700")};
  font-size: 1rem;

  ${CheckboxInput}:checked + & {
    transform: translateX(50px);
  }

  @media (max-width: 768px) {
    height: 27px;
    width: 27px;
    font-size: 0.9rem;

    ${CheckboxInput}:checked + & {
      transform: translateX(45px);
    }
  }
`;

const ButtonIndicator = styled.div`
  height: 20px;
  width: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;

  &.sun {
    right: 8px;
    border: 2px solid #ffd700;
    color: #ffd700;
    background-color: rgba(255, 215, 0, 0.2);
  }

  &.moon {
    left: 8px;
    border: 2px solid ${(props) => props.theme.text};
    color: ${(props) => props.theme.text};
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    height: 18px;
    width: 18px;
    font-size: 0.7rem;

    &.sun {
      right: 6px;
    }

    &.moon {
      left: 6px;
    }
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
  color: ${(props) => props.theme.buttonText};
  background: ${(props) => props.theme.letsTalkGradient};
  border: none;
  border-radius: 50px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px ${(props) => props.theme.boxShadow};

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
    box-shadow: 0 6px 20px ${(props) => props.theme.boxShadow};

    &:before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 3px 10px ${(props) => props.theme.boxShadow};
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
  justify-content: center;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  margin-right: 1rem;
  padding: 0.8rem 1.5rem;
  border: 4px solid ${(props) => props.theme.text};
  border-radius: 5px;
  transition: all 0.3s ease;
  font-weight: 900;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }

  svg {
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
    border-width: 3px;
    width: 8rem;
    margin-left: 5.5rem;
    margin-bottom: 1.5rem;

    svg {
      margin-right: 0.3rem;
      font-size: 0.9rem;
    }
  }
`;
const MenuToggle = styled.button`
  display: block;
  background: none;
  border: none;
  color: ${(props) => props.theme.text};
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
      <Nav $scrolled={scrolled}>
        <Logo to="/">
          <LogoText>
            BOB<LogoSubtext>FOLIO</LogoSubtext>
          </LogoText>
        </Logo>
        <MenuToggle onClick={toggleMenu}>
          <FaBars />
        </MenuToggle>
        <NavList>
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
      <MobileMenu isOpen={isOpen}>
        <CloseButton onClick={toggleMenu}>
          <FaTimes />
        </CloseButton>
        <MobileNavList>
          {navItems.map((item) => (
            <NavItem key={item.path}>
              <NavLink
                to={item.path}
                className={location.pathname === item.path ? "active" : ""}
                color={item.color}
                onClick={toggleMenu}
              >
                <item.icon />
                <span>{item.text}</span>
              </NavLink>
            </NavItem>
          ))}
        </MobileNavList>
        <MobileRightSection>
          <ResumeLink to="/resume" onClick={toggleMenu}>
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
          <LetsTalkButton to="/contact" onClick={toggleMenu}>
            <FaComments />
            Let's Talk
          </LetsTalkButton>
        </MobileRightSection>
      </MobileMenu>
    </NavContainer>
  );
}

export default NavBar;
