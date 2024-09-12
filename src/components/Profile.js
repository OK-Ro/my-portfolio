import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 3rem;
  background-color: #f8f9fa;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const PhotoContainer = styled.div`
  width: 400px;
  height: 350px;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
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
`;

const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #0066cc;
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const Bio = styled.p`
  margin-bottom: 2rem;
  line-height: 1.8;
  color: #555;
  font-size: 1.1rem;
  text-align: center;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 2rem;
`;

const SkillTag = styled.span`
  background-color: #e9ecef;
  color: #495057;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0066cc;
    color: #ffffff;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialIcon = styled.a`
  font-size: 1.8rem;
  color: #495057;
  transition: all 0.3s ease;

  &:hover {
    color: #0066cc;
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
        <Name>Gole Layla</Name>
        <Title>Product Designer & Developer</Title>
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
