import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaUser, FaCheck, FaHeart, FaStar, FaComments } from "react-icons/fa";

const popIn = keyframes`
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const FeedbackCard = styled.div`
  background: linear-gradient(45deg, #6a11cb 0%, #2575fc 100%);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: 400px;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: ${shimmer} 6s infinite;
    transform: rotate(30deg);
  }

  @media (max-width: 768px) {
    height: 330px;
    padding: 1rem;
    width: 20rem;
    margin-left: -2rem;
  }
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

const ChatTitle = styled.h3`
  margin: 0;
  font-size: 1.4rem;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  animation: ${popIn} 0.5s ease-out;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    height: 20rem;
  }
`;

const ProfileIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00b4db 0%, #0083b0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;
const MessageContent = styled.div`
  width: 100%;
  border: 3px solid white;
  border-radius: 20px;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
`;

const MessageBubble = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 18px;
  padding: 1rem 1.2rem;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &::before {
    content: "";
    position: absolute;
    left: -10px;
    top: 20px;
    border-width: 10px 10px 10px 0;
    border-style: solid;
    border-color: transparent rgba(255, 255, 255, 0.9) transparent transparent;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
    height: 5rem;
    width: 13rem;
  }
`;

const Message = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    color: #333;
    margin: 0;
    line-height: 1.1;
  }
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const MessageStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 0.3rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
`;

const ReactionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
`;

const Reaction = styled.span`
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.2rem 0.4rem;
  }
`;

const StarRating = styled.div`
  display: flex;
  margin-top: 0.5rem;
  color: #ffd700;

  @media (max-width: 768px) {
    margin-top: 0.3rem;
  }
`;

const feedbacks = [
  {
    name: "Alice Johnson",
    message:
      "Robert's web design skills are exceptional. The website he created for my business is not only visually stunning but also incredibly user-friendly!",
    title: "CEO, TechStart",
    time: "10:30 AM",
    reaction: 5,
    rating: 5,
  },
  {
    name: "John Smith",
    message:
      "I'm thoroughly impressed with the e-commerce platform Robert developed. It's intuitive, fast, and has dramatically boosted our online sales.",
    title: "Founder, EcoGoods",
    time: "2:45 PM",
    reaction: 3,
    rating: 4,
  },
  {
    name: "Emma Davis",
    message:
      "Working with Robert was a pleasure. He took our vague ideas and transformed them into a beautiful, functional website that perfectly represents our brand.",
    title: "Marketing Director, Innovate Inc.",
    time: "4:20 PM",
    reaction: 7,
    rating: 5,
  },
];

const FeedbackPopup = () => {
  const [currentFeedback, setCurrentFeedback] = useState(feedbacks[0]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeedback(
        feedbacks[Math.floor(Math.random() * feedbacks.length)]
      );
      setKey((prevKey) => prevKey + 1);
    }, 8000); // Change feedback every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <FeedbackCard>
      <ChatHeader>
        <ChatTitle>
          <FaComments /> Client Feedback
        </ChatTitle>
      </ChatHeader>
      <MessageContainer key={key}>
        <ProfileIcon>
          <FaUser color="white" size={24} />
        </ProfileIcon>
        <MessageContent>
          <MessageBubble>
            <Message>{currentFeedback.message}</Message>
          </MessageBubble>
          <ClientInfo>
            {currentFeedback.name} • {currentFeedback.title}
          </ClientInfo>
          <StarRating>
            {[...Array(currentFeedback.rating)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </StarRating>
          <MessageStatus>
            <FaCheck style={{ marginRight: "4px" }} /> Sent{" "}
            {currentFeedback.time}
          </MessageStatus>
          <ReactionContainer>
            <Reaction>
              <FaHeart /> {currentFeedback.reaction}
            </Reaction>
          </ReactionContainer>
        </MessageContent>
      </MessageContainer>
    </FeedbackCard>
  );
};

export default FeedbackPopup;
