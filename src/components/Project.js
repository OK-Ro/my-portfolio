import React from "react";
import styled from "styled-components";

const ProjectItem = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.h3`
  margin: 0 0 5px 0;
  color: ${(props) => props.theme.text};
`;

const ProjectTech = styled.p`
  margin: 0 0 10px 0;
  color: ${(props) => props.theme.textSecondary};
  font-style: italic;
`;

const ProjectLink = styled.a`
  color: ${(props) => props.theme.linkColor};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Project({ title, description, technologies, link }) {
  return (
    <ProjectItem>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectTech>{technologies.join(", ")}</ProjectTech>
      <p>{description}</p>
      {link && (
        <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </ProjectLink>
      )}
    </ProjectItem>
  );
}

export default Project;
