import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import NavBar from "../components/NavBar";
import { FaArrowLeft } from "react-icons/fa";

const PortfolioContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  margin: 0 auto;
  padding: 5rem;
  width: 100%;
  @media (max-width: 768px) {
    padding: 5rem;
  }
`;

const ContentWrapper = styled.div``;
const BackToHome = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 192px;
  height: 56px;
  border-radius: 16px;
  position: relative;
  color: black;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  overflow: hidden;
  margin-top: 10rem;
  border: 4px solid transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, #6dd5ed, #2193b0);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &::before {
    content: "";
    background: linear-gradient(to right, #6dd5ed, #2193b0);
    border-radius: 12px;
    height: 45px;
    width: 60px;
    position: absolute;
    left: 4px;
    top: 2px;
    z-index: 1;
    transition: width 0.5s;
  }

  &:hover::before {
    width: 178px;
  }

  svg {
    position: absolute;
    left: 16px;
    z-index: 2;
    height: 20px;
    width: 20px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(-3px);
  }

  span {
    position: relative;
    z-index: 2;
    transition: color 0.3s ease;
  }

  &:hover span {
    color: white;
  }
`;
const gradientAnimation = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Header = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  text-align: center;
  color: transparent;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7aa, #6a2c70);
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  animation: ${gradientAnimation} 10s ease infinite, ${fadeIn} 1s ease-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: 2px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 50px;
    height: 4px;
    background: #4ecdc4;
    transform: translateX(-50%);
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const Subheader = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: ${(props) => props.theme.secondaryText};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: ${fadeIn} 1s ease-out 0.5s both;
  position: relative;
  padding: 0 20px;

  &::before,
  &::after {
    content: '"';
    font-size: 3rem;
    color: #4ecdc4;
    position: absolute;
    opacity: 0.3;
  }

  &::before {
    top: -20px;
    left: 0;
  }

  &::after {
    bottom: -40px;
    right: 0;
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: ${(props) => props.theme.text};
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.8;
  animation: ${fadeIn} 1s ease-out 1s both;
  padding: 0 20px;

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
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
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  aspect-ratio: 1 / 1;
  border: 5px solid ${(props) => props.theme.cardBackground};

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
  perspective: 1000px;
  margin-top: 3rem;
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 3rem;
  }
`;

const CTACard = styled.div`
  background: linear-gradient(45deg, #00c9ff, #92fe9d);
  border-radius: 20px;
  padding: 2rem;
  margin-top: 5rem;
  width: 100%;
  max-width: 80rem;
  text-align: center;
  color: #1a1a1a;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: rotateY(10deg) rotateX(5deg);
  }

  @media (min-width: 768px) {
    padding: 2.5rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem;
  }
`;

const CTAContent = styled.div`
  transform: translateZ(60px);
  transition: transform 0.6s;

  ${CTACard}:hover & {
    transform: translateZ(80px);
  }
`;

const CTATitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.3);
`;

const CTAText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #333;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: #ff6b6b;
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: all 0.6s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    background-color: #ff8787;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
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
        <IntroText>
          I'm here to help if you're searching for a web developer to bring your
          idea to life or a development partner to help take your business to
          the next level.
        </IntroText>
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
          <CTACard>
            <CTAContent>
              <CTATitle>Let's Work Together</CTATitle>
              <CTAText>
                Ready to start your next project? Get in touch and let's create
                something amazing together.
              </CTAText>
              <CTAButton to="/contact">Get In Touch</CTAButton>
            </CTAContent>
          </CTACard>
        </CTASection>
      </ContentWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;
