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
  padding: 0.5rem;

  @media (min-width: 768px) {
    top: 1rem;
    left: 1rem;
    right: 1rem;
  }
`;

const Nav = styled.nav`
  background-color: ${(props) => props.theme.navBackgroundSolid};
  color: ${(props) => props.theme.navText};
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 15px ${(props) => props.theme.boxShadow};
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
  padding: 1rem;
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
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.logoText};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
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
  font-size: 0.7em;
  font-weight: 400;
  color: ${(props) => props.theme.logoSubtext};
  margin-left: 5px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 1.5rem;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0.1rem;
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
  margin-right: 3rem;
  font-size: 0.6rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    margin-right: 0;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  transition: all 0.3s ease;
  font-weight: 700;
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
    transform: translateY(-1px);
    box-shadow: 0 2px 5px ${(props) => props.theme.boxShadow};
  }

  &.active {
    background-color: ${(props) => props.color};
    color: white;
  }

  &.active:before {
    opacity: 0;
  }

  svg {
    margin-right: 0.3rem;
    font-size: 1.1em;
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
  margin-top: 1rem;
`;

const SwitchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  height: 30px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`;

const SwitchOuter = styled.label`
  height: 100%;
  background: ${(props) =>
    props.isDarkMode ? props.theme.cardBackground : props.theme.body};
  width: 70px;
  border-radius: 30px;
  box-shadow: inset 0px 5px 10px 0px ${(props) => props.theme.boxShadow};
  border: 1px solid ${(props) => props.theme.cardBorder};
  padding: 3px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  position: relative;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 60px;
    height: 30px;
  }
`;

const CheckboxInput = styled.input`
  opacity: 0;
  position: absolute;
`;

const ButtonToggle = styled.div`
  height: 22px;
  width: 22px;
  background: ${(props) =>
    props.isDarkMode
      ? props.theme.cardBackground
      : props.theme.buttonBackground};
  border-radius: 50%;
  box-shadow: 0px 3px 10px 0px ${(props) => props.theme.boxShadow};
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.isDarkMode ? props.theme.text : "#ffd700")};
  font-size: 0.9rem;

  ${CheckboxInput}:checked + & {
    transform: translateX(40px);
  }

  @media (max-width: 768px) {
    height: 24px;
    width: 24px;
    font-size: 0.8rem;

    ${CheckboxInput}:checked + & {
      transform: translateX(35px);
    }
  }
`;

const ButtonIndicator = styled.div`
  height: 18px;
  width: 18px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;

  &.sun {
    right: 6px;
    border: 2px solid #ffd700;
    color: #ffd700;
    background-color: rgba(255, 215, 0, 0.2);
  }

  &.moon {
    left: 6px;
    border: 2px solid ${(props) => props.theme.text};
    color: ${(props) => props.theme.text};
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    height: 16px;
    width: 16px;
    font-size: 0.6rem;

    &.sun {
      right: 5px;
    }

    &.moon {
      left: 5px;
    }
  }
`;

const LetsTalkButton = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  font-size: 0.6rem;
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => props.theme.buttonText};
  background: ${(props) => props.theme.letsTalkGradient};
  border: none;
  border-radius: 40px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 3px 10px ${(props) => props.theme.boxShadow};

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
    transform: translateY(-2px);
    box-shadow: 0 4px 15px ${(props) => props.theme.boxShadow};

    &:before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 5px ${(props) => props.theme.boxShadow};
  }

  svg {
    margin-right: 6px;
    font-size: 1.1em;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.05);
  }
`;

const ResumeLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  margin-right: 0.5rem;
  padding: 0.6rem 1.2rem;
  border: 3px solid ${(props) => props.theme.text};
  border-radius: 5px;
  transition: all 0.3s ease;
  font-weight: 700;
  font-size: 0.6rem;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }

  svg {
    margin-right: 0.3rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
    border-width: 2px;
    width: 7rem;
    margin-left: 4rem;
    margin-bottom: 1rem;

    svg {
      margin-right: 0.2rem;
      font-size: 0.8rem;
    }
  }
`;

const MenuToggle = styled.button`
  display: block;
  background: none;
  border: none;
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;
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
            ROB<LogoSubtext>FOLIO</LogoSubtext>
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
