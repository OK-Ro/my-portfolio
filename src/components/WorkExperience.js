import React, { useState } from "react";
import styled from "styled-components";
import { FaBriefcase } from "react-icons/fa";

const ExperienceWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const ExperienceContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

const Timeline = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #0066cc;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.position === "left" ? "flex-start" : "flex-end"};
  padding-bottom: 2rem;
`;

const TimelineContent = styled.div`
  width: 45%;
  padding: 1.5rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: "";
    position: absolute;
    top: 20px;
    width: 20px;
    height: 20px;
    background-color: #0066cc;
    border-radius: 50%;
    ${(props) => (props.position === "left" ? "right: -30px;" : "left: -30px;")}
  }
`;

const JobTitle = styled.h3`
  font-size: 1.2rem;
  color: #0066cc;
  margin-bottom: 0.5rem;
`;

const Company = styled.h4`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const Period = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
`;

const Icon = styled(FaBriefcase)`
  margin-right: 0.5rem;
`;

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
