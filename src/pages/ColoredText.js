import React from "react";
import styled from "styled-components";

const Pre = styled.pre`
  background-color: #1e1e1e;
  color: #d4d4d4;
  padding: 1rem; /* Reduced from 2rem */
  border-radius: 2.5px; /* Reduced from 5px */
  overflow-x: auto;
  font-family: "Consolas", "Monaco", "Andale Mono", "Ubuntu Mono", monospace;
  font-size: 9px; /* Reduced from 18px */
  line-height: 1.5;
  white-space: pre-wrap;
  word-wrap: break-word;
  height: 11rem; /* Reduced from 22rem */
  overflow-y: auto;
  backdrop-filter: blur(10px);

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 768px) {
    font-size: 6px; /* Reduced from 12px */
    padding: 0.05rem; /* Reduced from 0.1rem */
    height: 9rem; /* Reduced from 18rem */
    width: calc(110% - 1.5rem);
    margin-right: 0.5rem;
  }
`;

const colorClasses = [
  styled.span`
    color: #9cdcfe;
  `,
  styled.span`
    color: #4ec9b0;
  `,
  styled.span`
    color: #c586c0;
  `,
  styled.span`
    color: #dcdcaa;
  `,
  styled.span`
    color: #4fc1ff;
  `,
  styled.span`
    color: #ce9178;
  `,
  styled.span`
    color: #b5cea8;
  `,
];

const ColoredText = ({ children }) => {
  const words = children.split(/\s+/);
  const coloredWords = words.map((word, index) => {
    const ColoredSpan = colorClasses[index % colorClasses.length];
    return <ColoredSpan key={index}>{word} </ColoredSpan>;
  });

  return <Pre>{coloredWords}</Pre>;
};

export default ColoredText;