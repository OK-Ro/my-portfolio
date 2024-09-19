import React from "react";
import styled, { keyframes } from "styled-components";
import {
  FaChevronRight,
  FaCode,
  FaPaintBrush,
  FaLightbulb,
  FaBook,
  FaUsers,
} from "react-icons/fa";

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const glow = keyframes`
  0%, 100% { filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.7)); }
  50% { filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.9)); }
`;

const BannerContainer = styled.div`
  background: linear-gradient(45deg, #1a1a2e, #16213e, #0f3460);
  overflow: hidden;
  padding: 25px 0;
  position: relative;
  width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100px;
    height: 100%;
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, #1a1a2e, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, #1a1a2e, transparent);
  }
`;

const ScrollingContent = styled.div`
  display: flex;
  align-items: center;
  animation: ${scroll} 30s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const Item = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 50px;
  color: #e94560;
  font-size: 1.2rem;
  font-weight: 700;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    color: #ff6b6b;
  }
`;

const Icon = styled.span`
  margin-right: 10px;
  font-size: 1.4rem;
  animation: ${glow} 2s ease-in-out infinite;
`;

const Separator = styled(FaChevronRight)`
  margin: 0 15px;
  color: #4e4e50;
  font-size: 0.8rem;
  opacity: 0.7;
`;

const items = [
  { text: "Full-stack Developer", icon: FaCode },
  { text: "UI/UX Enthusiast", icon: FaPaintBrush },
  { text: "Problem Solver", icon: FaLightbulb },
  { text: "Continuous Learner", icon: FaBook },
  { text: "Team Player", icon: FaUsers },
];

const MovingBanner = () => {
  const doubledItems = [...items, ...items]; // Double the items for seamless loop

  return (
    <BannerContainer>
      <ScrollingContent>
        {doubledItems.map((item, index) => (
          <React.Fragment key={index}>
            <Item>
              <Icon as={item.icon} />
              {item.text}
            </Item>
            {index < doubledItems.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </ScrollingContent>
    </BannerContainer>
  );
};

export default MovingBanner;
