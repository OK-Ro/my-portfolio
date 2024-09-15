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
    width: 100%;
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
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

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
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

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
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

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
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    grid-column: 1 / span 2;
    grid-row: 4;
  }

  @media (min-width: 1024px) {
    grid-column: 1 / span 2;
    grid-row: 3;
  }
`;
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
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
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

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
  background: linear-gradient(-45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }
`;

const LetsTalkTop = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  animation: ${float} 3s ease-in-out infinite;
`;

const LetsTalkMiddle = styled.div`
  font-size: 3.5rem;
  font-weight: 800;
  color: #fff;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  background: linear-gradient(to right, #fff, #ffd700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LetsTalkLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: #fff;
  color: #ff6b6b;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

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
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: all 0.4s;
  }

  &:hover:before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    background-color: #ff6b6b;
    color: #fff;
  }
`;

const BulletIcon = styled.svg`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  fill: currentColor;
  animation: ${({ isAnimating }) => (isAnimating ? pulse : "none")} 0.5s
    ease-in-out;
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
