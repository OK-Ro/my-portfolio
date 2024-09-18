import React, { useState } from "react";
import styled from "styled-components";
import { FaBriefcase } from "react-icons/fa";

const ExperienceWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  padding: 2rem;
  border-radius: 20px;
  background: linear-gradient(135deg, #f0f4f8, #d9e2ec);

  @media (max-width: 768px) {
    padding: 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ExperienceContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${(props) => props.theme.cardBackground || "#ffffff"};
  border-radius: 20px;
  box-shadow: 0 10px 30px ${(props) => props.theme.boxShadow || "#cccccc"};
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent
    ${(props) => props.theme.backgroundColor || "#ffffff"};
  backdrop-filter: blur(8px);

  @media (max-width: 768px) {
    padding: 1rem;
    height: 100%;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.backgroundColor || "#ffffff"};
  }
`;

const TitleWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.cardBackground || "#ffffff"};
  z-index: 1;
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${(props) => props.theme.text || "#333333"};
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(45deg, #ff6f61, #ffcc00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0;
  }

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: ${(props) => props.theme.accent || "#ff6f61"};
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 0;
      transform: none;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.position === "left" ? "flex-start" : "flex-end"};
  padding-bottom: 2rem;
  position: relative;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 20px;
  }
`;

const TimelineContent = styled.div`
  width: 45%;
  padding: 1.5rem;
  background-color: ${(props) => props.color || "#ffffff"};
  border-radius: 12px;
  box-shadow: 0 5px 15px ${(props) => props.theme.boxShadow || "#aaaaaa"};
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${(props) => props.theme.accent || "#ff6f61"};
  transform: translateX(
    ${(props) => (props.position === "left" ? "10px" : "-10px")}
  );
  margin-left: ${(props) => (props.position === "left" ? "0" : "auto")};
  margin-right: ${(props) => (props.position === "right" ? "0" : "auto")};

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    transform: none;
    margin-left: 0;
    margin-right: 0;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 20px ${(props) => props.theme.boxShadow || "#888888"};

    @media (max-width: 768px) {
      transform: translateY(-5px);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 20px;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.accent || "#ff6f61"};
    border-radius: 50%;
    ${(props) => (props.position === "left" ? "right: -10px;" : "left: -10px;")}

    @media (max-width: 768px) {
      left: -30px;
    }
  }
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  color: ${(props) => props.theme.accent || "#ff6f61"};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Company = styled.h4`
  font-size: 1.1rem;
  color: ${(props) => props.theme.text || "#333333"};
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Period = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.secondaryText || "#666666"};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.text || "#333333"};
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Icon = styled(FaBriefcase)`
  margin-right: 0.5rem;
  color: ${(props) => props.theme.accent || "#ff6f61"};
`;

const colors = [
  "#ffadad", // light red
  "#ffd6a5", // light orange
  "#fdffb6", // light yellow
  "#caffbf", // light green
  "#9bfbc0", // light teal
  "#a0c4ff", // light blue
  "#b9fbc0", // light mint
];
const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Hack Your Future",
    period: "May 2023 - Present",
    description:
      "Completed multiple web development projects using HTML, CSS, JavaScript, React.js, and Node.js. Gained hands-on experience in both front-end and back-end technologies, database management, and version control.",
  },
  {
    id: 2,
    title: "Digital Onboarding Specialist",
    company: "Dfcu Bank Uganda",
    period: "2016 - 2017",
    description:
      "Led the digital TV upgrade project, managing a team of technicians and ensuring smooth installations. Conducted technical assessments and provided solutions for any challenges.",
  },
  {
    id: 3,
    title: "Digital Media Infrastructure Manager",
    company: "Dstv Uganda",
    period: "2017 - 2019",
    description:
      "Guided customers through account setup, resolved inquiries, and contributed to improving account opening processes. Provided technical support and coordinated digital media projects.",
  },
];

const WorkExperience = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <ExperienceWrapper>
      <ExperienceContainer>
        <TitleWrapper>
          <Title>Work Experience</Title>
        </TitleWrapper>
        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              position={index % 2 === 0 ? "left" : "right"}
            >
              <TimelineContent
                position={index % 2 === 0 ? "left" : "right"}
                color={colors[index % colors.length]} // Assign color based on index
                onClick={() => setActiveId(activeId === exp.id ? null : exp.id)}
              >
                <JobTitle>
                  <Icon />
                  {exp.title}
                </JobTitle>
                <Company>{exp.company}</Company>
                <Period>{exp.period}</Period>
                {activeId === exp.id && (
                  <Description>{exp.description}</Description>
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </ExperienceContainer>
    </ExperienceWrapper>
  );
};

export default WorkExperience;
