import React from "react";
import styled from "styled-components";

const EducationItem = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Degree = styled.h3`
  margin: 0 0 5px 0;
  color: ${(props) => props.theme.text};
`;

const Institution = styled.h4`
  margin: 0 0 5px 0;
  color: ${(props) => props.theme.textSecondary};
`;

const Date = styled.p`
  margin: 0;
  font-style: italic;
  color: ${(props) => props.theme.textTertiary};
`;

function Education({ degree, institution, date, description }) {
  return (
    <EducationItem>
      <Degree>{degree}</Degree>
      <Institution>{institution}</Institution>
      <Date>{date}</Date>
      <p>{description}</p>
    </EducationItem>
  );
}

export default Education;
