import React from "react";
import styled from "styled-components";
import SkillMeter from "../components/SkillMeter";
import DownloadResumeButton from "../components/DownloadResumeButton";
import LanguageProficiency from "../components/LanguangeProficiency";
import Education from "../components/Education";
import Project from "../components/Project";
import TabInterface from "../components/TabInterface";
import NavBar from "../components/NavBar";

const ResumeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const ResumeSection = styled.section`
  margin-bottom: 2rem;
`;

const ResumeTitle = styled.h2`
  color: ${(props) => props.theme.text};
  border-bottom: 2px solid ${(props) => props.theme.buttonBackground};
  padding-bottom: 0.5rem;
  margin-top: 15rem;
`;

const ProfileSection = styled.section`
  margin-bottom: 2rem;
`;

const ProfileInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const SocialLinks = styled.div`
  margin-top: 1rem;
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

  const WorkTimeline = ({ experiences }) => (
    <ul>
      {experiences.map((exp, index) => (
        <li key={index}>
          <h3>{exp.title}</h3>
          <p>{exp.company}</p>
          <p>{exp.date}</p>
          <p>{exp.description}</p>
        </li>
      ))}
    </ul>
  );

  const tabsData = [
    {
      title: "Profile",
      content: (
        <ProfileSection>
          <ResumeTitle>Profile</ResumeTitle>
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
          <ResumeTitle>Summary</ResumeTitle>
          <p>{profile.summary}</p>
          <SocialLinks>
            <ResumeTitle>Find Me Online</ResumeTitle>
            <p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </SocialLinks>
        </ProfileSection>
      ),
    },
    {
      title: "Experience",
      content: (
        <ResumeSection>
          <WorkTimeline experiences={experiences} />
        </ResumeSection>
      ),
    },
    {
      title: "Education",
      content: (
        <ResumeSection>
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
      content: (
        <ResumeSection>
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
      content: (
        <>
          <ResumeSection>
            <NavBar />
            <ResumeTitle>Skills</ResumeTitle>
            {skills.map((skill, index) => (
              <SkillMeter key={index} skill={skill.name} level={skill.level} />
            ))}
          </ResumeSection>
          <ResumeSection>
            <ResumeTitle>Languages</ResumeTitle>
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
    <ResumeContainer>
      <h1>{profile.name}'s Resume</h1>
      <DownloadResumeButton pdfUrl="resume.pdf" />
      <TabInterface tabs={tabsData} />
    </ResumeContainer>
  );
}

export default Resume;
