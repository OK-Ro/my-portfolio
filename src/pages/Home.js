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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(200px, auto);
  gap: 40px;
  padding: 50px;
  margin-top: 8rem;
`;

const BaseCard = styled.div`
  padding: 20px;
  border-radius: 1rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

const ProfileCard = styled(BaseCard)`
  background-color: #e6f3ff;
  grid-column: 1;
  grid-row: 1 / span 2;
  height: 55rem;
  width: 45rem;
`;

const WorkExperienceCard = styled(BaseCard)`
  background-color: #fff0e6;
  grid-column: 2;
  grid-row: 1;
  height: 25rem;
  width: 60rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0em;
  }
  &::-webkit-scrollbar-thumb {
    background: #8c8c8c;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555555;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const SkillsCard = styled(BaseCard)`
  background-color: #e6e6ff;
  grid-column: 2;
  grid-row: 2;
  height: 24rem;
`;

const ProjectsCard = styled(BaseCard)`
  background-color: #e6ffe6;
  grid-column: 3;
  grid-row: 1 / span 2;
  height: 55rem;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ServicesCard = styled(BaseCard)`
  background-color: #ffe6e6;
  grid-column: 1 / span 2;
  grid-row: 3;
`;

const waveAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const glowAnimation = keyframes`
  0% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.8); }
  50% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.8); }
  100% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.8); }
`;

const shootAndExplode = keyframes`
  0% { transform: translateX(0) scale(1); opacity: 1; }
  50% { transform: translateX(100px) scale(1); opacity: 1; }
  75% { transform: translateX(100px) scale(2); opacity: 0.5; }
  100% { transform: translateX(100px) scale(0); opacity: 0; }
`;

const ContactCard = styled(BaseCard)`
  background: linear-gradient(135deg, #e6fff2, #ccf2ff);
  grid-column: 3;
  grid-row: 3;
  height: 20rem;
  width: 55rem;
  padding: 4rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 70%
    );
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
  margin-top: 4rem;
  position: relative;
  z-index: 1;
`;

const LetsTalkTop = styled.span`
  font-size: 4rem;
  font-weight: normal;
  color: #333;
  animation: ${waveAnimation} 2s ease-in-out infinite;
`;

const LetsTalkMiddle = styled.span`
  font-size: 4rem;
  font-weight: bold;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${glowAnimation} 3s ease-in-out infinite;
`;

const BulletIcon = styled.svg`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  transition: transform 0.3s ease;

  ${(props) =>
    props.isAnimating &&
    css`
      animation: ${shootAndExplode} 0.8s forwards;
    `}
`;

const LetsTalkLink = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  color: #4caf50;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 2rem;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #4caf50;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    color: #45a049;

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
  padding: 20px;
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
