import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import NavBar from "../components/NavBar";
import { Link, useNavigate } from "react-router-dom";
import MovingBanner from "./MovingBanner";
import Profile from "../components/Profile";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import HomeServices from "../components/HomeServices";
const CardContainer = styled.div`
  color: ${(props) => props.theme.text};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 50px;
  margin-top: 10rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0;
    margin-top: 5rem;
    width: 100%;
  }
`;

const BaseCard = styled.div`
  padding: 15px;
  border-radius: 1rem;
  box-shadow: 0 4px 30px ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.text};
  transition: background-color 0.3s ease, color 0.3s ease;

  @media (max-width: 768px) {
    padding: 5px;
    box-shadow: 0 4px 1px ${(props) => props.theme.boxShadow};
  }
`;

const ProfileCard = styled(BaseCard)`
  grid-column: 1;
  grid-row: 1 / span 2;
  height: 56rem;
  width: 60rem;
  background-image: url("https://wallpapers.com/images/hd/white-solid-background-k03v99q4obz7fu6p.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  backdrop-filter: blur(380px);
  -webkit-backdrop-filter: blur(80px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 1;
    height: 47rem;
    width: 100%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.09);
  }
`;

const WorkExperienceCard = styled(BaseCard)`
  grid-column: 2;
  grid-row: 1;
  height: 29rem;
  width: 100%;
  overflow-y: auto;
  backdrop-filter: blur(380px);
  -webkit-backdrop-filter: blur(80px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 2;
    height: 47rem;
  }

  &::-webkit-scrollbar {
    width: 0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollbarThumb};
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme.scrollbarThumbHover};
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollbarTrack};
  }
`;

const SkillsCard = styled(BaseCard)`
  grid-column: 2;
  grid-row: 2;
  height: 25rem;
  backdrop-filter: blur(380px);
  -webkit-backdrop-filter: blur(80px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 3;
    height: auto;
    min-height: 24rem;
  }
`;

const ProjectsCard = styled(BaseCard)`
  grid-column: 3;
  grid-row: 1 / span 2;
  height: 55rem;
  overflow-y: auto;
  backdrop-filter: blur(10px);
  border: 20px solid ${(props) => props.theme.cardBackground};
  backdrop-filter: blur(380px);
  -webkit-backdrop-filter: blur(80px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
  scrollbar-color: ${(props) =>
    `${props.theme.scrollbarThumb} ${props.theme.scrollbarTrack}`};

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 4;
    height: 47rem;
    border: 2px solid ${(props) => props.theme.inputb};
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
  grid-column: 1 / span 2;
  grid-row: 3;
  backdrop-filter: blur(380px);
  -webkit-backdrop-filter: blur(80px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 5;
    width: 100%;
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
  grid-column: 3;
  grid-row: 3;
  height: auto;
  width: 60rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 6;
    width: 100%;
    height: auto;
    min-height: 20rem;
    padding: 1rem;
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
  background-size: 500% 500%;
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

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const LetsTalkTop = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  animation: ${float} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
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

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
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

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
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
  background: ${({ theme }) => theme.resumeBackground};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
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
    }, 800);
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
