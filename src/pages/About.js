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
} from "react-icons/fa";

import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import {} from "react-icons/fa";
import NavBar from "../components/NavBar";
import ColoredText from "./ColoredText";
import FeedbackPopup from "./FeedbackPopup";
const AboutContainer = styled.div`
  padding: 3rem;
  background-color: ${(props) => props.theme.body};
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
  gap: 3rem;
  margin-top: 10rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 12rem;
    gap: 2rem;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  height: 40rem;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.backgroundCala};

  @media (max-width: 768px) {
    height: auto;
    min-width: 100%;
  }
`;

const RightColumn = styled.div`
  flex: 2;
  min-width: 300px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const Card = styled.div`
  margin-top: 5rem;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.backgroundCala};
  color: ${(props) => props.theme.text};
  transition: background-color 0.3s ease, color 0.3s ease;
  border: 20px solid ${(props) => props.theme.cardBorderline};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px ${(props) => props.theme.boxShadow};
  }

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 2rem;
  }
`;

const ProfilePictureCard = styled(Card)`
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  height: auto;
  background-color: ${(props) => props.theme.cardBackground};

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const ProfilePictureWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 300px;
  height: 300px;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
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
  font-size: 12px;
  transform-origin: 0 150px;
  color: ${(props) => props.theme.accent};

  @media (max-width: 768px) {
    font-size: 10px;
    transform-origin: 0 100px;
  }
`;

const ProfilePicture = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  top: 25px;
  left: 25px;
  border: 5px solid ${(props) => props.theme.accent};

  @media (max-width: 768px) {
    width: 170px;
    height: 170px;
    top: 15px;
    left: 15px;
  }
`;

const IntroCard = styled(Card)`
  height: 20rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    height: 29.5rem;
  }
`;

const Header = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.text};
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Subheader = styled.p`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.secondaryText};
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ThreeColumnSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  height: 30rem;
  margin-top: 5rem;
  background-color: ${(props) => props.theme.cardBackground};

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-top: 2rem;
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
  gap: 0.2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme.cardBackground};
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid ${(props) => props.theme.cardBorder};
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const StatNumber = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.accent};
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.3rem;
  }
`;

const ExperienceItem = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const FooterSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-top: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 1rem;
    gap: 0.1rem;
  }
`;

const ColumnCard = styled.div`
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  height: 35rem;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.backgroundCala};
  color: ${(props) => props.theme.text};
  transition: background-color 0.3s ease, color 0.3s ease;
  border: 20px solid ${(props) => props.theme.cardBorderline};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px ${(props) => props.theme.boxShadow};
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 1rem;
  }
`;

const FooterCard = styled(Card)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const FooterHeader = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.text};
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FooterText = styled.p`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.secondaryText};
  font-size: 1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: ${(props) => props.theme.accent};
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 20px;
  font-weight: 600;
  transition: all 0.3s ease;
  align-self: flex-start;
  margin-top: auto;
  font-size: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.accentHover};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const ExperienceTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: ${(props) => props.theme.text};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ExperienceDetails = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.secondaryText};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.backgroundCala};
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SkillDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
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
              <ProfilePicture
                src="https://www.bing.com/th?id=OIP.F8N47NFCKAaMf97INBReHQHaJz&w=150&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                alt="Gole Layla"
              />
            </ProfilePictureWrapper>
          </ProfilePictureCard>
        </LeftColumn>

        <RightColumn>
          <IntroCard>
            <Header>Hello, I'm Robert Okuni</Header>
            <Subheader>A Full Stack Web Developer</Subheader>
            <FooterText>
              <ColoredText>
                As a passionate Full Stack Developer, I bring a robust skill set
                to the table, honed through my experience with Hack Your Future
                and continuous self-improvement. My expertise spans both
                front-end and back-end technologies, allowing me to create
                seamless, end-to-end web solutions. On the front-end, I excel in
                crafting responsive and interactive user interfaces using React,
                enhanced by the powerful features of NextJS. I leverage
                Typescript to ensure type-safe, maintainable code, resulting in
                more reliable and scalable applications. My proficiency in HTML,
                CSS, and TailwindCSS enables me to create visually appealing and
                performant designs that adapt flawlessly across devices. In
                back-end development, I'm well-versed in NodeJS, using it to
                build robust server-side applications and RESTful APIs. My
                experience with both SQL and NoSQL databases, specifically MySql
                and MongoDB, allows me to design efficient data storage
                solutions tailored to each project's unique requirements.
                Version control and collaboration are second nature to me, with
                Github being an integral part of my development workflow. This
                not only ensures code integrity but also facilitates seamless
                teamwork and project management. My journey in web development
                is driven by a constant thirst for knowledge and a commitment to
                staying abreast of the latest industry trends. Whether it's
                optimizing application performance, implementing secure
                authentication systems, or integrating third-party APIs, I
                approach each challenge with enthusiasm and a problem-solving
                mindset. I'm excited about the opportunity to bring my technical
                skills, creative thinking, and passion for clean, efficient code
                to new projects, contributing to innovative web solutions that
                make a real difference.
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
          <ColumnCard>
            <FooterHeader>What I Do</FooterHeader>
            <SkillsSection />
          </ColumnCard>
        </Column>
        <Column>
          <Card>
            <FooterHeader>My Experience</FooterHeader>
            {experiences.map((experience, index) => (
              <ExperienceItem key={index}>
                <ExperienceTitle>{experience.title}</ExperienceTitle>
                <ExperienceDetails>
                  {experience.company} | {experience.date} |{" "}
                  {experience.location}
                </ExperienceDetails>
              </ExperienceItem>
            ))}
          </Card>
        </Column>
      </ThreeColumnSection>

      <FooterSection>
        <FooterCard>
          <FooterHeader>Let's Work Together</FooterHeader>
          <FooterText>
            Ready to start your next project? Get in touch and let's create
            something amazing together.
          </FooterText>
          <CTAButton to="/contact">Get In Touch</CTAButton>
        </FooterCard>
        <FooterCard>
          <FooterHeader>Education</FooterHeader>
          <div>
            <FooterText>
              Master Degree in Designing
              <br />
              University of California | 2019 - 2021
            </FooterText>
            <FooterText>
              Bachelor Degree in Psychology
              <br />
              University of California | 2015 - 2019
            </FooterText>
          </div>
        </FooterCard>
        <FooterCard>
          <FeedbackPopup />
        </FooterCard>
      </FooterSection>
    </AboutContainer>
  );
};

export default About;
