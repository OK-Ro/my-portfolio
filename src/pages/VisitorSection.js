import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const VisitorSectionWrapper = styled.div`
  background-color: #131722;
  border-radius: 8px;
  padding: 10px;
  color: #d1d4dc;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ChartTitle = styled.h2`
  font-size: 12px;
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 10px;
    margin-bottom: 15px;
  }
`;

const ChartContainer = styled.div`
  height: 150px;
  position: relative;
  background: #1c2030;
  border-radius: 8px;
  padding: 10px;
  overflow: hidden;
  display: flex;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    padding: 15px;
  }
`;

const LineChartContainer = styled.div`
  flex: 1;
  position: relative;

  @media (max-width: 768px) {
    height: 125px;
    margin-bottom: 10px;
  }
`;

const BarChartContainer = styled.div`
  width: 75px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 50px;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const ChartLine = styled(motion.path)`
  fill: none;
  stroke-width: 1.5;
  filter: drop-shadow(0 0 5px ${(props) => props.stroke});

  @media (max-width: 768px) {
    stroke-width: 1;
  }
`;

const GridLine = styled.line`
  stroke: #2a2e39;
  stroke-width: 0.5;
  stroke-dasharray: 5, 5;

  @media (max-width: 768px) {
    stroke-width: 0.25;
    stroke-dasharray: 3, 3;
  }
`;

const AxisLabel = styled.text`
  fill: #d1d4dc;
  font-size: 6px;

  @media (max-width: 768px) {
    font-size: 5px;
  }
`;

const MonthLabel = styled.text`
  fill: #d1d4dc;
  font-size: 5px;
  text-anchor: middle;

  @media (max-width: 768px) {
    font-size: 4px;
  }
`;

const Legend = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin: 2.5px 7.5px;

  @media (max-width: 768px) {
    margin: 5px 10px;
    font-size: 6px;
  }
