import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaHeart, FaStar, FaLink } from "react-icons/fa";
const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 20px;

  border-radius: 10px;
  box-shadow: 0 0 10px ${(props) => props.theme.boxShadow};
  height: 80vh;
  overflow-y: auto;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ProjectCard = styled.div`
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px ${(props) => props.theme.boxShadow};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px ${(props) => props.theme.boxShadow};
  }
  @media (max-width: 768px) {
    padding: 2px;
  }
`;

const ProjectTitle = styled.h3`
  margin: 0 0 10px 0;
  color: ${(props) => props.theme.accent};
`;

const ProjectDescription = styled.p`
  color: ${(props) => props.theme.secondaryText};
  margin-bottom: 15px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    height: 18rem;
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
  font-size: 16px;
  display: flex;
  align-items: center;
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

const RatingDisplay = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.warning};
`;

const ProjectLink = styled.a`
  color: ${(props) => props.theme.accent};
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: color 0.2s;

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
      image: "/lumiaz.jpeg",
      likes: 45,
      rating: 4.5,
      link: "https://lumiaz.netlify.app/",
    },
    {
      id: 2,
      title: "Weather App",
      description: "Real-time weather application using OpenWeatherMap API",
      image: "/weaza.jpeg",
      likes: 32,
      rating: 4.2,
      link: "https://weaza.netlify.app",
    },

    {
      id: 3,
      title: "Smart Homes Uganda",
      description:
        "A platform showcasing smart home technologies and services in Uganda.",
      image: "/smarthomeug.jpeg",
      likes: 58,
      rating: 4.7,
      link: "https://www.smarthomesug.com/",
    },
    {
      id: 4,
      title: "Alice AI Assistant",
      description:
        "Alice is an AI-powered virtual assistant that interacts through speech recognition and natural language processing. Users can ask questions, receive answers, and get personalized responses in real-time. Built with React and integrated with speech-to-text and text-to-speech technologies.",
      image: "/alice.jpeg",
      likes: 27,
      rating: 4.0,
      link: "https://allice.netlify.app",
    },
    {
      id: 5,

      title: "Cryptocurrency Portfolio Tracker",
      description:
        "Real-time tracking of cryptocurrency investments and market trends",
      image: "/cripto.jpeg",
      likes: 35,
      rating: 4.1,
      link: "https://criipto.netlify.app",
    },
    {
      id: 6,
      title: "AI-powered Chatbot",
      description:
        "Intelligent chatbot using natural language processing for customer support",
      image:
        "https://cdn.dribbble.com/userupload/8783875/file/original-9a4074fda16ab73133bdd0af4ee0308c.png?resize=1024x768&vertical=center",
      likes: 51,
      rating: 4.6,
      link: "https://github.com/yourusername/ai-chatbot",
    },
    {
      id: 7,
      title: "Social Media Analytics Tool",
      description:
        "Dashboard for analyzing social media engagement and growth metrics",
      image:
        "https://cdn.dribbble.com/userupload/4177061/file/original-adab4509b4cab6df18d2a802975e9d08.png?resize=1200x900",
      likes: 39,
      rating: 4.3,
      link: "https://github.com/yourusername/social-analytics",
    },

    {
      id: 9,
      title: "Smart Home Control System",
      description:
        "IoT-based solution for controlling and monitoring home devices",
      image:
        "https://cdn.dribbble.com/userupload/9008964/file/original-17abfae69faaeaac8a8b42059d3118a5.png?resize=1200x1200&vertical=center",
      likes: 37,
      rating: 4.2,
      link: "https://github.com/yourusername/smart-home",
    },

    {
      id: 10,
      title: "Task Management Dashboard",
      description:
        "A Kanban-style task management app with drag-and-drop functionality",
      image:
        "https://cdn.dribbble.com/users/1615584/screenshots/15378686/media/cff7c84fa3b7113a8b6ba2a42ea86dd0.jpg?resize=1000x750&vertical=center",
      likes: 58,
      rating: 4.7,
      link: "https://github.com/yourusername/task-management",
    },
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
