import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Animation for brackets
const opacity = keyframes`
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
`;

// Updated keyframe animation for words
const change = keyframes`
  0% { transform: translateY(0); }
  20% { transform: translateY(-70px); }
  40% { transform: translateY(-140px); }
  60% { transform: translateY(-210px); }
  80% { transform: translateY(-280px); }
  100% { transform: translateY(-280px); }
`;

// Wrapper for the loading screen
const LoadingWrapper = styled.div`
  display: ${({ isLoading }) => (isLoading ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Container = styled.div`
  width: auto;
  height: 150px;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const Content = styled.div`
  display: block;
  overflow: hidden;
  font-family: "Lato", sans-serif;
  font-size: 60px;
  line-height: 70px;
  color: #ecf0f1;

  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 50px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

const ContentContainer = styled.div`
  font-weight: 900;
  overflow: hidden;
  height: 70px;
  padding: 0 40px;
  position: relative;

  &:before,
  &:after {
    position: absolute;
    top: 0;
    color: #16a085;
    font-size: 70px;
    line-height: 70px;
    animation: ${opacity} 2s infinite;
  }

  &:before {
    content: "[";
    left: 0;
  }

  &:after {
    content: "]";
    right: 0;
  }

  @media (max-width: 768px) {
    height: 50px;
    padding: 0 30px;

    &:before,
    &:after {
      font-size: 50px;
      line-height: 50px;
    }
  }

  @media (max-width: 480px) {
    height: 40px;
    padding: 0 20px;

    &:before,
    &:after {
      font-size: 40px;
      line-height: 40px;
    }
  }
`;

const ContentContainerText = styled.p`
  display: inline-block;
  margin: 0;
  font-size: 60px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const ContentContainerList = styled.ul`
  margin-top: 0;
  padding-left: 290px;
  list-style: none;
  animation: ${change} 10s forwards;
  height: 70px;

  @media (max-width: 768px) {
    padding-left: 200px;
    height: 50px;
  }

  @media (max-width: 480px) {
    padding-left: 150px;
    height: 40px;
  }
`;

const ContentContainerListItem = styled.li`
  line-height: 70px;
  margin: 0;
  font-size: 60px;

  @media (max-width: 768px) {
    line-height: 50px;
    font-size: 40px;
  }

  @media (max-width: 480px) {
    line-height: 40px;
    font-size: 30px;
  }
`;

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingWrapper isLoading={isLoading}>
      <Container>
        <Content>
          <ContentContainer>
            <ContentContainerText>Robert's</ContentContainerText>
            <ContentContainerList>
              <ContentContainerListItem>Portfolio!</ContentContainerListItem>
              <ContentContainerListItem>Showcase!</ContentContainerListItem>
              <ContentContainerListItem>Experience!</ContentContainerListItem>
              <ContentContainerListItem>Journey!</ContentContainerListItem>
            </ContentContainerList>
          </ContentContainer>
        </Content>
      </Container>
    </LoadingWrapper>
  );
};

export default LoadingScreen;
