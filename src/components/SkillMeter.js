import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SkillContainer = styled.div`
  margin-bottom: 15px;
`;

const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const SkillName = styled.span`
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

const SkillPercentage = styled.span`
  font-size: 0.9rem;
  color: ${(props) => props.theme.textSecondary};
`;

const SkillBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
`;

const SkillLevel = styled(motion.div)`
  height: 100%;
  background: ${(props) => props.gradient};
  border-radius: 10px;
`;

const getGradientForLevel = (level) => {
  const hue = Math.min(120, level * 1.2); // 120 is green in HSL
  return `linear-gradient(90deg, hsl(0, 100%, 50%) 0%, hsl(${hue}, 100%, 50%) 100%)`;
};

function SkillMeter({ skill, level }) {
  const gradient = getGradientForLevel(level);

  return (
    <SkillContainer>
      <SkillInfo>
        <SkillName>{skill}</SkillName>
        <SkillPercentage>{level}%</SkillPercentage>
      </SkillInfo>
      <SkillBar>
        <SkillLevel
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          gradient={gradient}
        />
      </SkillBar>
    </SkillContainer>
  );
}

export default SkillMeter;
