import React, { useState, useEffect } from "react";
import { FaUsers, FaUserClock } from "react-icons/fa";
import { Bar, Pie } from "react-chartjs-2";
import styled from "styled-components";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const Container = styled.div`
  width: 100%;
  background-color: #f0f4f8;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px;
    border-radius: 8px;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 15px;
  }
`;

const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const StatCardWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  align-items: center;
  flex: 1;
  margin: 0 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    margin: 0;
    padding: 12px;
    border-radius: 6px;
  }
`;

const StatIcon = styled.div`
  font-size: 24px;
  margin-right: 15px;
  color: #4a5568;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-right: 12px;
  }
`;

const StatTitle = styled.h3`
  font-size: 16px;
  color: #4a5568;
  margin-bottom: 5px;
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 3px;
  }
`;

const StatValue = styled.p`
  font-size: 32px;
  font-weight: bold;
  color: #2d3748;
  background: linear-gradient(45deg, #ff6f61, #ffccbc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  padding: 5px;
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 3px;
  }
`;

const LiveCounterWrapper = styled.div`
  background-color: #2d3748;
  border-radius: 8px;
  padding: 15px;
  flex: 1;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    margin: 0;
    padding: 12px;
    border-radius: 6px;
  }
`;

const LiveButton = styled.div`
  background-color: #e53e3e;
  border-radius: 20px;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    padding: 4px 12px;
    margin-bottom: 8px;
  }
`;

const LiveDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: white;
  margin-right: 8px;

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
    margin-right: 6px;
  }
`;

const LiveText = styled.span`
  color: white;
  font-weight: bold;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const LiveCount = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: #00bfff;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.9);
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const ChartCardWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 12px;
    border-radius: 6px;
  }
`;

const ChartTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #4a5568;
  margin-bottom: 10px;
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

const ChartContainer = styled.div`
  flex: 1;
  min-height: 200px;
  width: 100%;

  @media (max-width: 768px) {
    min-height: 180px;
  }
`;

const AdmissionStats = () => {
  const [totalVisits, setTotalVisits] = useState(
    parseInt(localStorage.getItem("totalVisits")) || 0
  );
  const [activeVisitors, setActiveVisitors] = useState(1);
  const [liveCount, setLiveCount] = useState(1);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    setTotalVisits((prevTotal) => {
      const newTotal = prevTotal + 1;
      localStorage.setItem("totalVisits", newTotal);
      return newTotal;
    });

    setActiveVisitors((prevCount) => prevCount + 1);

    const simulateVisit = () => {
      if (Math.random() < 0.1) {
        setLiveCount((prevCount) => Math.min(prevCount + 1, liveCount + 10));
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 1000);
      }
    };

    const intervalId = setInterval(simulateVisit, 5000);

    return () => {
      clearInterval(intervalId);
      setActiveVisitors((prevCount) => Math.max(prevCount - 1, 0));
    };
  }, [liveCount]);

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        data: [20, 35, 45, 60, 80],
        backgroundColor: "#4BC0C0",
      },
    ],
  };

  const pieData = {
    labels: ["Completed", "In Progress", "Not Started"],
    datasets: [
      {
        data: [300, 150, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <Container>
      <StatsContainer>
        <StatCard icon={FaUsers} title="Total Visits" value={totalVisits} />
        <StatCard
          icon={FaUserClock}
          title="Active Visitors"
          value={activeVisitors}
        />
        <LiveCounter count={liveCount} isBlinking={isBlinking} />
      </StatsContainer>
      <ChartsContainer>
        <ChartCard
          title="Visit Trend"
          chart={<Bar data={barData} options={barOptions} />}
        />
        <ChartCard
          title="Visit Status"
          chart={<Pie data={pieData} options={pieOptions} />}
        />
      </ChartsContainer>
    </Container>
  );
};

const StatCard = ({ icon: Icon, title, value }) => (
  <StatCardWrapper>
    <StatIcon>
      <Icon />
    </StatIcon>
    <div>
      <StatTitle>{title}</StatTitle>
      <StatValue>{value.toLocaleString()}</StatValue>
    </div>
  </StatCardWrapper>
);

const LiveCounter = ({ count, isBlinking }) => (
  <LiveCounterWrapper>
    <LiveButton
      style={{
        animation: isBlinking ? "brighten 1s infinite" : "none",
      }}
    >
      <LiveDot />
      <LiveText>LIVE</LiveText>
    </LiveButton>
    <LiveCount
      style={{
        animation: isBlinking ? "glow 1s infinite" : "none",
      }}
    >
      {count}
    </LiveCount>
  </LiveCounterWrapper>
);

const ChartCard = ({ title, chart }) => (
  <ChartCardWrapper>
    <ChartTitle>{title}</ChartTitle>
    <ChartContainer>{chart}</ChartContainer>
  </ChartCardWrapper>
);

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: { display: false },
      ticks: {
        font: {
          size: 10,
        },
      },
    },
    x: {
      grid: { display: false },
      ticks: {
        font: {
          size: 10,
        },
      },
    },
  },
};

const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 12,
        padding: 15,
        font: {
          size: 10,
        },
      },
    },
  },
};

export default AdmissionStats;
