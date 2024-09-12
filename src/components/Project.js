import React from "react";
import styled from "styled-components";

const ProjectItem = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: ${(props) =>
    `${props.theme.scrollbarThumb} ${props.theme.scrollbarTrack}`};

  @media (min-width: 768px) {
    grid-column: 1 / span 2;
    grid-row: 3;
  }

  @media (min-width: 1024px) {
    grid-column: 3;
    grid-row: 1 / span 2;
  }

  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollbarThumb};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme.scrollbarThumbHover};
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollbarTrack};
  }
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
