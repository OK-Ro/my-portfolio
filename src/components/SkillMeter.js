import React from 'react';
import styled from 'styled-components';

const SkillBar = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const SkillLevel = styled.div`
  width: ${props => props.level}%;
  height: 20px;
  background-color: ${props => props.theme.buttonBackground};
  border-radius: 10px;
  transition: width 1s ease-in-out;
`;

const SkillName = styled.span`
  display: inline-block;
  width: 100px;
  margin-right: 10px;
`;

function SkillMeter({ skill, level }) {
  return (
    <div>
      <SkillName>{skill}</SkillName>
      <SkillBar>
        <SkillLevel level={level} />
      </SkillBar>
    </div>
  );
}

export default SkillMeter;