import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;

  margin: 0 auto;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

  position: relative;
  z-index: 1000;
  overflow: visible;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem;
  }
`;

const PhotoContainer = styled.div`
  width: 100%;
  max-width: 300px;
  height: 260px;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    max-width: 350px;
    height: 300px;
  }

  @media (min-width: 1024px) {
    max-width: 400px;
    height: 350px;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProfileInfo = styled.div`
  text-align: center;
  width: 100%;
`;

const Name = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  color: ${(props) => props.theme.text};

  @media (min-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 0.4rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
`;

const Title = styled.h2`
  font-size: 1.2rem;
  color: ${(props) => props.theme.accent};
  margin-bottom: 1rem;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const Bio = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: ${(props) => props.theme.secondaryText};
  font-size: 0.9rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.7;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
  }
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    gap: 0.6rem;
  }

  @media (min-width: 1024px) {
    gap: 0.8rem;
    margin-bottom: 2rem;
  }
`;

const SkillTag = styled.span`
  background-color: ${(props) => props.theme.backgroundCala};
  color: ${(props) => props.theme.text};
  padding: 0.3rem 0.7rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }

  @media (min-width: 1024px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.buttonText};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.2rem;
  }

  @media (min-width: 1024px) {
    gap: 1.5rem;
  }
`;

const SocialIcon = styled.a`
  font-size: 1.4rem;
  color: ${(props) => props.theme.secondaryText};
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }

  &:hover {
    color: ${(props) => props.theme.accent};
    transform: translateY(-3px);
  }
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <PhotoContainer>
        <Photo
          src="https://www.bing.com/th?id=OIP.F8N47NFCKAaMf97INBReHQHaJz&w=150&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          alt="Gole Layla"
        />
      </PhotoContainer>
      <ProfileInfo>
        <Name>Robert Okuni</Name>
        <Title>Full Stack Web Developer</Title>
        <Bio>
          As a skilled Product designer, illustrator, and visual development
          expert, my diverse background has allowed me to apply my talents
          across different fields and industries, demonstrating adaptability and
          versatility. With over 7 years of experience, I've completed 125
          projects and earned 9 recognitions in the field.
        </Bio>
        <SkillTags>
          <SkillTag>UI/UX Design</SkillTag>
          <SkillTag>Branding</SkillTag>
          <SkillTag>Illustration</SkillTag>
          <SkillTag>Front-end Dev</SkillTag>
          <SkillTag>Typography</SkillTag>
        </SkillTags>
        <SocialLinks>
          <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </SocialIcon>
          <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </SocialIcon>
        </SocialLinks>
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default Profile;
