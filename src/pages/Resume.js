import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaLanguage,
  FaLinkedin,
  FaGithub,
  FaArrowLeft,
} from "react-icons/fa";
import SkillMeter from "../components/SkillMeter";
import DownloadResumeButton from "../components/DownloadResumeButton";
import LanguageProficiency from "../components/LanguangeProficiency";
import Education from "../components/Education";
import Project from "../components/Project";
import TabInterface from "../components/TabInterface";
import NavBar from "../components/NavBar";
import SmoothScroll from "./SmoothScroll";
import Footer from "../components/Footer";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const PageWrapper = styled.div`
  background: ${({ theme }) => theme.resumeBackground};
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  color: ${({ theme }) => theme.resumeText};
  display: flex;
  flex-direction: column;
  padding: 6rem;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const ResumeContainer = styled(motion.div)`
  width: 100%;
  max-width: 1000px;
  margin: 2.5rem auto 0;
  padding: 2rem;
  background-color: ${({ theme }) => theme.resumeCardBackground};
  color: ${({ theme }) => theme.resumeCardText};
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  margin-bottom: 10rem;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 5rem;
  }
`;

const BackToHome = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-top: 2.5rem;
  width: 96px;
  height: 28px;
  border-radius: 16px;
  position: relative;
  color: black;
  font-size: 8px;
  font-weight: 600;
  text-decoration: none;
  overflow: hidden;
  border: 4px solid transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, #6dd5ed, #2193b0);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &::before {
    content: "";
    background: linear-gradient(to right, #6dd5ed, #2193b0);
    border-radius: 12px;
    height: 22.5px;
    width: 30px;
    position: absolute;
    left: 4px;
    top: 2px;
    z-index: 1;
    transition: width 0.5s;
  }

  &:hover::before {
    width: 89px;
  }

  svg {
    position: absolute;
    left: 8px;
    z-index: 2;
    height: 10px;
    width: 10px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(-1.5px);
  }

  span {
    position: relative;
    z-index: 2;
    transition: color 0.3s ease;
  }

  &:hover span {
    color: white;
  }

  @media (max-width: 768px) {
    width: 160px;
    height: 48px;
    font-size: 14px;
    margin-top: 3rem;

    &::before {
      height: 38px;
      width: 50px;
    }

    &:hover::before {
      width: 148px;
    }
  }
`;

const ResumeHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const ResumeTitle = styled.h1`
  color: ${({ theme }) => theme.resumeCardText};
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
  background: ${({ theme }) =>
    theme.mode === "light"
      ? "linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"
      : "linear-gradient(45deg, #64b5f6, #81c784, #ffd54f, #ff8a65)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ResumeSection = styled(motion.section)`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.resumeSectionBackground};
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.resumeSectionTitle};
  border-bottom: 2px solid ${({ theme }) => theme.resumeSectionTitle};
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
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
  background-color: ${({ theme }) => theme.resumeWorkItemBackground};
  padding: 1rem;
  border-radius: 10px;

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
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.resumeSocialLinkBackground};
  padding: 0.5rem 1rem;
  border-radius: 20px;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.resumeSocialLinkHoverBackground};
    transform: translateY(-2px);
  }
`;

const WorkTimeline = styled.ul`
  list-style-type: none;
  padding: 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: ${({ theme }) => theme.resumeSectionTitle};
  }
`;

const WorkItem = styled(motion.li)`
  margin-bottom: 1.5rem;
  padding: 1rem 1rem 1rem 2rem;
  background-color: ${({ theme }) => theme.resumeWorkItemBackground};
  border-radius: 10px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: -8px;
    top: 20px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.resumeSectionTitle};
  }
`;

const WorkDescription = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin-top: 0.5rem;
`;

const WorkTitle = styled.h3`
  color: ${({ theme }) => theme.resumeWorkTitle};
  margin-bottom: 0.5rem;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const WorkCompany = styled.p`
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.resumeWorkCompany};
`;

const WorkDate = styled.p`
  color: ${({ theme }) => theme.resumeWorkDate};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

