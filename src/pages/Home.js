import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import NavBar from "../components/NavBar";
import { Link, useNavigate } from "react-router-dom";
import MovingBanner from "./MovingBanner";
import Profile from "../components/Profile";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import HomeServices from "../components/HomeServices";

const CardContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;
  margin-top: 6rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    padding: 30px;
    margin-top: 7rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    padding: 50px;
    margin-top: 8rem;
  }
`;

const BaseCard = styled.div`
  padding: 15px;
  border-radius: 1rem;
  box-shadow: 0 4px 30px ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.text};
  transition: background-color 0.3s ease, color 0.3s ease;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const ProfileCard = styled(BaseCard)`
  grid-column: 1;
  grid-row: 1;
  height: auto;
  width: 100%;

  @media (min-width: 768px) {
    grid-row: 1 / span 2;
    height: 55rem;
  }

  @media (min-width: 1024px) {
    width: 45rem;
  }
`;

const WorkExperienceCard = styled(BaseCard)`
  grid-column: 1;
  grid-row: 2;
  height: 25rem;
  width: 100%;
  overflow-y: auto;

  @media (min-width: 768px) {
    grid-column: 2;
    grid-row: 1;
  }

  @media (min-width: 1024px) {
    width: 60rem;
  }

  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollbarThumb};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme.scrollbarThumbHover};
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollbarTrack};
  }
`;

const SkillsCard = styled(BaseCard)`
  grid-column: 1;
  grid-row: 3;
  height: 24rem;

  @media (min-width: 768px) {
    grid-column: 2;
    grid-row: 2;
  }
`;

const ProjectsCard = styled(BaseCard)`
  grid-column: 1;
  grid-row: 4;
  height: 55rem;
  overflow-y: auto;
  backdrop-filter: blur(10px);

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
  scrollbar-color: ${(props) =>
    `${props.theme.scrollbarThumb} ${props.theme.scrollbarTrack}`};

  @media (min-width: 768px) {
    grid-column: 1 / span 2;
    grid-row: 3;
  }

  @media (min-width: 1024px) {
    grid-column: 3;
    grid-row: 1 / span 2;
  }

  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollbarThumb};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme.scrollbarThumbHover};
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollbarTrack};
  }
`;

const ServicesCard = styled(BaseCard)`
  grid-column: 1;
  grid-row: 5;

  @media (min-width: 768px) {
    grid-column: 1 / span 2;
    grid-row: 4;
  }

  @media (min-width: 1024px) {
    grid-column: 1 / span 2;
    grid-row: 3;
  }
`;

const waveAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const glowAnimation = keyframes`
  0% { text-shadow: 0 0 5px ${(props) => props.theme.textShadow}; }
  50% { text-shadow: 0 0 20px ${(props) => props.theme.textShadow}; }
  100% { text-shadow: 0 0 5px ${(props) => props.theme.textShadow}; }
`;

const shootAndExplode = keyframes`
  0% { transform: translateX(0) scale(1); opacity: 1; }
  50% { transform: translateX(100px) scale(1); opacity: 1; }
  75% { transform: translateX(100px) scale(2); opacity: 0.5; }
  100% { transform: translateX(100px) scale(0); opacity: 0; }
`;

const ContactCard = styled(BaseCard)`
  background: ${(props) => props.theme.contactCardGradient};
  grid-column: 1;
  grid-row: 6;
  height: auto;
  width: 100%;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    grid-column: 1 / span 2;
    grid-row: 5;
    padding: 3rem;
  }

  @media (min-width: 1024px) {
    grid-column: 3;
    grid-row: 3;
    height: 20rem;
    width: 55rem;
    padding: 4rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px ${(props) => props.theme.boxShadow};
  }

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: ${(props) => props.theme.contactCardShine};
    transform: rotate(45deg);
    transition: all 0.5s ease;
  }

  &:hover::before {
    top: -75%;
    left: -75%;
  }
`;

const LetsTalkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  line-height: 1.5;
  margin-top: 2rem;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    margin-top: 3rem;
  }

  @media (min-width: 1024px) {
    margin-top: 4rem;
  }
`;

const LetsTalkTop = styled.span`
  font-size: 2.5rem;
  font-weight: normal;
  color: ${(props) => props.theme.text};
  animation: ${waveAnimation} 2s ease-in-out infinite;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const LetsTalkMiddle = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  background: ${(props) => props.theme.letsTalkGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${glowAnimation} 3s ease-in-out infinite;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const BulletIcon = styled.svg`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  transition: transform 0.3s ease;
  fill: ${(props) => props.theme.text};

  ${(props) =>
    props.isAnimating &&
    css`
      animation: ${shootAndExplode} 0.8s forwards;
    `}
`;

const LetsTalkLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.letsTalkLink};
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
    margin-top: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: ${(props) => props.theme.letsTalkLink};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    color: ${(props) => props.theme.letsTalkLinkHover};

    &::before {
      visibility: visible;
      transform: scaleX(1);
    }

    ${BulletIcon} {
      transform: translateX(10px);
    }
  }
`;

const PageContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  padding: 10px;

  @media (min-width: 768px) {
    padding: 15px;
  }

  @media (min-width: 1024px) {
    padding: 20px;
  }
`;

function Home({ toggleTheme, isDarkTheme }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleLetsTalkClick = (e) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => {
      navigate("/contact");
    }, 800); // Match this with the animation duration
  };

  return (
    <div className="home">
      <PageContainer>
        <NavBar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <CardContainer>
          <ProfileCard>
            <Profile />
          </ProfileCard>
          <WorkExperienceCard>
            <WorkExperience />
          </WorkExperienceCard>
          <SkillsCard>
            <Skills />
          </SkillsCard>
          <ProjectsCard>
            <Projects />
          </ProjectsCard>
          <ServicesCard>
            <HomeServices />
          </ServicesCard>
          <ContactCard>
            <MovingBanner />
            <LetsTalkContainer>
              <LetsTalkTop>Let's👋</LetsTalkTop>
              <LetsTalkMiddle>Work Together</LetsTalkMiddle>
              <LetsTalkLink to="/contact" onClick={handleLetsTalkClick}>
                Let's Talk
                <BulletIcon
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  isAnimating={isAnimating}
                >
                  <circle cx="10" cy="10" r="8" />
                </BulletIcon>
              </LetsTalkLink>
            </LetsTalkContainer>
          </ContactCard>
        </CardContainer>
      </PageContainer>
    </div>
  );
}

export default Home;
