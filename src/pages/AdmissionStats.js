import React, { useState, useEffect } from "react";
import { FaUsers, FaUserClock } from "react-icons/fa";
import { Bar, Pie } from "react-chartjs-2";
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

const AdmissionStats = () => {
  // Retrieve total admissions from local storage, or initialize to 0
  const [totalAdmissions, setTotalAdmissions] = useState(
    parseInt(localStorage.getItem("totalAdmissions")) || 0
  );

  const [activeAdmissions, setActiveAdmissions] = useState(1); // Initially one active user (current user)
  const [liveCount, setLiveCount] = useState(1); // Initialize live count
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    // Increment total admissions and save to local storage
    setTotalAdmissions((prevTotal) => {
      const newTotal = prevTotal + 1;
      localStorage.setItem("totalAdmissions", newTotal);
      return newTotal;
    });

    // Update active admissions when the component is mounted
    setActiveAdmissions((prevCount) => prevCount + 1);

    // Simulating real-time visits
    const simulateVisit = () => {
      if (Math.random() < 0.1) {
        // 10% chance of a new visit every 5 seconds
        setLiveCount((prevCount) => Math.min(prevCount + 1, liveCount + 10)); // Limit the max live count for realism
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 1000);
      }
    };

    const intervalId = setInterval(simulateVisit, 5000);

    // Clean up on unmount
    return () => {
      clearInterval(intervalId);
      // Decrement active admissions when the user leaves
      setActiveAdmissions((prevCount) => Math.max(prevCount - 1, 0));
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
    <div style={styles.container}>
      <div style={styles.statsContainer}>
        <StatCard
          icon={FaUsers}
          title="Total Visitors"
          value={totalAdmissions}
        />
        <StatCard icon={FaUserClock} title="Active" value={activeAdmissions} />
        <LiveCounter count={liveCount} isBlinking={isBlinking} />
      </div>
      <div style={styles.chartsContainer}>
        <ChartCard
          title="Admission Trend"
          chart={<Bar data={barData} options={barOptions} />}
        />
        <ChartCard
          title="Admission Status"
          chart={<Pie data={pieData} options={pieOptions} />}
        />
      </div>
    </div>
  );
};

const StatCard = ({ icon: Icon, title, value }) => (
  <div style={styles.statCard}>
    <Icon style={styles.statIcon} />
    <div>
      <h3 style={styles.statTitle}>{title}</h3>
      <p style={styles.statValue}>{value.toLocaleString()}</p>
    </div>
  </div>
);

const LiveCounter = ({ count, isBlinking }) => (
  <div style={styles.liveCounter}>
    <div
      style={{
        ...styles.liveButton,
        animation: isBlinking ? "brighten 1s infinite" : "none",
      }}
    >
      <div style={styles.liveDot} />
      <span style={styles.liveText}>LIVE</span>
    </div>
    <p
      style={{
        ...styles.liveCount,
        animation: isBlinking ? "glow 1s infinite" : "none",
      }}
    >
      {count}
    </p>
  </div>
);

const ChartCard = ({ title, chart }) => (
  <div style={styles.chartCard}>
    <h3 style={styles.chartTitle}>{title}</h3>
    <div style={styles.chartContainer}>{chart}</div>
  </div>
);

const styles = {
  container: {
    width: "100%",
    backgroundColor: "#f0f4f8",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  chartsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  statCard: {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "15px",
    display: "flex",
    alignItems: "center",
    flex: 1,
    margin: "0 10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    position: "relative",
    overflow: "hidden",
  },
  statIcon: {
    fontSize: "24px",
    marginRight: "15px",
    color: "#4a5568",
  },
  statTitle: {
    fontSize: "16px", // Increased font size for better readability
    color: "#4a5568", // Slightly darker color for better contrast
    marginBottom: "5px",
    fontFamily: "'Roboto', sans-serif", // Updated font for modern look
  },
  statValue: {
    fontSize: "32px", // Increased font size
    fontWeight: "bold",
    color: "#2d3748", // Darker color for better readability
    background: "linear-gradient(45deg, #FF6F61, #FFCCBC)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 1px 5px rgba(0, 0, 0, 0.3)",
    padding: "5px",
    fontFamily: "'Roboto', sans-serif", // Updated font for consistency
  },
  liveCounter: {
    backgroundColor: "#2d3748",
    borderRadius: "8px",
    padding: "15px",
    flex: 1,
    margin: "0 10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  liveButton: {
    backgroundColor: "#E53E3E",
    borderRadius: "20px",
    padding: "5px 15px",
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  liveDot: {
    width: "12px", // Slightly larger for better visibility
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "white",
    marginRight: "8px",
  },
  liveText: {
    color: "white",
    fontWeight: "bold",
    fontSize: "16px", // Slightly larger font size for emphasis
  },
  liveCount: {
    fontSize: "40px", // Increased size for better visibility
    fontWeight: "bold",
    color: "#00BFFF", // Bright blue color
    textShadow: "0 0 20px rgba(255, 255, 255, 0.9)", // Enhanced glow effect
    fontFamily: "'Roboto', sans-serif", // Updated font for consistency
  },
  chartCard: {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "15px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
  },
  chartTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#4a5568",
    marginBottom: "10px",
    fontFamily: "'Roboto', sans-serif", // Updated font for consistency
  },
  chartContainer: {
    height: "200px",
  },
};

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
    },
    x: {
      grid: { display: false },
    },
  },
};

const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "bottom", labels: { boxWidth: 12, padding: 15 } },
  },
};

export default AdmissionStats;
