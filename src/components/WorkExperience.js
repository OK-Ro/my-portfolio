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

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${(props) => props.theme.text || "#333333"};
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(45deg, #ff6f61, #ffcc00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Timeline = styled.div`
  position: relative;
  padding: 0 20px;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: ${(props) => props.theme.accent || "#ff6f61"};
    transform: translateX(-50%);
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.position === "left" ? "flex-start" : "flex-end"};
  padding-bottom: 2rem;
  position: relative;
  margin-bottom: 2rem;
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

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 20px ${(props) => props.theme.boxShadow || "#888888"};
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
  }
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  color: ${(props) => props.theme.accent || "#ff6f61"};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;

const Company = styled.h4`
  font-size: 1.1rem;
  color: ${(props) => props.theme.text || "#333333"};
  margin-bottom: 0.5rem;
`;

const Period = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.secondaryText || "#666666"};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.text || "#333333"};
  line-height: 1.6;
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
    title: "UI Designer",
    company: "Apple",
    period: "2021 - Present",
    description:
      "Leading UI design for cutting-edge products, collaborating with cross-functional teams to deliver intuitive and visually stunning interfaces.",
  },
  {
    id: 2,
    title: "Front-end Developer",
    company: "Google",
    period: "2015 - 2020",
    description:
      "Developed and maintained large-scale web applications using modern front-end technologies, focusing on performance optimization and accessibility.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Intel",
    period: "2010 - 2015",
    description:
      "Created user-centered designs for various digital products, conducted user research, and implemented design systems to ensure consistency across platforms.",
  },
  {
    id: 4,
    title: "UI Designer",
    company: "Intel",
    period: "2009 - 2010",
    description:
      "Started career as a UI designer, working on internal tools and contributing to the company's design language.",
  },
];

const WorkExperience = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <ExperienceWrapper>
      <ExperienceContainer>
        <Title>Work Experience</Title>
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
