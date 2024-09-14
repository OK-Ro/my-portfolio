import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaLanguage,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import SkillMeter from "../components/SkillMeter";
import DownloadResumeButton from "../components/DownloadResumeButton";
import LanguageProficiency from "../components/LanguangeProficiency";
import Education from "../components/Education";
import Project from "../components/Project";
import TabInterface from "../components/TabInterface";
import NavBar from "../components/NavBar";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f2f2f7;
  color: #1c1c1e;
  padding: 5rem;

  @media (max-width: 768px) {
    padding: 4rem 0.5rem;
  }
`;

const ResumeContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  margin-top: 10rem;
  padding: 2rem;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ResumeHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const ResumeTitle = styled.h1`
  color: #007aff;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ResumeSection = styled(motion.section)`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SectionTitle = styled.h2`
  color: #007aff;
  border-bottom: 2px solid #007aff;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 600;

  svg {
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProfileSection = styled(ResumeSection)``;

const ProfileInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SocialLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  color: #007aff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    color: #0056b3;
  }
`;

const WorkTimeline = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const WorkItem = styled(motion.li)`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #f2f2f7;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const WorkTitle = styled.h3`
  color: #007aff;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const WorkCompany = styled.p`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const WorkDate = styled.p`
  color: #8e8e93;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

function Resume() {
  const profile = {
    name: "John Doe",
    title: "Senior Software Engineer",
    phone: "+1 (123) 456-7890",
    email: "john.doe@example.com",
    address: "123 Tech Street, San Francisco, CA 94122",
    authorizedToWork: "Authorized to work in the United States",
    summary:
      "Experienced software engineer with a passion for creating efficient and scalable web applications. Skilled in React, Node.js, and cloud technologies.",
    linkedin: "https://www.linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
  };

  const experiences = [
    {
      title: "Software Engineer",
      company: "Tech Corp",
      date: "2020 - Present",
      description:
        "Developed and maintained web applications using React and Node.js.",
    },
    {
      title: "Frontend Developer",
      company: "Innovative Startups",
      date: "2018 - 2020",
      description:
        "Led the development of responsive web interfaces using React and modern frontend technologies.",
    },
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Technology",
      date: "2018 - 2020",
      description:
        'Specialized in Artificial Intelligence and Machine Learning. Thesis on "Deep Learning Applications in Natural Language Processing".',
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "State University",
      date: "2014 - 2018",
      description:
        "Graduated with honors. Participated in multiple hackathons and coding competitions.",
    },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Developed a full-stack e-commerce platform with user authentication, product catalog, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/yourusername/ecommerce-project",
    },
    {
      title: "Weather App",
      description:
        "Created a weather application that provides real-time weather data and forecasts for any location.",
      technologies: ["JavaScript", "React Native", "OpenWeatherMap API"],
      link: "https://github.com/yourusername/weather-app",
    },
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "Python", level: 75 },
  ];

  const languages = [
    { name: "English", level: 5 },
    { name: "Spanish", level: 3 },
    { name: "French", level: 2 },
  ];

  const WorkExperience = ({ experiences }) => (
    <WorkTimeline>
      {experiences.map((exp, index) => (
        <WorkItem
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <WorkTitle>{exp.title}</WorkTitle>
          <WorkCompany>{exp.company}</WorkCompany>
          <WorkDate>{exp.date}</WorkDate>
          <p>{exp.description}</p>
        </WorkItem>
      ))}
    </WorkTimeline>
  );

  const tabsData = [
    {
      title: "Profile",
      icon: <FaUser />,
      content: (
        <ProfileSection>
          <SectionTitle>
            <FaUser /> Profile
          </SectionTitle>
          <ProfileInfo>
            <div>
              <p>
                <strong>Name:</strong> {profile.name}
              </p>
              <p>
                <strong>Title:</strong> {profile.title}
              </p>
              <p>
                <strong>Phone:</strong> {profile.phone}
              </p>
              <p>
                <strong>Email:</strong> {profile.email}
              </p>
            </div>
            <div>
              <p>
                <strong>Address:</strong> {profile.address}
              </p>
              <p>
                <strong>Work Authorization:</strong> {profile.authorizedToWork}
              </p>
            </div>
          </ProfileInfo>
          <SectionTitle>Summary</SectionTitle>
          <p>{profile.summary}</p>
          <SocialLinks>
            <SocialLink
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </SocialLink>
            <SocialLink
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </SocialLink>
          </SocialLinks>
        </ProfileSection>
      ),
    },
    {
      title: "Experience",
      icon: <FaBriefcase />,
      content: (
        <ResumeSection>
          <SectionTitle>
            <FaBriefcase /> Experience
          </SectionTitle>
          <WorkExperience experiences={experiences} />
        </ResumeSection>
      ),
    },
    {
      title: "Education",
      icon: <FaGraduationCap />,
      content: (
        <ResumeSection>
          <SectionTitle>
            <FaGraduationCap /> Education
          </SectionTitle>
          {education.map((edu, index) => (
            <Education
              key={index}
              degree={edu.degree}
              institution={edu.institution}
              date={edu.date}
              description={edu.description}
            />
          ))}
        </ResumeSection>
      ),
    },
    {
      title: "Projects",
      icon: <FaCode />,
      content: (
        <ResumeSection>
          <SectionTitle>
            <FaCode /> Projects
          </SectionTitle>
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </ResumeSection>
      ),
    },
    {
      title: "Skills & Languages",
      icon: <FaLanguage />,
      content: (
        <>
          <ResumeSection>
            <SectionTitle>
              <FaCode /> Skills
            </SectionTitle>
            {skills.map((skill, index) => (
              <SkillMeter key={index} skill={skill.name} level={skill.level} />
            ))}
          </ResumeSection>
          <ResumeSection>
            <SectionTitle>
              <FaLanguage /> Languages
            </SectionTitle>
            {languages.map((lang, index) => (
              <LanguageProficiency
                key={index}
                language={lang.name}
                level={lang.level}
              />
            ))}
          </ResumeSection>
        </>
      ),
    },
  ];

  return (
    <PageWrapper>
      <NavBar />
      <ResumeContainer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ResumeHeader>
          <ResumeTitle>{profile.name}'s Resume</ResumeTitle>
          <DownloadResumeButton
            pdfUrl={`${process.env.PUBLIC_URL}/RobertOkuniResume.pdf`}
          />
        </ResumeHeader>
        <TabInterface tabs={tabsData} />
      </ResumeContainer>
    </PageWrapper>
  );
}

export default Resume;
