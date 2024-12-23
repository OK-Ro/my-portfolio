// src/components/About.js
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaMobile,
  FaRocket,
  FaGitAlt,
  FaPaintBrush,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import ColoredText from "./ColoredText";
import FeedbackPopup from "./FeedbackPopup";
import SmoothScroll from "./SmoothScroll";
import Footer from "../components/Footer";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AboutContainer = styled.div`
  padding: 4rem;
  background: ${({ theme }) => theme.resumeBackground};
  color: ${(props) => props.theme.text};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ProfileSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-top: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 8rem;
    gap: 1rem;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  height: 20rem;
  min-width: 125px;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.backgroundCala};

  @media (max-width: 768px) {
    height: auto;
    min-width: 100%;
  }
`;

const RightColumn = styled.div`
  flex: 2;
  min-width: 150px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const Card = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  height: 17.5rem;
  color: ${(props) => props.theme.text};
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 10px ${(props) => props.theme.boxShadow};
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-top: 2rem;
  }
`;

const ProfilePictureCard = styled(Card)`
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  height: auto;
  background-color: ${(props) => props.theme.cardBackground};
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const ProfilePictureWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 150px;
  height: 150px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const CircularText = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${rotate} 20s linear infinite;
`;

const CircularTextSpan = styled.span`
  position: absolute;
  left: 50%;
  font-size: 6px;
  transform-origin: 0 75px;
  color: ${(props) => props.theme.accent};

  @media (max-width: 768px) {
    font-size: 5px;
    transform-origin: 0 50px;
  }
`;

const ProfilePicture = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  top: 12.5px;
  left: 12.5px;
  border: 2.5px solid ${(props) => props.theme.accent};

  @media (max-width: 768px) {
    width: 85px;
    height: 85px;
    top: 7.5px;
    left: 7.5px;
  }
`;

const IntroCard = styled(Card)`
  height: 10rem;

  @media (max-width: 768px) {
    height: 14.75rem;
  }
`;

const Header = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: ${(props) => props.theme.text};
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Subheader = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.secondaryText};
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ThreeColumnSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  height: auto;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-top: 2rem;
    gap: 0;
  }
`;

const Column = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StatisticsSection = styled(Card)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.1rem;
    padding: 0.5rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme.cardBackground};
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 1px solid ${(props) => props.theme.cardBorder};
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.025);
  }

  @media (max-width: 768px) {
    padding: 0.4rem;
    box-shadow: 0 2.5px 7.5px rgba(0, 0, 0, 0.1);
  }
`;

const StatNumber = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  color: ${(props) => props.theme.accent};
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.15rem;
  }
`;

const FooterSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 0.05rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 0.25rem;
    gap: 0.05rem;
  }
`;

const FooterCard = styled(Card)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 18.5rem;

  @media (max-width: 768px) {
    height: auto;
    padding: 0.5rem;
  }
`;

const FooterHeader = styled.h2`
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
  color: ${(props) => props.theme.text};
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const FooterText = styled.p`
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.secondaryText};
  font-size: 0.5rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.45rem;
  }
`;

const CTASection = styled.div`
  perspective: 1000px;
  margin-top: 1rem;
  width: 29rem;

  @media (max-width: 768px) {
    margin-top: 0;

    margin-bottom: 1rem;
  }
`;

const CTACard = styled.div`
  background: linear-gradient(45deg, #00c9ff, #92fe9d);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 5s ease infinite;
  border-radius: 10px;
  padding: 1rem;
  margin-top: 2.5rem;
  text-align: center;
  height: auto;
  min-height: 11rem;
  color: #1a1a1a;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  box-shadow: 0 7.5px 17.5px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: rotateY(5deg) rotateX(2.5deg);
  }
`;

const CTAContent = styled.div`
  transform: translateZ(30px);
  transition: transform 0.6s;

  ${CTACard}:hover & {
    transform: translateZ(40px);
  }
`;

const CTATitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3);
`;

const CTAText = styled.p`
  font-size: 0.55rem;
  margin-bottom: 1rem;
  color: #333;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: #ff6b6b;
  color: white;
  padding: 0.375rem 0.75rem;
  text-decoration: none;
  border-radius: 15px;
  font-weight: bold;
  font-size: 0.5rem;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: all 0.6s;
  }

  &:hover::before {
    left: 50%;
  }

  &:hover {
    background-color: #ff8787;
    transform: translateY(-1.5px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.backgroundCala};
  border-radius: 7.5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  border-radius: 6px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2.5px);
    box-shadow: 0 7.5px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 0.375rem;
  }
`;

const SkillIcon = styled.div`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.375rem;
  }
`;

const SkillTitle = styled.h3`
  font-size: 0.6rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.25rem;

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const SkillDescription = styled.p`
  font-size: 0.45rem;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    font-size: 0.4rem;
  }
