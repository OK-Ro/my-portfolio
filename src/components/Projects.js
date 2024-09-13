import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaHeart, FaStar, FaLink } from "react-icons/fa";
const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: ${(props) => props.theme.backgroundCala};
  border-radius: 10px;
  box-shadow: 0 0 10px ${(props) => props.theme.boxShadow};
  height: 80vh;
  overflow-y: auto;
  backdrop-filter: blur(10px);

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
      image:
        "https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png",
      likes: 45,
      rating: 4.5,
      link: "https://github.com/yourusername/ecommerce-project",
    },
    {
      id: 2,
      title: "Weather App",
      description: "Real-time weather application using OpenWeatherMap API",
      image:
        "https://cdn.pixabay.com/photo/2012/04/18/13/21/weather-37012_1280.png",
      likes: 32,
      rating: 4.2,
      link: "https://github.com/yourusername/weather-app",
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description:
        "A Kanban-style task management app with drag-and-drop functionality",
      image:
        "https://cdn.pixabay.com/photo/2020/03/19/21/25/corkboard-4948005_1280.jpg",
      likes: 58,
      rating: 4.7,
      link: "https://github.com/yourusername/task-management",
    },
    {
      id: 4,
      title: "Fitness Tracker",
      description:
        "Mobile app for tracking workouts and nutrition with data visualization",
      image:
        "https://cdn.pixabay.com/photo/2017/01/09/11/30/dumbbell-1966247_1280.jpg",
      likes: 27,
      rating: 4.0,
      link: "https://github.com/yourusername/fitness-tracker",
    },
    {
      id: 5,
      title: "Social Media Analytics Tool",
      description:
        "Dashboard for analyzing social media engagement and growth metrics",
      image:
        "https://cdn.pixabay.com/photo/2020/04/25/12/14/circle-5090539_1280.jpg",
      likes: 39,
      rating: 4.3,
      link: "https://github.com/yourusername/social-analytics",
    },
    {
      id: 6,
      title: "AI-powered Chatbot",
      description:
        "Intelligent chatbot using natural language processing for customer support",
      image:
        "https://cdn.pixabay.com/photo/2019/04/07/23/11/artificial-intelligence-4111587_1280.jpg",
      likes: 51,
      rating: 4.6,
      link: "https://github.com/yourusername/ai-chatbot",
    },
    {
      id: 7,
      title: "Cryptocurrency Portfolio Tracker",
      description:
        "Real-time tracking of cryptocurrency investments and market trends",
      image:
        "https://cdn.pixabay.com/photo/2018/01/18/07/31/bitcoin-3089728_1280.jpg",
      likes: 35,
      rating: 4.1,
      link: "https://github.com/yourusername/crypto-tracker",
    },
    {
      id: 8,
      title: "Augmented Reality Navigation",
      description:
        "Mobile app for AR-based indoor navigation in large buildings",
      image:
        "https://cdn.pixabay.com/photo/2018/06/07/16/49/virtual-3460451_1280.jpg",
      likes: 42,
      rating: 4.4,
      link: "https://github.com/yourusername/ar-navigation",
    },
    {
      id: 9,
      title: "Smart Home Control System",
      description:
        "IoT-based solution for controlling and monitoring home devices",
      image:
        "https://cdn.pixabay.com/photo/2017/06/21/05/42/smart-home-2426903_1280.jpg",
      likes: 37,
      rating: 4.2,
      link: "https://github.com/yourusername/smart-home",
    },
    {
      id: 10,
      title: "Machine Learning Image Classifier",
      description:
        "Deep learning model for classifying images with high accuracy",
      image:
        "https://cdn.pixabay.com/photo/2018/09/18/11/19/artificial-intelligence-3685928_1280.png",
      likes: 48,
      rating: 4.5,
      link: "https://github.com/yourusername/ml-image-classifier",
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
