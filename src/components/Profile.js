import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  height: 27rem;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    max-width: 350px;
    width: 100%;
    height: 28rem;
    box-shadow: none;
  }
`;

const PhotoContainer = styled.div`
  width: 240px;
  height: 225px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
  }
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 15px;
  border: 3px solid ${(props) => props.theme.inputBackground};
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
`;

const ProfileInfo = styled.div`
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const Name = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
  font-weight: 900;
  background: ${(props) => props.theme.text};
  -webkit-background-clip: text;
  text-shadow: 1.5px 1.5px 3px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
  color: ${(props) => props.theme.text};

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }
`;

const Title = styled.h2`
  font-size: 0.75rem;
  color: ${(props) => props.theme.accent};
  margin-bottom: 0.5rem;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
`;

const Bio = styled.p`
  font-size: 0.55rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.secondaryText};
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.4;
    padding: 0.6rem;
  }
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: ${(props) => props.theme.cardBackground};
  border-radius: 0.5rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    gap: 0.4rem;
    padding: 0.3rem;
  }
`;

const SkillTag = styled.span`
  background: ${(props) => props.color || props.theme.accent};
  color: #ffffff;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.45rem;
  font-weight: 600;
  letter-spacing: 0.25px;
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0.2rem 0.4rem;
    font-size: 0.4rem;
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
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &::before {
      top: -100%;
      left: -100%;
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
    flex-wrap: wrap;
  }
`;

const SocialIcon = styled.a`
  font-size: 0.7rem;
  color: ${(props) => props.color || props.theme.secondaryText};
  transition: all 0.3s ease;
  padding: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.cardBackground};
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.35rem;
    width: 1.5rem;
    height: 1.5rem;
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
    transform: translateY(-2px) rotate(360deg);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  svg {
    width: 0.7rem;
    height: 0.7rem;

    @media (max-width: 768px) {
      width: 0.9rem;
      height: 0.9rem;
    }
  }
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <PhotoContainer>
        <Photo src="/profile.jpg" alt="Gole Layla" />
      </PhotoContainer>
      <ProfileInfo>
        <Name>Robert Okuni</Name>
        <Title>Full Stack Web Developer</Title>
        <Bio>
          I am a passionate web developer with experience in both front-end and
          back-end technologies. Skilled in React.js, Node.js, and database
          management, I enjoy building user-friendly products that solve
          real-world problems.
        </Bio>

        <SkillTags>
          <SkillTag>UI/UX Design</SkillTag>
          <SkillTag>Front-end Dev</SkillTag>
          <SkillTag>Back-end Dev</SkillTag>
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
