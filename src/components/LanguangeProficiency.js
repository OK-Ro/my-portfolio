import React from "react";
import styled from "styled-components";

const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const LanguageName = styled.span`
  width: 100px;
  margin-right: 10px;
`;

const ProficiencyDot = styled.span`
  height: 10px;
  width: 10px;
  background-color: ${(props) =>
    props.filled ? props.theme.buttonBackground : "#e0e0e0"};
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
`;

function LanguageProficiency({ language, level }) {
  const dots = [1, 2, 3, 4, 5];

  return (
    <LanguageContainer>
      <LanguageName>{language}</LanguageName>
      {dots.map((dot, index) => (
        <ProficiencyDot key={index} filled={index < level} />
      ))}
    </LanguageContainer>
  );
}

export default LanguageProficiency;
