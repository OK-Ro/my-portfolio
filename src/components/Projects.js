import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaHeart, FaStar, FaLink } from "react-icons/fa";

// Container for the entire projects section
const ProjectsContainer = styled.div`
  width: 100%;
  padding: 40px 20px;
  background-color: ${(props) => props.theme.backgroundCala};
  border-radius: 10px;
  box-shadow: 0 0 20px ${(props) => props.theme.boxShadow};
  backdrop-filter: blur(10px);
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 10px;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

// Header section for Projects
const ProjectsHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.accent};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.secondaryText};
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// Individual project card
const ProjectCard = styled.div`
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 25px;
  box-shadow: 0 8px 16px ${(props) => props.theme.boxShadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px ${(props) => props.theme.boxShadowHover};
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: ${(props) => props.theme.accent};
  margin: 0 0 10px 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProjectDescription = styled.p`
  color: ${(props) => props.theme.secondaryText};
  margin-bottom: 20px;
  font-size: 1rem;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    height: 180px;
  }
`;

const InteractionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  color: ${(props) =>
    props.liked ? props.theme.accent : props.theme.secondaryText};
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.accentHover};
  }
`;

const RatingDisplay = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.warning};
  font-size: 18px;
`;

const ProjectLink = styled.a`
  color: ${(props) => props.theme.accent};
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.accentHover};
    text-decoration: underline;
  }
`;

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image:
        "https://cdn.dribbble.com/userupload/8957039/file/original-369cfc1847437d7b4d1beab9e1c652e3.png?resize=1504x1128&vertical=center",
      likes: 45,
      rating: 4.5,
      link: "https://github.com/yourusername/ecommerce-project",
    },
    // ...other projects
  ]);

  const [likedProjects, setLikedProjects] = useState({});

  useEffect(() => {
    // Load liked projects from localStorage
    const savedLikes = JSON.parse(localStorage.getItem("likedProjects")) || {};
    setLikedProjects(savedLikes);
  }, []);

  const handleLike = (projectId) => {
    setProjects(
      projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              likes: likedProjects[projectId]
                ? project.likes - 1
                : project.likes + 1,
            }
          : project
      )
    );

    setLikedProjects((prev) => {
      const newLikedProjects = { ...prev, [projectId]: !prev[projectId] };
      localStorage.setItem("likedProjects", JSON.stringify(newLikedProjects));
      return newLikedProjects;
    });
  };

  return (
    <ProjectsContainer>
      <ProjectsHeader>
        <Title>My Projects</Title>
        <SubTitle>Explore my latest work and innovations</SubTitle>
      </ProjectsHeader>
      {projects.map((project) => (
        <ProjectCard key={project.id}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectImage src={project.image} alt={project.title} />
          <ProjectDescription>{project.description}</ProjectDescription>
          <InteractionBar>
            <LikeButton
              onClick={() => handleLike(project.id)}
              liked={likedProjects[project.id]}
            >
              <FaHeart style={{ marginRight: "5px" }} /> {project.likes}
            </LikeButton>
            <RatingDisplay>
              <FaStar style={{ marginRight: "5px" }} />{" "}
              {project.rating.toFixed(1)}
            </RatingDisplay>
            <ProjectLink
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLink style={{ marginRight: "5px" }} /> View Project
            </ProjectLink>
          </InteractionBar>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
