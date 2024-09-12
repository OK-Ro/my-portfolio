import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import NavBar from "../components/NavBar";

const PortfolioContainer = styled.div`
  margin: 0 auto;
  padding: 5rem;
`;

const ContentWrapper = styled.div`
  margin-top: 10rem;
`;

const BackToHome = styled(Link)`
  text-decoration: none;
  color: #0066cc;
  font-weight: bold;
  margin-bottom: 2rem;
  display: inline-block;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subheader = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #666;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
  background-color: ${(props) => (props.active ? "#0066cc" : "#f0f0f0")};
  color: ${(props) => (props.active ? "white" : "#333")};
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "#0052a3" : "#e0e0e0")};
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  gap: 1.5rem;
`;

const ProjectCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &:nth-child(1) {
    grid-column: span 2;
    grid-row: span 2;
    height: 615px;
  }

  &:nth-child(4) {
    grid-column: span 2;
  }

  &:nth-child(5) {
    grid-row: span 2;
    height: 615px;
  }

  &:nth-child(9) {
    grid-column: span 2;
    grid-row: span 2;
    height: 615px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectTitle = styled.h3`
  color: white;
  margin-bottom: 0.5rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

const CTAButton = styled(Link)`
  background-color: #0066cc;
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0052a3;
  }
`;

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      image: "https://picsum.photos/800/600",
      github: "https://github.com/yourusername/ecommerce-project",
      live: "https://example.com/ecommerce",
      category: "web",
    },
    {
      id: 2,
      title: "Task Management App",
      image: "https://picsum.photos/801/600",
      github: "https://github.com/yourusername/task-management-app",
      live: "https://example.com/task-app",
      category: "mobile",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      image: "https://picsum.photos/802/600",
      github: "https://github.com/yourusername/weather-dashboard",
      live: "https://example.com/weather",
      category: "web",
    },
    {
      id: 4,
      title: "Social Media Analytics",
      image: "https://picsum.photos/803/600",
      github: "https://github.com/yourusername/social-media-analytics",
      live: "https://example.com/analytics",
      category: "data",
    },
    {
      id: 5,
      title: "Fitness Tracker",
      image: "https://picsum.photos/804/600",
      github: "https://github.com/yourusername/fitness-tracker",
      live: "https://example.com/fitness",
      category: "mobile",
    },
    {
      id: 6,
      title: "Recipe Finder",
      image: "https://picsum.photos/805/600",
      github: "https://github.com/yourusername/recipe-finder",
      live: "https://example.com/recipes",
      category: "web",
    },
    {
      id: 7,
      title: "Travel Planner",
      image: "https://picsum.photos/806/600",
      github: "https://github.com/yourusername/travel-planner",
      live: "https://example.com/travel",
      category: "mobile",
    },
    {
      id: 8,
      title: "Cryptocurrency Dashboard",
      image: "https://picsum.photos/807/600",
      github: "https://github.com/yourusername/crypto-dashboard",
      live: "https://example.com/crypto",
      category: "data",
    },
    {
      id: 9,
      title: "Online Learning Platform",
      image: "https://picsum.photos/808/600",
      github: "https://github.com/yourusername/online-learning-platform",
      live: "https://example.com/learning",
      category: "web",
    },
    {
      id: 10,
      title: "Smart Home Control",
      image: "https://picsum.photos/809/600",
      github: "https://github.com/yourusername/smart-home-control",
      live: "https://example.com/smart-home",
      category: "iot",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <PortfolioContainer>
      <NavBar />
      <ContentWrapper>
        <BackToHome to="/">← Back To Home</BackToHome>
        <Header>My Portfolio</Header>
        <Subheader>Check Out My Latest Projects</Subheader>
        <p>
          I'm here to help if you're searching for a web developer to bring your
          idea to life or a development partner to help take your business to
          the next level.
        </p>

        <FilterContainer>
          <FilterButton
            active={filter === "all"}
            onClick={() => setFilter("all")}
          >
            All
          </FilterButton>
          <FilterButton
            active={filter === "web"}
            onClick={() => setFilter("web")}
          >
            Web
          </FilterButton>
          <FilterButton
            active={filter === "mobile"}
            onClick={() => setFilter("mobile")}
          >
            Mobile
          </FilterButton>
          <FilterButton
            active={filter === "data"}
            onClick={() => setFilter("data")}
          >
            Data
          </FilterButton>
          <FilterButton
            active={filter === "iot"}
            onClick={() => setFilter("iot")}
          >
            IoT
          </FilterButton>
        </FilterContainer>

        <ProjectGrid>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectOverlay>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectLinks>
                  <ProjectLink
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> GitHub
                  </ProjectLink>
                  <ProjectLink
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </ProjectOverlay>
            </ProjectCard>
          ))}
        </ProjectGrid>

        <CTASection>
          <h2>Interested in working together?</h2>
          <p>Let's discuss how I can help bring your ideas to life.</p>
          <CTAButton to="/contact">Get In Touch</CTAButton>
        </CTASection>
      </ContentWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;
