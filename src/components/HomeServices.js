import React from "react";
import styled, { keyframes } from "styled-components";
import { FaCode, FaServer, FaRocket, FaLock, FaMobile } from "react-icons/fa";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const shine = keyframes`
  0% { filter: brightness(100%); }
  50% { filter: brightness(150%); }
  100% { filter: brightness(100%); }
`;

const ServicesContainer = styled.div`
  padding: 10px;
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 10px;
`;

const ServicesTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 15px;
  color: ${(props) => props.theme.text};
  text-align: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 25px;
    height: 2px;
    background: ${(props) => props.theme.primary};
    transform: translateX(-50%);
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
  gap: 10px;
`;

const ServiceCard = styled.div`
  background: ${(props) => props.theme.cardBackground};
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 2px solid ${(props) => props.borderColor};

  &:hover {
    background: ${(props) => props.bgColor};
    color: ${(props) => props.color};
    border-color: ${(props) => props.color};
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
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
  font-size: 1.2rem;
  margin-bottom: 10px;
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
    width: 30px;
    height: 30px;
    background: ${(props) => props.bgColor};
    border-radius: 50%;
    z-index: -1;
    opacity: 0.2;
  }

  svg {
    filter: drop-shadow(0 0 3px ${(props) => props.color});
    color: ${(props) => props.color};
  }
`;

const ServiceName = styled.h3`
  font-size: 0.8rem;
  color: ${(props) => props.theme.text};
  margin-bottom: 5px;
`;

const ServiceDescription = styled.p`
  font-size: 0.6rem;
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
    name: "Front-End Development",
    icon: FaCode,
    description:
      "Crafting responsive and interactive user interfaces with modern technologies like React, Vue, and Angular.",
    color: "#FF6B6B",
    bgColor: "#FFE66D",
  },
  {
    name: "Back-End Development",
    icon: FaServer,
    description:
      "Developing robust server-side applications and APIs using technologies like Node.js, Python, or Ruby on Rails.",
    color: "#4ECDC4",
    bgColor: "#45B7AA",
  },
  {
    name: "Full-Stack Development",
    icon: FaMobile,
    description:
      "Providing comprehensive web solutions including database design and integration of front-end and back-end technologies.",
    color: "#6A2C70",
    bgColor: "#B83B5E",
  },
  {
    name: "Web Performance Optimization",
    icon: FaRocket,
    description:
      "Improving website speed and efficiency through code optimization and best practices.",
    color: "#3BCEAC",
    bgColor: "#0EAD69",
  },
  {
    name: "Security Implementation",
    icon: FaLock,
    description:
      "Ensuring robust security measures to protect applications and data.",
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
          <ServiceCard
            key={index}
            color={service.color}
            bgColor={service.bgColor}
            borderColor={service.color}
          >
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