`;

const ExperienceCard = styled(Card)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -25%;
    left: -25%;
    width: 200%;
    height: 200%;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 5px,
      rgba(255, 255, 255, 0.1) 5px,
      rgba(255, 255, 255, 0.1) 10px
    );
    animation: ${gradientAnimation} 20s linear infinite;
  }
`;

const EducationCard = styled(Card)`
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
  color: #333;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -25%;
    left: -25%;
    width: 200%;
    height: 200%;
    background: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 5px,
      rgba(255, 255, 255, 0.2) 5px,
      rgba(255, 255, 255, 0.2) 10px
    );
    animation: ${gradientAnimation} 20s linear infinite;
  }
`;

const ExperienceItem = styled.div`
  margin-bottom: 0.75rem;
  position: relative;
  z-index: 1;
  padding-left: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const EducationItem = styled(ExperienceItem)`
  border-left: 1.5px solid rgba(0, 0, 0, 0.2);
`;

const ItemTitle = styled.h3`
  font-size: 0.6rem;
  font-weight: 600;
  margin-bottom: 0.125rem;
`;

const ItemSubtitle = styled.h4`
  font-size: 0.5rem;
  font-weight: 500;
  margin-bottom: 0.125rem;
  opacity: 0.8;
`;

const ItemDate = styled.p`
  font-size: 0.45rem;
  font-style: italic;
`;

const ExperienceIcon = styled(FaBriefcase)`
  position: absolute;
  top: 0;
  left: -0.5rem;
  font-size: 0.6rem;
  background: white;
  color: #667eea;
  padding: 0.15rem;
  border-radius: 50%;
`;

const EducationIcon = styled(FaGraduationCap)`
  position: absolute;
  top: 0;
  left: -0.5rem;
  font-size: 0.6rem;
  background: #333;
  color: #ff9a9e;
  padding: 0.15rem;
  border-radius: 50%;
