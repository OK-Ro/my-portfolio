import React from "react";
import styled, { keyframes } from "styled-components";
import { FaChevronRight } from "react-icons/fa";

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const BannerContainer = styled.div`
  background-color: ${(props) => props.theme.bannerBackground || "#ffffff"};
  overflow: hidden;
  padding: 20px 0;
  position: relative;
  width: 100%;
`;

const ScrollingContent = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  animation: ${scroll} 20s linear infinite;
`;

const Item = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 30px;
  color: ${(props) => props.theme.bannerText || "#333333"};
  font-size: 1.1rem;
  font-weight: 600;
  white-space: nowrap;
`;

const Separator = styled(FaChevronRight)`
  margin: 0 10px;
  color: ${(props) => props.theme.bannerSeparator || "#9e9e9e"};
  font-size: 1rem;
`;

const items = [
  "Full-stack Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Continuous Learner",
  "Team Player",
];

const MovingBanner = () => {
  const doubledItems = [...items, ...items]; // Double the items for seamless loop

  return (
    <BannerContainer>
      <ScrollingContent>
        {doubledItems.map((item, index) => (
          <React.Fragment key={index}>
            <Item>{item}</Item>
            {index < doubledItems.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </ScrollingContent>
    </BannerContainer>
  );
};

export default MovingBanner;
