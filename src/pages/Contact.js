import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaInstagram,
  FaBehance,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import NavBar from "../components/NavBar";

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const BackToHome = styled(Link)`
  text-decoration: none;
  color: #0066cc;
  font-weight: bold;
  margin-bottom: 2rem;
  margin-top: 15rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const LeftSection = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  flex: 1;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subheader = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Icon = styled.span`
  margin-right: 1rem;
  color: #0066cc;
`;

const Form = styled.form`
  display: grid;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  height: 150px;
`;

const Button = styled.button`
  background-color: #0066cc;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0052a3;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #0066cc;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <NavBar />
      <BackToHome to="/">← Back To Home</BackToHome>
      <ContentWrapper>
        <LeftSection>
          <Header>Contact Info</Header>
          <Subheader>Get In Touch</Subheader>
          <p>Don't be afraid man! Just say hello</p>
          <ContactInfo>
            <InfoItem>
              <Icon>
                <FaPhone />
              </Icon>
              (302) 555-0107
            </InfoItem>
            <InfoItem>
              <Icon>
                <FaEnvelope />
              </Icon>
              tanya.hill@example.com
            </InfoItem>
            <InfoItem>
              <Icon>
                <FaMapMarkerAlt />
              </Icon>
              775 Rolling Green Rd.
            </InfoItem>
          </ContactInfo>
        </LeftSection>
        <RightSection>
          <Form>
            <Input type="text" placeholder="Your name" />
            <Input type="email" placeholder="Your email" />
            <Input type="tel" placeholder="Your phone (Optional)" />
            <Input type="text" placeholder="Your subject" />
            <TextArea placeholder="Type your message" />
            <Button type="submit">Submit Now</Button>
          </Form>
        </RightSection>
      </ContentWrapper>
      <SocialLinks>
        <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </SocialIcon>
        <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
          <FaDribbble />
        </SocialIcon>
        <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
          <FaBehance />
        </SocialIcon>
      </SocialLinks>
    </ContactContainer>
  );
};

export default Contact;