`;

const skills = [
  {
    icon: <FaReact />,
    title: "Front-end",
    description: "React, NextJS",
    gradient: "linear-gradient(135deg, #61dafb, #764abc)",
  },
  {
    icon: <FaNodeJs />,
    title: "Back-end",
    description: "Node.js, Express",
    gradient: "linear-gradient(135deg, #68a063, #3c873a)",
  },
  {
    icon: <FaDatabase />,
    title: "Databases",
    description: "MySQL, MongoDB",
    gradient: "linear-gradient(135deg, #4db33d, #00758f)",
  },
  {
    icon: <FaCode />,
    title: "API",
    description: "RESTful, GraphQL",
    gradient: "linear-gradient(135deg, #e535ab, #ff7eb3)",
  },
  {
    icon: <FaMobile />,
    title: "Responsive",
    description: "Mobile-first design",
    gradient: "linear-gradient(135deg, #f12711, #f5af19)",
  },
  {
    icon: <FaRocket />,
    title: "Performance",
    description: "Optimization techniques",
    gradient: "linear-gradient(135deg, #396afc, #2948ff)",
  },
  {
    icon: <FaGitAlt />,
    title: "Version Control",
    description: "Git, GitHub",
    gradient: "linear-gradient(135deg, #f05033, #6e5494)",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX",
    description: "Intuitive interfaces",
    gradient: "linear-gradient(135deg, #ff00cc, #333399)",
  },
];

const SkillsSection = () => (
  <SkillsContainer>
    {skills.map((skill, index) => (
      <SkillCard key={index} style={{ background: skill.gradient }}>
        <SkillIcon>{skill.icon}</SkillIcon>
        <SkillTitle>{skill.title}</SkillTitle>
        <SkillDescription>{skill.description}</SkillDescription>
      </SkillCard>
    ))}
  </SkillsContainer>
);

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Hack Your Future",
    date: "05/2023 - Present",
    location: "Amsterdam",
  },
  {
    title: "Digital Media Infrastructure Manager",
    company: "Dstv Uganda",
    date: "2017 - 2019",
    location: "Kampala, Uganda",
  },
  {
    title: "Digital Onboarding Specialist",
    company: "Dfcu Bank Uganda",
    date: "2016 - 2017",
    location: "Kampala, Uganda",
  },
];

const About = () => {
  const text = "Available for Work • Available for Work • ";
  const characters = text.split("");

  return (
    <AboutContainer>
      <NavBar />
      <SmoothScroll>
        <ProfileSection>
          <LeftColumn>
            <ProfilePictureCard>
              <ProfilePictureWrapper>
                <CircularText>
                  {characters.map((char, i) => (
                    <CircularTextSpan
                      key={i}
                      style={{
                        transform: `rotate(${i * 7.5}deg)`,
                      }}
                    >
                      {char}
                    </CircularTextSpan>
                  ))}
                </CircularText>
                <ProfilePicture src="/IMG_2048.jpg" alt="Gole Layla" />
              </ProfilePictureWrapper>
            </ProfilePictureCard>
          </LeftColumn>

          <RightColumn>
            <IntroCard>
              <Header>Hello, I'm Robert Okuni</Header>
              <Subheader>A Full Stack Web Developer</Subheader>
              <FooterText>
                <ColoredText>
                  As a passionate Full Stack Developer, I bring a robust skill
                  set to the table, honed through my experience with Hack Your
                  Future and continuous self-improvement. My expertise spans
                  both front-end and back-end technologies, allowing me to
                  create seamless, end-to-end web solutions. On the front-end, I
                  excel in crafting responsive and interactive user interfaces
                  using React, enhanced by the powerful features of NextJS. I
                  leverage Typescript to ensure type-safe, maintainable code,
                  resulting in more reliable and scalable applications. My
                  proficiency in HTML, CSS, and TailwindCSS enables me to create
                  visually appealing and performant designs that adapt
                  flawlessly across devices. In back-end development, I'm
                  well-versed in NodeJS, using it to build robust server-side
                  applications and RESTful APIs. My experience with both SQL and
                  NoSQL databases, specifically MySql and MongoDB, allows me to
                  design efficient data storage solutions tailored to each
                  project's unique requirements. Version control and
                  collaboration are second nature to me, with Github being an
                  integral part of my development workflow. This not only
                  ensures code integrity but also facilitates seamless teamwork
                  and project management. My journey in web development is
                  driven by a constant thirst for knowledge and a commitment to
                  staying abreast of the latest industry trends. Whether it's
                  optimizing application performance, implementing secure
                  authentication systems, or integrating third-party APIs, I
                  approach each challenge with enthusiasm and a problem-solving
                  mindset. I'm excited about the opportunity to bring my
                  technical skills, creative thinking, and passion for clean,
                  efficient code to new projects, contributing to innovative web
                  solutions that make a real difference.
                </ColoredText>
              </FooterText>
            </IntroCard>
          </RightColumn>
        </ProfileSection>

        <ThreeColumnSection>
          <Column>
            <StatisticsSection>
              <StatItem>
                <StatNumber>2+</StatNumber>
                <FooterText>YEARS EXPERIENCE</FooterText>
              </StatItem>
              <StatItem>
                <StatNumber>5</StatNumber>
                <FooterText>TOTAL PROJECTS</FooterText>
              </StatItem>
              <StatItem>
                <StatNumber>9</StatNumber>
                <FooterText>RECOGNITIONS</FooterText>
              </StatItem>
              <StatItem>
                <StatNumber>0</StatNumber>
                <FooterText>UNHAPPY CLIENTS</FooterText>
              </StatItem>
            </StatisticsSection>
          </Column>
          <Column>
            <ExperienceCard>
              <FooterHeader
                style={{ color: "white", position: "relative", zIndex: 1 }}
              >
                My Experience
              </FooterHeader>
              {experiences.map((experience, index) => (
                <ExperienceItem key={index}>
                  <ExperienceIcon />
                  <ItemTitle>{experience.title}</ItemTitle>
                  <ItemSubtitle>{experience.company}</ItemSubtitle>
                  <ItemDate>
                    {experience.date} | {experience.location}
                  </ItemDate>
                </ExperienceItem>
              ))}
            </ExperienceCard>
          </Column>
          <Column>
            <EducationCard>
              <FooterHeader
                style={{ color: "#333", position: "relative", zIndex: 1 }}
              >
                Education
              </FooterHeader>
              <EducationItem>
                <EducationIcon />
                <ItemTitle>Full Stack Web Development Course</ItemTitle>
                <ItemSubtitle>Hack Your Future</ItemSubtitle>
                <ItemDate>05/2023 - 11/2023</ItemDate>
              </EducationItem>
              <EducationItem>
                <EducationIcon />
                <ItemTitle>Front-End Web Development</ItemTitle>
                <ItemSubtitle>DevTown</ItemSubtitle>
                <ItemDate>01/2023 - 03/2023</ItemDate>
              </EducationItem>
              <EducationItem>
                <EducationIcon />
                <ItemTitle>Bachelor of Information Technology</ItemTitle>
                <ItemSubtitle>St. Peters University</ItemSubtitle>
                <ItemDate>2015 - 2016</ItemDate>
              </EducationItem>
            </EducationCard>
          </Column>
        </ThreeColumnSection>

        <FooterSection>
          <CTASection>
            <CTACard>
              <CTAContent>
                <CTATitle>Let's Work Together</CTATitle>
                <CTAText>
                  Ready to start your next project? Get in touch and let's
                  create something amazing together.
                </CTAText>
                <CTAButton to="/contact">Get In Touch</CTAButton>
              </CTAContent>
            </CTACard>
          </CTASection>
          <FooterCard>
            <FooterHeader>What I Do</FooterHeader>
            <SkillsSection />
          </FooterCard>
          <FooterCard>
            <FeedbackPopup />
          </FooterCard>
        </FooterSection>
      </SmoothScroll>
      <Footer />
    </AboutContainer>
  );
};

export default About;
