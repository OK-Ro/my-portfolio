import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
} from "react-icons/fa";
import NavBar from "../components/NavBar";

const AboutContainer = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;

  @media (min-width: 768px) {
    padding: 3rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem;
  }
`;

const ProfileSection = styled.section`
  margin-top: 8em;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
    margin-top: 10em;
  }

  @media (min-width: 1024px) {
    gap: 5rem;
    margin-top: 15em;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  min-width: 250px;
`;

const RightColumn = styled.div`
  flex: 2;
  min-width: 300px;
`;

const Card = styled.div`
  padding: 15px;
  border-radius: 1rem;
  box-shadow: 0 4px 30px ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.backgroundCala};
  color: ${(props) => props.theme.text};
  transition: background-color 0.3s ease, color 0.3s ease;
  border: 20px solid ${(props) => props.theme.cardBorderline};

  @media (min-width: 768px) {
    padding: 2rem;
    margin-bottom: 2rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px ${(props) => props.theme.boxShadow};
  }
`;

const ProfilePictureCard = styled(Card)`
  text-align: center;
  height: auto;
  background-color: ${(props) => props.theme.cardBackground};
`;

const ProfilePictureWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 300px;
  height: 300px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const CircularText = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${rotate} 20s linear infinite;
`;

const CircularTextSpan = styled.span`
  position: absolute;
  left: 50%;
  font-size: 10px;
  transform-origin: 0 100px;
  color: ${(props) => props.theme.accent};

  @media (min-width: 768px) {
    font-size: 12px;
    transform-origin: 0 125px;
  }

  @media (min-width: 1024px) {
    transform-origin: 0 150px;
  }
`;

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  top: 25px;
  left: 25px;
  border: 5px solid ${(props) => props.theme.accent};

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 1024px) {
    width: 250px;
    height: 250px;
  }
`;

const IntroCard = styled(Card)`
  height: auto;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.text};
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Subheader = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.secondaryText};
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ThreeColumnSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
    margin-top: 5rem;
  }
`;

const Column = styled.div`
  flex: 1;
`;

const StatisticsSection = styled(Card)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const StatItem = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme.cardBackground};
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.cardBorder};
`;

const StatNumber = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.accent};
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ExperienceItem = styled.div`
  margin-bottom: 1.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const FooterSection = styled.section`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
    margin-top: 5rem;
  }
`;

const FooterCard = styled(Card)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FooterHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.text};
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

const FooterText = styled.p`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.secondaryText};
  font-size: 1rem;
  line-height: 1.5;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: ${(props) => props.theme.accent};
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 20px;
  font-weight: 600;
  transition: all 0.3s ease;
  align-self: flex-start;
  margin-top: auto;
  font-size: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.accentHover};
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.secondaryText};
  font-size: 1rem;
`;

const ExperienceTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: ${(props) => props.theme.text};
`;

const ExperienceDetails = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.secondaryText};
`;

const About = () => {
  const text = "Available for Work • Available for Work • ";
  const characters = text.split("");

  return (
    <AboutContainer>
      <NavBar />
      <ProfileSection>
        <LeftColumn>
          <ProfilePictureCard>
            <ProfilePictureWrapper>
              <CircularText>
                {characters.map((char, i) => (
                  <CircularTextSpan
                    key={i}
                    style={{
                      transform: `rotate(${i * 7.5}deg)`,
                    }}
                  >
                    {char}
                  </CircularTextSpan>
                ))}
              </CircularText>
              <ProfilePicture
                src="https://www.bing.com/th?id=OIP.F8N47NFCKAaMf97INBReHQHaJz&w=150&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                alt="Gole Layla"
              />
            </ProfilePictureWrapper>
          </ProfilePictureCard>
        </LeftColumn>

        <RightColumn>
          <IntroCard>
            <Header>Hello, I'm Gole Layla</Header>
            <Subheader>An Award-Winning Product Designer</Subheader>
            <FooterText>
              As a skilled Product designer, illustrator, and visual development
              expert, my diverse background has allowed me to apply my talents
              across different fields and industries, demonstrating adaptability
              and versatility.
            </FooterText>
          </IntroCard>
        </RightColumn>
      </ProfileSection>

      <ThreeColumnSection>
        <Column>
          <StatisticsSection>
            <StatItem>
              <StatNumber>7+</StatNumber>
              <FooterText>YEARS EXPERIENCE</FooterText>
            </StatItem>
            <StatItem>
              <StatNumber>125</StatNumber>
              <FooterText>TOTAL PROJECTS</FooterText>
            </StatItem>
            <StatItem>
              <StatNumber>9</StatNumber>
              <FooterText>RECOGNITIONS</FooterText>
            </StatItem>
            <StatItem>
              <StatNumber>0</StatNumber>
              <FooterText>UNHAPPY CLIENTS</FooterText>
            </StatItem>
          </StatisticsSection>
        </Column>
        <Column>
          <Card>
            <FooterHeader>What I Do</FooterHeader>
            <List>
              <ListItem>Branding</ListItem>
              <ListItem>Illustration</ListItem>
              <ListItem>Logo Design</ListItem>
              <ListItem>Typography</ListItem>
              <ListItem>Card Design</ListItem>
            </List>
          </Card>
        </Column>
        <Column>
          <Card>
            <FooterHeader>My Experience</FooterHeader>
            <ExperienceItem>
              <ExperienceTitle>UI Designer</ExperienceTitle>
              <ExperienceDetails>Apple | 2021 - Now</ExperienceDetails>
            </ExperienceItem>
            <ExperienceItem>
              <ExperienceTitle>Front-end Dev</ExperienceTitle>
              <ExperienceDetails>Google | 2015 - 2020</ExperienceDetails>
            </ExperienceItem>
            <ExperienceItem>
              <ExperienceTitle>UI/UX Designer</ExperienceTitle>
              <ExperienceDetails>Intel | 2010 - 2015</ExperienceDetails>
            </ExperienceItem>
            <ExperienceItem>
              <ExperienceTitle>UI Designer</ExperienceTitle>
              <ExperienceDetails>Intel | 2009 - 2010</ExperienceDetails>
            </ExperienceItem>
          </Card>
        </Column>
      </ThreeColumnSection>

      <FooterSection>
        <FooterCard>
          <FooterHeader>Let's Work Together</FooterHeader>
          <FooterText>
            Ready to start your next project? Get in touch and let's create
            something amazing together.
          </FooterText>
          <CTAButton to="/contact">Get In Touch</CTAButton>
        </FooterCard>
        <FooterCard>
          <FooterHeader>Education</FooterHeader>
          <div>
            <FooterText>
              Master Degree in Designing
              <br />
              University of California | 2019 - 2021
            </FooterText>
            <FooterText>
              Bachelor Degree in Psychology
              <br />
              University of California | 2015 - 2019
            </FooterText>
          </div>
        </FooterCard>
        <FooterCard>
          <FooterHeader>Connect With Me</FooterHeader>
          <FooterText>
            Let's stay in touch! Follow me on social media for updates and
            insights.
          </FooterText>
          <SocialLinks>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FaDribbble />
            </SocialIcon>
          </SocialLinks>
        </FooterCard>
      </FooterSection>
    </AboutContainer>
  );
};

export default About;
