import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaCode,
  FaServer,
  FaMobile,
  FaRocket,
  FaUsers,
  FaUserFriends,
} from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import NavBar from "../components/NavBar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ServicesContainer = styled.div`
  margin: 0 auto;
  padding: 5rem;
  animation: ${fadeIn} 0.5s ease-in;
`;
const ContentWrapper = styled.div`
  margin-top: 10rem;
`;

const PageLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
`;

const LeftColumn = styled.div`
  flex: 1;
  min-width: 300px;
`;

const RightColumn = styled.div`
  flex: 1;
  min-width: 300px;
`;

const BackToHome = styled(Link)`
  text-decoration: none;
  color: #0066cc;
  font-weight: bold;
  margin-bottom: 2rem;
  display: inline-block;
  transition: color 0.3s ease;

  &:hover {
    color: #004499;
  }
`;

const Header = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #333;
`;

const Subheader = styled.p`
  font-size: 1.2rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #666;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ServiceCard = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  &:nth-child(1) {
    grid-column: span 2;
  }

  &:nth-child(4) {
    grid-column: span 2;
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: #0066cc;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const ServiceDescription = styled.p`
  margin-bottom: 1rem;
  color: #666;
`;

const VisitorSection = styled.div`
  margin: 3rem 0;
  padding: 2rem;
  background-color: ${(props) => props.bgColor};
  border-radius: 15px;
  text-align: center;
  transition: background-color 0.5s ease;
`;

const VisitorCount = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #ffffff;
  margin: 1rem 0;
`;

const ChartContainer = styled.div`
  height: 200px;
  margin-top: 2rem;
`;

const TotalVisitorSection = styled.div`
  margin: 3rem 0;
  padding: 2rem;
  background-color: #f0f0f0;
  border-radius: 15px;
  text-align: center;
`;

const TotalVisitorCount = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #0066cc;
  margin: 1rem 0;
`;

const ProfilesSection = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  font-size: 1.8rem;
  color: #333;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #0066cc;
    transform: translateY(-5px);
  }
`;

const EducationSection = styled.div`
  margin-bottom: 3rem;
`;

const EducationItem = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding: 3rem;
  background-color: #f0f0f0;
  border-radius: 15px;
`;

const CTAButton = styled(Link)`
  background-color: #0066cc;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #004499;
    transform: scale(1.05);
  }
`;

const Services = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [totalVisitors, setTotalVisitors] = useState(10000);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Visitors",
        data: [],
        borderColor: "rgba(255, 255, 255, 0.8)",
        tension: 0.1,
      },
    ],
  });

  const getBackgroundColor = (count) => {
    if (count === 0) return "#cccccc";
    if (count < 50) return "#ff9999";
    if (count < 100) return "#ff6666";
    if (count < 200) return "#ff3333";
    return "#ff0000";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newVisitors = Math.floor(Math.random() * 5);
      setVisitorCount((prevCount) => {
        const newCount = prevCount + newVisitors;
        setChartData((prevData) => {
          const newLabels = [
            ...prevData.labels,
            new Date().toLocaleTimeString(),
          ].slice(-10);
          const newData = [...prevData.datasets[0].data, newCount].slice(-10);
          return {
            labels: newLabels,
            datasets: [{ ...prevData.datasets[0], data: newData }],
          };
        });
        return newCount;
      });
      setTotalVisitors((prevTotal) => prevTotal + newVisitors);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "white" },
      },
      x: {
        ticks: { color: "white" },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <ServicesContainer>
      <NavBar />
      <ContentWrapper>
        <PageLayout>
          <LeftColumn>
            <BackToHome to="/">← Back To Home</BackToHome>
            <Header>My Services</Header>
            <Subheader>
              Crafting digital experiences with expertise and passion
            </Subheader>

            <ServicesGrid>
              <ServiceCard>
                <ServiceIcon>
                  <FaCode />
                </ServiceIcon>
                <ServiceTitle>Front-End Development</ServiceTitle>
                <ServiceDescription>
                  Crafting responsive and intuitive user interfaces using modern
                  frameworks like React, Vue, or Angular. Bringing designs to
                  life with clean, efficient code.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard>
                <ServiceIcon>
                  <FaServer />
                </ServiceIcon>
                <ServiceTitle>Back-End Development</ServiceTitle>
                <ServiceDescription>
                  Building robust server-side applications and APIs using
                  technologies like Node.js, Python, or Ruby on Rails. Ensuring
                  scalable and secure data management.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard>
                <ServiceIcon>
                  <FaMobile />
                </ServiceIcon>
                <ServiceTitle>Full-Stack Development</ServiceTitle>
                <ServiceDescription>
                  Delivering end-to-end web solutions, from database design to
                  user interface. Seamlessly integrating front-end and back-end
                  technologies for optimal performance.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard>
                <ServiceIcon>
                  <FaRocket />
                </ServiceIcon>
                <ServiceTitle>Web Performance Optimization</ServiceTitle>
                <ServiceDescription>
                  Enhancing website speed and efficiency through code
                  optimization, caching strategies, and best practices.
                  Improving user experience and search engine rankings.
                </ServiceDescription>
              </ServiceCard>
            </ServicesGrid>

            <EducationSection>
              <h2>Education</h2>
              <EducationItem>
                <h3>Bachelor's Degree in Computer Science</h3>
                <p>University of Technology | 2015 - 2019</p>
              </EducationItem>
              <EducationItem>
                <h3>Master's Degree in Software Engineering</h3>
                <p>Tech Institute | 2019 - 2021</p>
              </EducationItem>
            </EducationSection>
          </LeftColumn>

          <RightColumn>
            <VisitorSection bgColor={getBackgroundColor(visitorCount)}>
              <h2 style={{ color: "white" }}>Real-time Page Popularity</h2>
              <p style={{ color: "white" }}>
                Watch as more people discover our services!
              </p>
              <FaUsers
                style={{ fontSize: "3rem", color: "white", margin: "1rem 0" }}
              />
              <VisitorCount>
                {visitorCount.toLocaleString()} active visitors
              </VisitorCount>
              <ChartContainer>
                <Line data={chartData} options={chartOptions} />
              </ChartContainer>
            </VisitorSection>

            <TotalVisitorSection>
              <h2>Total Visitors</h2>
              <p>
                Join the growing community of people exploring our services!
              </p>
              <FaUserFriends
                style={{ fontSize: "3rem", color: "#0066cc", margin: "1rem 0" }}
              />
              <TotalVisitorCount>
                {totalVisitors.toLocaleString()} total visitors
              </TotalVisitorCount>
            </TotalVisitorSection>

            <CTASection>
              <h2>Ready to bring your ideas to life?</h2>
              <p>Let's collaborate and create something amazing together!</p>
              <CTAButton to="/contact">Get In Touch</CTAButton>
            </CTASection>
          </RightColumn>
        </PageLayout>

        <ProfilesSection>
          <h2>Stay Connected</h2>
          <SocialLinks>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </SocialIcon>
          </SocialLinks>
        </ProfilesSection>
      </ContentWrapper>
    </ServicesContainer>
  );
};

export default Services;
