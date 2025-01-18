import React, { useState, useEffect } from 'react';
import ProjectCard from './component/ProjectCard';
import { useSwipeable } from 'react-swipeable';

const Projects = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Simulate card load delay
    const timer = setTimeout(() => {
      setLoaded(true); // Set loaded to true after delay
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  const projectData = [
    {
      Title: "Cybersecurity Portal",
      desc: "A comprehensive AI-driven tool designed to predict and mitigate cybersecurity threats. This project utilized IBM Watson's AI services for advanced threat analysis and employed Flask as the backend framework for seamless server management. The tool integrated real-time monitoring capabilities, allowing organizations to proactively safeguard their systems from potential vulnerabilities.",
      technologies: ['IBM', 'AI and ML', 'Flask']
    },
    {
      Title: "Real Estate Dashboard",
      desc: "An analytical dashboard created to visualize property pricing trends and market fluctuations. Leveraging Python for data cleaning and analysis, this project transformed raw data into actionable insights. Advanced charting libraries like Matplotlib and Seaborn were used for in-depth visualization, while Excel provided a user-friendly interface for interactive exploration.",
      technologies: ['Python', 'Excel', 'Matplotlib']
    },
    {
      Title: "Cloud API Gateway",
      desc: "A robust solution integrating AWS Cloud Services to streamline third-party API deployments. This project utilized AWS API Gateway for scalable API management and AWS Lambda for serverless execution. With Flask as the backend framework, the gateway facilitated seamless communication between external services and cloud resources, enhancing system efficiency and reliability.",
      technologies: ['IBM', 'Flask', 'AWS']
    },
    {
      Title: "Power BI Automation",
      desc: "Cybersecurity Portal: AI tool for predicting security threats and server managemen Cybersecurity Portal: AI tool for predicting security threats and server management.Cybersecurity Portal: AI tool for predicting security threats and server management.Cybersecurity Portal: AI tool for predicting security threats and server management.",
      technologies: ['Power BI', 'Power App', 'Power Automate']
    },
    {
      Title: "Cognitive Assistant Development",
      desc: "Developed an advanced Cognitive Assistant leveraging AI and ML algorithms, including NLP and pattern recognition. This project integrated cognitive computing frameworks to deliver human-level language responses, enabling seamless and effective communication between systems and users.",
      technologies: ['Python', 'AI and ML', 'Flask']
    },
    {
      Title: "Interactive Data Manipulation Platform",
      desc: "Utilized Power BI and Power Apps to craft dynamic dashboards with seamless data input via custom forms. This platform automated workflows using Power Automate, reducing manual effort and improving data management efficiency.",
      technologies: ['Power BI', 'Power App', 'Power Automate']
    }
  ];

  const projectsPerPage = 3;
  const totalPages = Math.ceil(projectData.length / projectsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projectData.slice(startIndex, endIndex);

  // Swipeable settings to detect right swipe and go to the next page
  const swipeHandlers = useSwipeable({
    onSwipedRight: () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1); // Previous page
      }
    },
    onSwipedLeft: () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1); // Next page
      }
    },
  });

  return (
    <>
      <div className="ProjectParent" id='Projects'>
        <div className="ProjectTitle">
          <div className="ProjectTitleText">Projects</div>
          <div className="AllProjectButton">All Projects</div>
        </div>
        <div className="ProjectShowcase">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              Title={project.Title}
              desc={project.desc}
              technologies={project.technologies}
              cardLoaded={loaded}
            />
          ))}
        </div>
      </div>

      <div className="ProjectMobileParentDiv" id='Projectss'>
        <div className="ProjectMobileDetails" {...swipeHandlers}>
          <div className="ProjectMobileTitleDiv">
            <div>Projects</div>
            <div className="AllProjectMobileButton">All Projects</div>
          </div>
          <div className="ProjectMobileShowcase">
            {currentProjects.map((project, index) => (
              <ProjectCard
                key={index}
                Title={project.Title}
                desc={project.desc}
                technologies={project.technologies}
                cardLoaded={loaded}
              />
            ))}
          </div>

          {/* Dot Pagination */}
          <div className="dot-pagination">
            {[...Array(totalPages)].map((_, index) => (
              <span
                key={index}
                className={`dot ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(index + 1)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
