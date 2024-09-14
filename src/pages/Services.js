import { FaArrowLeft } from "react-icons/fa";
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
import { useEffect, useState } from "react";

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
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  margin: 0 auto;
  padding: 2rem;
  animation: ${fadeIn} 0.5s ease-in;

  @media (min-width: 768px) {
    padding: 3rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem;
  }
`;

const ContentWrapper = styled.div`
  margin-top: 5rem;

  @media (min-width: 768px) {
    margin-top: 7rem;
  }

  @media (min-width: 1024px) {
    margin-top: 10rem;
  }
`;

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  min-width: 300px;
  animation: ${fadeIn} 0.9s ease-in;
`;

const RightColumn = styled.div`
  flex: 1;
  min-width: 300px;
`;

const BackToHome = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 100%;
  max-width: 192px;
  height: 56px;
  border-radius: 16px;
  position: relative;
  color: black;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  overflow: hidden;
  margin-bottom: 2rem;
  border: 4px solid #4ade80;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &::before {
    content: "";
    background-color: #4ade80;
    border-radius: 12px;
    height: 45px;
    width: 60px;
    position: absolute;
    left: 4px;
    top: 2px;
    z-index: 1;
    transition: width 0.5s;
    border: 1px solid #fffff;
  }

  &:hover::before {
    width: calc(100% - 8px);
  }

  svg {
    position: absolute;
    left: 16px;
    z-index: 2;
    height: 20px;
    width: 20px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(-3px);
  }

  span {
    position: relative;
    z-index: 2;
    transition: color 0.3s ease;
  }

  &:hover span {
    color: white;
  }
`;

const Header = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  color: ${(props) => props.theme.text};

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const Subheader = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  color: ${(props) => props.theme.secondaryText};

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
    margin-bottom: 3rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 3rem;
  }
`;

const ServiceCard = styled.div`
  background-color: ${(props) => props.theme.backgroundCala};
  border-radius: 15px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border: 10px solid ${(props) => props.theme.cardBorderline};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    padding: 2rem;
    border-width: 15px;

    &:nth-child(1) {
      grid-column: span 2;
    }

    &:nth-child(4) {
      grid-column: span 2;
    }
  }

  @media (min-width: 1024px) {
    border-width: 20px;
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: ${(props) => props.theme.accent};
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const ServiceTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.text};

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ServiceDescription = styled.p`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.secondaryText};
  font-size: 0.9rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const VisitorSection = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: ${(props) => props.bgColor};
  border-radius: 20px;
  text-align: center;
  transition: background-color 0.5s ease;
  border: 10px solid ${(props) => props.theme.cardBorderline};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    margin: 3rem 0;
    padding: 2rem;
    border-width: 15px;
  }

  @media (min-width: 1024px) {
    border-width: 20px;
  }
`;

const VisitorCount = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.text};
  margin: 1rem 0;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const ChartContainer = styled.div`
  height: 150px;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    height: 175px;
    margin-top: 2rem;
  }

  @media (min-width: 1024px) {
    height: 200px;
  }
`;

const TotalVisitorSection = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.backgroundCala};
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 15px ${(props) => props.theme.boxShadow};
  border: 10px solid ${(props) => props.theme.cardBorderline};

  @media (min-width: 768px) {
    margin: 3rem 0;
    padding: 2rem;
    border-width: 15px;
  }

  @media (min-width: 1024px) {
    border-width: 20px;
  }
`;

const TotalVisitorCount = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.accent};
  margin: 1rem 0;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const ProfilesSection = styled.div`
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.accent};
    transform: translateY(-5px);
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const EducationSection = styled.div`
  margin-bottom: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border: 10px solid ${(props) => props.theme.cardBorderline};

  @media (min-width: 768px) {
    margin-bottom: 3rem;
    border-width: 15px;
  }

  @media (min-width: 1024px) {
    border-width: 20px;
  }
`;

const EducationItem = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.backgroundCala};
  border-radius: 10px;
  transition: background-color 0.3s ease;
  box-shadow: 0 5px 15px ${(props) => props.theme.boxShadow};
  border: 5px solid ${(props) => props.theme.cardBorderline};

  &:hover {
    background-color: ${(props) => props.theme.backgroundHover};
  }

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
    padding: 1.5rem;
    border-width: 7px;
  }

  @media (min-width: 1024px) {
    border-width: 10px;
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.backgroundCala};
  border-radius: 15px;
  box-shadow: 0 5px 15px ${(props) => props.theme.boxShadow};
  border: 10px solid ${(props) => props.theme.cardBorderline};

  @media (min-width: 768px) {
    margin-top: 3rem;
    padding: 2.5rem;
    border-width: 15px;
  }

  @media (min-width: 1024px) {
    padding: 3rem;
    border-width: 20px;
  }
`;

const CTAButton = styled(Link)`
  background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.buttonText};
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.accentHover};
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
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
            <BackToHome to="/">
              <FaArrowLeft /> Back To Home
            </BackToHome>
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
