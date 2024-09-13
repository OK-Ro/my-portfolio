import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import NavBar from "../components/NavBar";
import { FaArrowLeft } from "react-icons/fa";

const PortfolioContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  margin: 0 auto;
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 5rem;
  }
`;

const ContentWrapper = styled.div``;

const BackToHome = styled(Link)`
  margin-top: 10rem;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.accent};
  font-weight: bold;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border: 2px solid ${(props) => props.theme.accent};
  border-radius: 25px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: ${(props) => props.theme.accent};
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: ${(props) => props.theme.buttonText};

    &:before {
      width: 100%;
    }

    svg {
      transform: translateX(-5px);
    }
  }

  svg {
    margin-right: 0.5rem;
    transition: transform 0.3s ease;
  }
`;
const Header = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subheader = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.secondaryText};

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
  background-color: ${(props) =>
    props.active ? props.theme.accent : props.theme.cardBackground};
  color: ${(props) =>
    props.active ? props.theme.buttonText : props.theme.text};
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.buttonText};
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const ProjectCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  aspect-ratio: 1 / 1;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    &:nth-child(1) {
      grid-column: span 2;
      grid-row: span 2;
    }

    &:nth-child(4) {
      grid-column: span 2;
    }

    &:nth-child(5) {
      grid-row: span 2;
    }

    &:nth-child(9) {
      grid-column: span 2;
      grid-row: span 2;
    }
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
  backdrop-filter: blur(5px);
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
  font-size: 1.2rem;
  text-align: center;
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
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const CTAButton = styled(Link)`
  background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.buttonText};
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 25px;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
  display: inline-block;
  margin-top: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.accentHover};
    transform: translateY(-2px);
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
      <ContentWrapper>
        <NavBar />
        <BackToHome to="/">
          <FaArrowLeft /> Back To Home
        </BackToHome>
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