`;

const LegendColor = styled.div`
  width: 7.5px;
  height: 7.5px;
  margin-right: 4px;
  background-color: ${(props) => props.color};
  box-shadow: 0 0 10px ${(props) => props.color};

  @media (max-width: 768px) {
    width: 6px;
    height: 6px;
    margin-right: 3px;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 2.5px 5px;
  border-radius: 4px;
  font-size: 6px;
  pointer-events: none;

  @media (max-width: 768px) {
    font-size: 5px;
    padding: 2px 4px;
  }
`;

const PumpingBarsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const PumpingBar = styled(motion.div)`
  width: 20px;
  position: absolute;
  bottom: 0;
  border-radius: 4px 4px 0 0;

  @media (max-width: 768px) {
    width: 15px;
  }
`;

const BarLabel = styled.div`
  font-size: 5px;
  text-align: center;
  margin-top: 2.5px;

  @media (max-width: 768px) {
    font-size: 4.5px;
    margin-top: 3px;
  }
`;

const VisitorSection = () => {
  const [monthlyData, setMonthlyData] = useState([]);
  const [tooltip, setTooltip] = useState({
    show: false,
    x: 0,
    y: 0,
    content: "",
  });
  const [pumpHeights, setPumpHeights] = useState([0, 0, 0]);

  const width = 350;
  const height = 150;
  const padding = 20;

  useEffect(() => {
    const mockData = Array.from({ length: 12 }, () => ({
      visits: Math.floor(Math.random() * 10000),
      newUsers: Math.floor(Math.random() * 1000),
      activeUsers: Math.floor(Math.random() * 5000),
    }));
    setMonthlyData(mockData);
  }, []);

  useEffect(() => {
    const intervals = [
      setInterval(() => {
        setPumpHeights((prev) => [(prev[0] + 1) % 11, prev[1], prev[2]]);
      }, 200),
      setInterval(() => {
        setPumpHeights((prev) => [prev[0], (prev[1] + 1) % 11, prev[2]]);
      }, 300),
      setInterval(() => {
        setPumpHeights((prev) => [prev[0], prev[1], (prev[2] + 1) % 11]);
      }, 400),
    ];

    return () => intervals.forEach(clearInterval);
  }, []);

  const xScale = (index) => (index / 11) * (width - 2 * padding) + padding;
  const yScale = (value) =>
    height - ((value / 10000) * (height - 2 * padding) + padding);

  const createLinePath = (data, key) =>
    data
      .map(
        (month, index) =>
          `${index === 0 ? "M" : "L"} ${xScale(index)} ${yScale(month[key])}`
      )
      .join(" ");

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const dataIndex = Math.floor((x - padding) / ((width - 2 * padding) / 11));

    if (dataIndex >= 0 && dataIndex < monthlyData.length) {
      const month = monthlyData[dataIndex];
      setTooltip({
        show: true,
        x: x + 10,
        y: y + 10,
        content: `Month: ${getMonthName(dataIndex)}\nVisits: ${
          month.visits
        }\nNew Users: ${month.newUsers}\nActive Users: ${month.activeUsers}`,
      });
    } else {
      setTooltip({ show: false, x: 0, y: 0, content: "" });
    }
  };

  const handleMouseLeave = () => {
    setTooltip({ show: false, x: 0, y: 0, content: "" });
  };

  const getMonthName = (index) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const currentMonth = new Date().getMonth();
    return months[(currentMonth - 11 + index + 12) % 12];
  };

  const barColors = ["#ffff00", "#ff00ff", "#00ffff"];

  return (
    <VisitorSectionWrapper>
      <ChartTitle>Monthly Visitor Engagement</ChartTitle>
      <ChartContainer>
        <LineChartContainer
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <svg width={width} height={height}>
            {[0, 2500, 5000, 7500, 10000].map((level) => (
              <React.Fragment key={level}>
                <GridLine
                  x1={padding}
                  y1={yScale(level)}
                  x2={width - padding}
                  y2={yScale(level)}
                />
                <AxisLabel x={5} y={yScale(level)}>
                  {level}
                </AxisLabel>
              </React.Fragment>
            ))}
            {monthlyData.map((_, index) => (
              <MonthLabel key={index} x={xScale(index)} y={height - 5}>
                {getMonthName(index)}
              </MonthLabel>
            ))}
            <ChartLine
              d={createLinePath(monthlyData, "visits")}
              stroke="#00ffff"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
            <ChartLine
              d={createLinePath(monthlyData, "newUsers")}
              stroke="#ff00ff"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
            <ChartLine
              d={createLinePath(monthlyData, "activeUsers")}
              stroke="#ffff00"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
          </svg>
          {tooltip.show && (
            <Tooltip style={{ left: tooltip.x, top: tooltip.y }}>
              {tooltip.content.split("\n").map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </Tooltip>
          )}
        </LineChartContainer>
        <BarChartContainer>
          <PumpingBarsContainer>
            {pumpHeights.map((height, index) => (
              <div
                key={index}
                style={{ position: "relative", height: "100%", width: "15px" }}
              >
                <PumpingBar
                  style={{
                    backgroundColor: barColors[index],
                    height: `${height * 10}%`,
                  }}
                  animate={{ height: `${height * 10}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            ))}
          </PumpingBarsContainer>
          <BarLabel>Activity Meters</BarLabel>
        </BarChartContainer>
      </ChartContainer>
      <Legend>
        <LegendItem>
          <LegendColor color="#00ffff" />
          <span>Total Visits</span>
        </LegendItem>
        <LegendItem>
          <LegendColor color="#ff00ff" />
          <span>New Users</span>
        </LegendItem>
        <LegendItem>
          <LegendColor color="#ffff00" />
          <span>Active Users</span>
        </LegendItem>
      </Legend>
    </VisitorSectionWrapper>
  );
};

export default VisitorSection;
