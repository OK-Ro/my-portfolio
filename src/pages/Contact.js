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
  FaPaperPlane,
  FaArrowLeft,
} from "react-icons/fa";
import NavBar from "../components/NavBar";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 5rem;
  background: #f8f9fd;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

const ContactContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const BackToHome = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 192px;
  height: 56px;
  border-radius: 16px;
  position: relative;
  color: black;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  overflow: hidden;
  margin-bottom: 2rem;
  margin-top: 10rem;
  border: 4px solid #4ade80;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &::before {
    content: "";
    background-color: #4ade80;
    border-radius: 12px;
    height: 45px;
    width: 60px;
    position: absolute;
    left: 4px;
    top: 2px;
    z-index: 1;
    transition: width 0.5s;
    border: 1px solid #fffff;
  }

  &:hover::before {
    width: 178px;
  }

  svg {
    position: absolute;
    left: 16px;
    z-index: 2;
    height: 20px;
    width: 20px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(-3px);
  }

  span {
    position: relative;
    z-index: 2;
    transition: color 0.3s ease;
  }

  &:hover span {
    color: white;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 4rem;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    0deg,
    rgb(255, 255, 255) 0%,
    rgb(244, 247, 251) 100%
  );
  border-radius: 40px;
  padding: 25px 35px;
  border: 5px solid rgb(255, 255, 255);
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 30px 30px -20px;
`;

const Header = styled.h1`
  font-size: 6rem;
  margin-bottom: 1.5rem;
  color: rgb(16, 137, 211);
  font-weight: 900;
  line-height: 1.2;
`;

const Subheader = styled.p`
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: #666;
  font-weight: 600;
`;

const IntroText = styled.p`
  font-size: 1.8rem;
  margin-bottom: 2.5rem;
  color: #666;
`;

const ContactInfo = styled.div`
  margin-bottom: 3rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
`;

const Icon = styled.span`
  margin-right: 1.5rem;
  color: rgb(16, 137, 211);
  font-size: 2.5rem;
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
  width: 100%;
`;

const InputRow = styled.div`
  display: flex;
  gap: 1rem;
`;

const InputGroup = styled.div`
  position: relative;
  flex: 1;
`;

const Input = styled.input`
  width: 100%;
  background: white;
  border: none;
  padding: 15px 20px;
  border-radius: 20px;
  box-shadow: #cff0ff 0px 10px 10px -5px;
  border-inline: 2px solid transparent;

  &::placeholder {
    color: rgb(170, 170, 170);
  }

  &:focus {
    outline: none;
    border-inline: 2px solid #12b1d1;
  }
`;

const TextArea = styled(Input).attrs({ as: "textarea" })`
  height: 150px;
  resize: vertical;
`;

const Label = styled.label`
  position: absolute;
  left: 20px;
  top: 15px;
  font-size: 0.9rem;
  color: rgb(170, 170, 170);
  pointer-events: none;
  transition: all 0.3s ease;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  font-weight: bold;
  background: linear-gradient(
    45deg,
    rgb(16, 137, 211) 0%,
    rgb(18, 177, 209) 100%
  );
  color: white;
  padding-block: 15px;
  margin: 20px auto;
  border-radius: 20px;
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 20px 10px -15px;
  border: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 23px 10px -20px;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 15px 10px -10px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
`;

const SocialIcon = styled.a`
  font-size: 2.5rem;
  color: rgb(16, 137, 211);
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: rgb(18, 177, 209);
    transform: scale(1.1);
  }
`;

const Contact = () => {
  return (
    <PageWrapper>
      <NavBar />
      <ContactContainer>
        <BackToHome to="/">
          <FaArrowLeft />
          <span>Back To Home</span>
        </BackToHome>
        <ContentWrapper>
          <LeftSection>
            <Header>Contact Info</Header>
            <Subheader>Get In Touch</Subheader>
            <IntroText>Don't be afraid man! Just say hello</IntroText>
            <ContactInfo>
              <InfoItem>
                <Icon>
                  <FaPhone />
                </Icon>
                +31 687693145
              </InfoItem>
              <InfoItem>
                <Icon>
                  <FaEnvelope />
                </Icon>
                o.robert19942hotmail.com
              </InfoItem>
              <InfoItem>
                <Icon>
                  <FaMapMarkerAlt />
                </Icon>
                Fossa Italica 17
              </InfoItem>
            </ContactInfo>
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
          </LeftSection>
          <RightSection>
            <Form>
              <InputRow>
                <InputGroup>
                  <Input type="text" id="name" placeholder="Your name" />
                  <Label htmlFor="name">Your name</Label>
                </InputGroup>
                <InputGroup>
                  <Input type="email" id="email" placeholder="Your email" />
                  <Label htmlFor="email">Your email</Label>
                </InputGroup>
              </InputRow>
              <InputRow>
                <InputGroup>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="Your phone (Optional)"
                  />
                  <Label htmlFor="phone">Your phone (Optional)</Label>
                </InputGroup>
                <InputGroup>
                  <Input type="text" id="subject" placeholder="Your subject" />
                  <Label htmlFor="subject">Your subject</Label>
                </InputGroup>
              </InputRow>
              <InputGroup>
                <TextArea id="message" placeholder="Type your message" />
                <Label htmlFor="message">Type your message</Label>
              </InputGroup>
              <Button type="submit">
                <FaPaperPlane /> Submit Now
              </Button>
            </Form>
          </RightSection>
        </ContentWrapper>
      </ContactContainer>
    </PageWrapper>
  );
};

export default Contact;
