import React from "react";
import styled from "styled-components";

const Pre = styled.pre`
  background-color: #1e1e1e;
  color: #d4d4d4;
  padding: 2rem;
  border-radius: 5px;
  overflow-x: auto;
  font-family: "Consolas", "Monaco", "Andale Mono", "Ubuntu Mono", monospace;
  font-size: 18px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-wrap: break-word;
  height: 22rem;
  overflow-y: auto;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 0.6rem;
    width: 19.3rem;
    margin-left: -1.6rem;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
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
