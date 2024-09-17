import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
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

const gradientAnimation = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Header = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  color: transparent;
  background: linear-gradient(45deg, #ff4b2b, #ff416c, #00c9ff, #92fe9d);
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  animation: ${gradientAnimation} 10s ease infinite, ${fadeIn} 1s ease-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: 2px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 50px;
    height: 4px;
    background: #00c9ff;
    transform: translateX(-50%);
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const Subheader = styled.p`
  font-size: 1.5rem;
  margin-bottom: 4rem;
  font-weight: 900;
  color: ${(props) => props.theme.accent || "#FF416C"};
  max-width: 800px;

  line-height: 1.6;
  animation: ${fadeIn} 1s ease-out 0.5s both;
  position: relative;

  &::before,
  &::after {
    font-size: 3rem;
    color: #00c9ff;
    position: absolute;
    opacity: 0.3;
  }

  &::before {
    top: -20px;
    left: 0;
  }

  &::after {
    bottom: -40px;
    right: 0;
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 5rem;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const ContactContainer = styled.div`
  width: 100%;
  max-width: 1400px;
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
  border: 4px solid transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, #6dd5ed, #2193b0);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &::before {
    content: "";
    background: linear-gradient(to right, #6dd5ed, #2193b0);
    border-radius: 12px;
    height: 45px;
    width: 60px;
    position: absolute;
    left: 4px;
    top: 2px;
    z-index: 1;
    transition: width 0.5s;
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
  animation: ${fadeIn} 1s ease-out;

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
  background: ${({ theme }) => theme.formBackground};
  border-radius: 40px;
  padding: 40px;
  border: 5px solid ${({ theme }) => theme.formBorder};
  box-shadow: 0 30px 30px -20px ${({ theme }) => theme.formBoxShadow};
`;

const IntroText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.secondaryText};
`;

const ContactInfo = styled.div`
  margin-bottom: 3rem;
`;

const float = keyframes`
  0% { transform: translateY(0px) rotateY(0deg); }
  50% { transform: translateY(-10px) rotateY(180deg); }
  100% { transform: translateY(0px) rotateY(360deg); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px ${({ theme }) => theme.accent}; }
  50% { box-shadow: 0 0 20px ${({ theme }) => theme.accent}, 0 0 30px ${({
  theme,
}) => theme.accent}; }
  100% { box-shadow: 0 0 5px ${({ theme }) => theme.accent}; }
`;

const Icon = styled.span`
  margin-right: 1.5rem;
  color: ${({ theme }) => theme.iconColor};
  font-size: 2.5rem;
  transition: all 0.5s ease;
  display: inline-block;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background: ${({ theme }) => theme.cardBackground};
    border-radius: 50%;
    z-index: -1;
    transition: all 0.5s ease;
  }

  svg {
    transition: all 0.5s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.accent};
    animation: ${float} 3s ease-in-out infinite;

    &::before {
      animation: ${glow} 1.5s ease-in-out infinite;
      background: ${({ theme }) => theme.cardBackground};
      transform: translate(-50%, -50%) scale(1.2);
    }

    svg {
      transform: scale(1.2);
    }
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }
`;
const Form = styled.form`
  display: grid;
  gap: 2rem;
  width: 100%;
`;

const InputRow = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InputGroup = styled.div`
  position: relative;
  flex: 1;
`;

const Input = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.inputBackground};
  border: 2px solid ${({ theme }) => theme.inputBorder};
  padding: 15px 20px;
  border-radius: 20px;
  box-shadow: 0 4px 10px ${({ theme }) => theme.inputBoxShadow};
  font-size: 1rem;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.inputFocusBorder};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.inputBoxShadow};
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-25px) translateX(-10px) scale(0.8);
    color: ${({ theme }) => theme.inputFocusBorder};
    background-color: ${({ theme }) => theme.inputBackground};
    padding: 0 8px;
  }

  &::placeholder {
    color: transparent;
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
  font-size: 1rem;
  color: ${({ theme }) => theme.labelColor};
  pointer-events: none;
  transition: all 0.3s ease;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: bold;
  font-size: 1.1rem;
  background: ${({ theme }) => theme.buttonGradient};
  color: ${({ theme }) => theme.buttonText};
  padding: 15px;
  margin: 20px auto 0;
  border-radius: 25px;
  box-shadow: 0 4px 10px ${({ theme }) => theme.buttonBoxShadow};
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;

  svg {
    margin-right: 10px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px ${({ theme }) => theme.buttonBoxShadow};
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 5px ${({ theme }) => theme.buttonBoxShadow};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
`;

const SocialIcon = styled.a`
  font-size: 2rem;
  color: ${({ theme }) => theme.iconColor};
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
    transform: scale(1.1);
  }
`;

const StatusMessage = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-weight: bold;
  ${(props) =>
    props.success
      ? css`
          color: ${({ theme }) => theme.success};
        `
      : css`
          color: ${({ theme }) => theme.error};
        `}
`;

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    setSubmitStatus(null);
    setErrorMessage("");

    try {
      const response = await axios.post(
        "https://formspree.io/f/xdknvjlk",
        formData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      if (error.response) {
        setErrorMessage(
          `Server error: ${error.response.status} ${error.response.data.error}`
        );
      } else if (error.request) {
        setErrorMessage(
          "No response received from server. Please check your internet connection."
        );
      } else {
        setErrorMessage(`Error: ${error.message}`);
      }
    }
  };

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
                o.robert1994@hotmail.com
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
            <Form onSubmit={handleSubmit}>
              <InputRow>
                <InputGroup>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=" "
                    required
                  />
                  <Label htmlFor="name">Your name</Label>
                </InputGroup>
                <InputGroup>
                  <Input
                    type="email"
                    id="email"
                    name="_replyto"
                    placeholder=" "
                    required
                  />
                  <Label htmlFor="email">Your email</Label>
                </InputGroup>
              </InputRow>
              <InputRow>
                <InputGroup>
                  <Input type="tel" id="phone" name="phone" placeholder=" " />
                  <Label htmlFor="phone">Your phone (Optional)</Label>
                </InputGroup>
                <InputGroup>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder=" "
                    required
                  />
                  <Label htmlFor="subject">Your subject</Label>
                </InputGroup>
              </InputRow>
              <InputGroup>
                <TextArea
                  id="message"
                  name="message"
                  placeholder=" "
                  required
                />
                <Label htmlFor="message">Type your message</Label>
              </InputGroup>
              <Input
                type="hidden"
                name="_subject"
                value="New submission from Robfolio"
              />
              <Input type="hidden" name="_format" value="plain" />
              <Input type="hidden" name="_template" value="table" />
              <Button type="submit">
                <FaPaperPlane /> Submit Now
              </Button>
              {submitStatus === "success" && (
                <StatusMessage success>
                  Thank you for your message!
                </StatusMessage>
              )}
              {submitStatus === "error" && (
                <StatusMessage>
                  {errorMessage || "There was an error. Please try again."}
                </StatusMessage>
              )}
            </Form>
          </RightSection>
        </ContentWrapper>
      </ContactContainer>
    </PageWrapper>
  );
};

export default Contact;
