import React, { useState } from "react";
import styled from "styled-components";

const TabContainer = styled.div`
  margin-bottom: 20px;
`;

const TabList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 2px solid ${(props) => props.theme.buttonBackground};
`;

const TabItem = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? props.theme.buttonBackground : "transparent"};
  color: ${(props) =>
    props.active ? props.theme.buttonText : props.theme.text};
  border-radius: 5px 5px 0 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.buttonHoverBackground};
    color: ${(props) => props.theme.buttonText};
  }
`;

const TabContent = styled.div`
  padding: 20px 0;
`;

function TabInterface({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabContainer>
      <TabList>
        {tabs.map((tab, index) => (
          <TabItem
            key={index}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </TabItem>
        ))}
      </TabList>
      <TabContent>{tabs[activeTab].content}</TabContent>
    </TabContainer>
  );
}

export default TabInterface;
