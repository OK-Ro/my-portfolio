import React from "react";
import styled from "styled-components";
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
  padding: 5rem;
`;

const ProfileSection = styled.section`
  margin-top: 15em;
  display: flex;
  gap: 5rem;
`;

const LeftColumn = styled.div`
  flex: 1;
  min-width: 300px;
`;

const RightColumn = styled.div`
  flex: 2;
  min-width: 600px;
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
`;

const ProfilePictureCard = styled(Card)`
  text-align: center;
  height: 30rem;
  background-color: #f0f0f0;
`;

const ProfilePicture = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
`;

const IntroCard = styled(Card)`
  height: 30rem;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subheader = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #666;
`;

const ThreeColumnSection = styled.section`
  display: flex;
  gap: 2rem;
  margin-top: 5rem;
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
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 10px;
`;

const StatNumber = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #0066cc;
`;

const ExperienceItem = styled.div`
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

// Updated Footer Styles
const FooterSection = styled.section`
  margin-top: 5rem;
  display: flex;
  gap: 2rem;
`;

const FooterCard = styled(Card)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FooterHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const FooterText = styled.p`
  margin-bottom: 1rem;
  color: #666;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: #0066cc;
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  align-self: flex-start;
  margin-top: auto;

  &:hover {
    background-color: #0052a3;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #0066cc;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <NavBar />
      <ProfileSection>
        <LeftColumn>
          <ProfilePictureCard>
            <ProfilePicture
              src="https://www.bing.com/th?id=OIP.F8N47NFCKAaMf97INBReHQHaJz&w=150&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="Gole Layla"
            />
          </ProfilePictureCard>
        </LeftColumn>

        <RightColumn>
          <IntroCard>
            <Header>Hello, I'm Gole Layla</Header>
            <Subheader>An Award-Winning Product Designer</Subheader>
            <p>
              As a skilled Product designer, illustrator, and visual development
              expert, my diverse background has allowed me to apply my talents
              across different fields and industries, demonstrating adaptability
              and versatility.
            </p>
          </IntroCard>
        </RightColumn>
      </ProfileSection>

      <ThreeColumnSection>
        <Column>
          <StatisticsSection>
            <StatItem>
              <StatNumber>7+</StatNumber>
              <p>YEARS EXPERIENCE</p>
            </StatItem>
            <StatItem>
              <StatNumber>125</StatNumber>
              <p>TOTAL PROJECTS</p>
            </StatItem>
            <StatItem>
              <StatNumber>9</StatNumber>
              <p>RECOGNITIONS</p>
            </StatItem>
            <StatItem>
              <StatNumber>0</StatNumber>
              <p>UNHAPPY CLIENTS</p>
            </StatItem>
          </StatisticsSection>
        </Column>
        <Column>
          <Card>
            <h2>What I Do</h2>
            <ul>
              <li>Branding</li>
              <li>Illustration</li>
              <li>Logo Design</li>
              <li>Typography</li>
              <li>Card Design</li>
            </ul>
          </Card>
        </Column>
        <Column>
          <Card>
            <h2>My Experience</h2>
            <ExperienceItem>
              <h3>UI Designer</h3>
              <p>Apple | 2021 - Now</p>
            </ExperienceItem>
            <ExperienceItem>
              <h3>Front-end Dev</h3>
              <p>Google | 2015 - 2020</p>
            </ExperienceItem>
            <ExperienceItem>
              <h3>UI/UX Designer</h3>
              <p>Intel | 2010 - 2015</p>
            </ExperienceItem>
            <ExperienceItem>
              <h3>UI Designer</h3>
              <p>Intel | 2009 - 2010</p>
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
