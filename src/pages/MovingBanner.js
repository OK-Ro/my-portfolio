import React from "react";
import styled, { keyframes } from "styled-components";
import { FaChevronRight } from "react-icons/fa";

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const BannerContainer = styled.div`
  background-color: ${(props) => props.theme.bannerBackground || "#f8f9fa"};
  overflow: hidden;
  padding: 15px 0;
  position: relative;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.bannerBorder || "#e9ecef"};
  border-bottom: 1px solid ${(props) => props.theme.bannerBorder || "#e9ecef"};
`;

const ScrollingContent = styled.div`
  display: inline-flex;
  white-space: nowrap;
  animation: ${scroll} 30s linear infinite;
`;

const Item = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 50px;
  color: ${(props) => props.theme.bannerText || "#495057"};
  font-size: 1rem;
  font-weight: 500;
`;

const Separator = styled(FaChevronRight)`
  margin: 0 15px;
  color: ${(props) => props.theme.bannerSeparator || "#adb5bd"};
  font-size: 0.8rem;
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
