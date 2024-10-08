import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  height: 54rem;
  margin: 0 auto;
  padding: 3rem;
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 0.4rem;
    width: 100%;
    z-index: auto;
    height: 100%;
  }
`;

const PhotoContainer = styled.div`
  width: 380px;
  height: 450px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 300px;
    height: 300px;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 23%;
  border-radius: 20px;
`;

const ProfileInfo = styled.div`
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Name = styled.h1`
  margin: 0;
   font-size: 3rem;
    margin-bottom: 0.5rem;
  font-weight: 900;
  background: ${(props) => props.theme.text}
  -webkit-background-clip: text;

  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
  color: ${(props) => props.theme.text};

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.4rem;
  }


`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.accent};
  margin-bottom: 1rem;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const Bio = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.secondaryText};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.5;
  }
`;
const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: ${(props) => props.theme.cardBackground};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    gap: 0.8rem;
    padding: 0.8rem;
  }
`;

const SkillTag = styled.span`
  background: ${(props) => props.color || props.theme.accent};
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(45deg);
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &::before {
      top: -100%;
      left: -100%;
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    flex-wrap: wrap;
  }
`;

const SocialIcon = styled.a`
  font-size: 1.4rem;
  color: ${(props) => props.color || props.theme.secondaryText};
  transition: all 0.3s ease;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.cardBackground};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding: 0.7rem;
    width: 3rem;
    height: 3rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.color || props.theme.accent};
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: #ffffff;
    transform: translateY(-3px) rotate(360deg);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  svg {
    width: 1.4rem;
    height: 1.4rem;

    @media (max-width: 768px) {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <PhotoContainer>
        <Photo src="/IMG_2048.jpg" alt="Gole Layla" />
      </PhotoContainer>
      <ProfileInfo>
        <Name>Robert Okuni</Name>
        <Title>Full Stack Web Developer</Title>
        <Bio>
          I am a passionate web developer with experience in both front-end and
          back-end technologies. Skilled in React.js, Node.js, and database
          management, I enjoy building user-friendly products that solve
          real-world problems. My work spans across industries, and I thrive on
          teamwork and collaboration.
        </Bio>

        <SkillTags>
          <SkillTag>UI/UX Design</SkillTag>
          <SkillTag>Front-end Dev</SkillTag>
          <SkillTag>Back-end-Dev</SkillTag>
        </SkillTags>
        <SocialLinks>
          <SocialIcon
            href="https://github.com/OK-Ro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </SocialIcon>
          <SocialIcon
            href="https://www.linkedin.com/in/robert-okuni-96425b269/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </SocialIcon>

          <SocialIcon
            href="mailto:o.robert1994@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </SocialIcon>
        </SocialLinks>
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default Profile;