function Resume() {
  const profile = {
    name: "Robert Okuni",
    title: "Full Stack Developer",
    phone: "+31 687693145",
    email: "o.robert1994@hotmail.com",
    address: "Fossa italica 17",
    authorizedToWork: "Authorized to work in the Netherlands",
    summary:
      "I am a passionate and self-driven professional with a strong sense of responsibility and dedication to my work. I enjoy creating products that are both innovative and functional, solving real-world problems while offering engaging features. Collaboration is key for me, and I thrive in team environments where we work towards shared goals. My previous experiences have sharpened my communication, problem-solving, and results-oriented skills, making me a reliable and effective team player.",
    linkedin: "https://www.linkedin.com/in/robert-okuni-96425b269/",
    github: "https://github.com/OK-Ro",
  };

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Hack Your Future",
      date: "05/2023 - Present",
      location: "Amsterdam",
      description: `
        • Completed several web development projects using pure HTML, CSS, and JavaScript.
        • Hands-on experience with front-end frameworks like React.js.
        • Knowledge of server-side technologies, including Node.js and Express.
        • Skilled in creating and managing databases using SQL and NoSQL.
        • Familiarity with version control using Git for collaborative development.
        • Practical understanding of deployment strategies and responsive design principles.
      `,
    },
    {
      title: "Digital Media Infrastructure Manager",
      company: "Dstv Uganda",
      date: "2017 - 2019",
      location: "Kampala, Uganda",
      description: `
        • Guided new customers through the account opening process.
        • Provided information on account types, services, and banking products.
        • Addressed customer inquiries and resolved issues.
        • Contributed to improving account opening procedures.
      `,
    },
    {
      title: "Digital Onboarding Specialist",
      company: "Dfcu Bank Uganda",
      date: "2016 - 2017",
      location: "Kampala, Uganda",
      description: `
        • Led and managed a team of technicians for the digital TV upgrade project in Uganda.
        • Coordinated installation activities.
        • Conducted technical assessments and resolved challenges to ensure a smooth upgrade process.
        • Maintained documentation of project specifications and installation procedures.
      `,
    },
  ];

  const education = [
    {
      degree: "Full Stack Web Development Course",
      institution: "Hack Your Future",
      date: "05/2023 - 11/2023",
      description:
        "Intensive 7-month program covering front-end and back-end web development technologies.",
    },
    {
      degree: "Front-End Web Development using JavaScript and React.js",
      institution: "DevTown",
      date: "01/2023 - 03/2023",
      description: "Certificate: https://cert.devtown.in/verify/Z2rj35k",
    },
    {
      degree: "Bachelor Of Information Technology",
      institution: "St Peters University",
      date: "2015 - 2016",
      description: "Foundational studies in Information Technology.",
    },
  ];

  const projects = [
    {
      title: "AzielNet",
      description:
        "Social Media network to connect refugees living in the Netherlands",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://c44-group-a-574c03ac3629.herokuapp.com",
      image:
        "https://s3-alpha.figma.com/hub/file/4091828761/7919e472-3e59-41ba-b950-a5292f2c8dd3-cover.png",
    },
    {
      title: "Robarts Website",
      description: "Website to showcase my own created Art pieces",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://golden-crostata-ada880.netlify.app/",
      image:
        "https://static.wixstatic.com/media/ff0b90_7472365d377e42749049ec29162e6c75~mv2.png/v1/fill/w_1000,h_610,al_c,q_90,usm_0.66_1.00_0.01/ff0b90_7472365d377e42749049ec29162e6c75~mv2.png",
    },
    {
      title: "Music App",
      description: "App allows users to stream and listen to music",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://antifymusic.netlify.app/",
      image:
        "https://cdn.dribbble.com/users/12064044/screenshots/19513113/music_application_v2.2_4x.jpg",
    },
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 95 },
    { name: "ExpressJS", level: 80 },
    { name: "Git", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "API", level: 80 },
    { name: "MySQL", level: 75 },
  ];

  const languages = [
    { name: "English", level: 5, proficiency: "Native" },
    { name: "Dutch", level: 4, proficiency: "Advanced" },
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
          <WorkDescription>
            {exp.description
              .split("•")
              .filter((item) => item.trim())
              .map((item, i) => (
                <li key={i}>{item.trim()}</li>
              ))}
          </WorkDescription>
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
                <strong>Authorization:</strong> {profile.authorizedToWork}
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
              image={project.image}
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
      <SmoothScroll>
        <BackToHome to="/">
          <FaArrowLeft />
          <span>Back To Home</span>
        </BackToHome>
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
      </SmoothScroll>
      <Footer />
    </PageWrapper>
  );
}

export default Resume;
