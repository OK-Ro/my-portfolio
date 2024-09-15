import React, { useState } from "react";
import styled from "styled-components";
import {
  FaJs,
  FaCss3,
  FaHtml5,
  FaGitAlt,
  FaReact,
  FaServer,
} from "react-icons/fa";
import { SiMysql, SiMongodb, SiExpress } from "react-icons/si";

const SkillsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Header = styled.header`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  font-family: "Roboto", sans-serif;

  h1 {
    margin: 0;
    font-size: 2rem;
    font-weight: 900;
    background: linear-gradient(135deg, #ff6f61, #ffcc00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
    letter-spacing: 2px;
  }
`;

const HexGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin: 20px 0;
`;

const HexItem = styled.div`
  width: 100px;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const HexInner = styled.div`
  width: 96px;
  height: 110px;
  background-color: ${(props) => props.color};
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 5px;
`;

const SkillName = styled.div`
  font-size: 0.8rem;
  text-align: center;
`;

const SkillDetails = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 80%;
  max-width: 500px;

  @media (max-width: 600px) {
    width: 90%;
  }

  h3 {
    margin-top: 0;
  }

  button {
    margin-top: 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const skills = [
  {
    name: "JavaScript",
    icon: FaJs,
    color: "#F0DB4F",
    proficiency: 90,
    description:
      "Extensive experience in modern JavaScript, including ES6+ features.",
  },
  {
    name: "CSS",
    icon: FaCss3,
    color: "#264de4",
    proficiency: 85,
    description:
      "Proficient in responsive design, Flexbox, Grid, and CSS animations.",
  },
  {
    name: "HTML",
    icon: FaHtml5,
    color: "#e34c26",
    proficiency: 95,
    description: "Expert in semantic HTML5 and accessibility best practices.",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F1502F",
    proficiency: 80,
    description:
      "Experienced in version control, branching strategies, and collaborative development.",
  },
  {
    name: "React",
    icon: FaReact,
    color: "#61DBFB",
    proficiency: 88,
    description:
      "Skilled in building complex applications with React, including state management with Redux.",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#00758F",
    proficiency: 75,
    description:
      "Proficient in database design, complex queries, and optimization.",
  },
  {
    name: "API",
    icon: FaServer,
    color: "#3C873A",
    proficiency: 85,
    description: "Experienced in RESTful API design and integration.",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#4DB33D",
    proficiency: 70,
    description:
      "Familiar with NoSQL database concepts and MongoDB operations.",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#303030",
    proficiency: 80,
    description: "Skilled in building robust backend services with Express.js.",
  },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <SkillsContainer>
      <Header>
        <h1>My Skills</h1>
      </Header>
      <HexGrid>
        {skills.map((skill, index) => (
          <HexItem key={index} onClick={() => setSelectedSkill(skill)}>
            <HexInner color={skill.color}>
              <SkillIcon as={skill.icon} />
              <SkillName>{skill.name}</SkillName>
            </HexInner>
          </HexItem>
        ))}
      </HexGrid>
      {selectedSkill && (
        <SkillDetails>
          <h3>{selectedSkill.name}</h3>
          <p>Proficiency: {selectedSkill.proficiency}%</p>
          <p>{selectedSkill.description}</p>
          <button onClick={() => setSelectedSkill(null)}>Close</button>
        </SkillDetails>
      )}
    </SkillsContainer>
  );
};

export default Skills;
