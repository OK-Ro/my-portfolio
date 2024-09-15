import React from "react";
import styled, { keyframes } from "styled-components";
import {
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaServer,
  FaRocket,
  FaLock,
} from "react-icons/fa";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const shine = keyframes`
  0% { filter: brightness(100%); }
  50% { filter: brightness(150%); }
  100% { filter: brightness(100%); }
`;

const ServicesContainer = styled.div`
  padding: 20px;
  background: ${(props) => props.theme.background};
`;

const ServicesTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: ${(props) => props.theme.text};
  text-align: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 50px;
    height: 3px;
    background: ${(props) => props.theme.primary};
    transform: translateX(-50%);
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const ServiceCard = styled.div`
  background: ${(props) => props.theme.cardBackground};
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  &:before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 80%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover:before {
    opacity: 1;
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 15px;
  animation: ${float} 3s ease-in-out infinite, ${pulse} 2s ease-in-out infinite,
    ${shine} 3s ease-in-out infinite;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background: ${(props) => props.bgColor};
    border-radius: 50%;
    z-index: -1;
    opacity: 0.2;
  }

  svg {
    filter: drop-shadow(0 0 5px ${(props) => props.color});
    color: ${(props) => props.color};
  }
`;

const ServiceName = styled.h3`
  font-size: 1.2rem;
  color: ${(props) => props.theme.text};
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.textSecondary};
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;

  ${ServiceCard}:hover & {
    opacity: 1;
    max-height: 100px;
  }
`;

const services = [
  {
    name: "Web Development",
    icon: FaCode,
    description: "Creating responsive and dynamic websites",
    color: "#FF6B6B",
    bgColor: "#FFE66D",
  },
  {
    name: "UI/UX Design",
    icon: FaPalette,
    description: "Crafting intuitive and beautiful user interfaces",
    color: "#4ECDC4",
    bgColor: "#45B7AA",
  },
  {
    name: "Mobile Development",
    icon: FaMobileAlt,
    description: "Building native and cross-platform mobile apps",
    color: "#6A2C70",
    bgColor: "#B83B5E",
  },
  {
    name: "Backend Development",
    icon: FaServer,
    description: "Developing robust server-side applications",
    color: "#3BCEAC",
    bgColor: "#0EAD69",
  },
  {
    name: "Performance Optimization",
    icon: FaRocket,
    description: "Enhancing speed and efficiency of applications",
    color: "#FF9A8B",
    bgColor: "#FF6A88",
  },
  {
    name: "Security Implementation",
    icon: FaLock,
    description: "Implementing strong security measures",
    color: "#845EC2",
    bgColor: "#D65DB1",
  },
];

function HomeServices() {
  return (
    <ServicesContainer>
      <ServicesTitle>Services I Offer</ServicesTitle>
      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceIcon
              as={service.icon}
              color={service.color}
              bgColor={service.bgColor}
            />
            <ServiceName>{service.name}</ServiceName>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServiceGrid>
    </ServicesContainer>
  );
}

export default HomeServices;
