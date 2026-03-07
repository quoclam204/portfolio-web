import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import commerceImg from "../../assets/Projects/commerce.png";
import trendyframeImg from "../../assets/Projects/trendyframe.png";
import chattingAppImg from "../../assets/Projects/chatting-app.png";
import techgearshopImg from "../../assets/Projects/techgearshop.png";


export default function Projects(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const projectsData = [
        {
            id: 1,
            name: "E-Commerce Da Lat",
            image: commerceImg,
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            codeUrl: "https://github.com/quoclam204/DoAnCoSoMVC",
            liveUrl: "https://yourproject.com",
            description: "A full-stack e-commerce platform with shopping cart and payment integration"
        },
        {
            id: 2,
            name: "TrendyFrame",
            image: trendyframeImg,
            technologies: ["React", "Firebase", "Material-UI"],
            codeUrl: "https://github.com/quoclam204/do-an-chuyen-nganh",
            liveUrl: "https://taskapp.com",
            description: "A collaborative task management application with real-time updates"
        },
        {
            id: 3,
            name: "Chatting App",
            image: chattingAppImg,
            technologies: ["JavaScript", "API", "CSS3", "HTML5"],
            codeUrl: "https://github.com/quoclam204/Chatting-app",
            liveUrl: "https://weather-dashboard.com",
            description: "Real-time weather information with interactive maps and forecasts"
        },
        {
            id: 4,
            name: "TechGearShop",
            image: techgearshopImg,
            technologies: ["ASP.NET MVC", "C#", "Bootstrap 5", "JavaScript", "SCSS"],
            codeUrl: "https://github.com/quoclam204/TechGearShop",
            liveUrl: "https://techgearshop.com",
            description: "E-commerce platform for tech products built with ASP.NET MVC architecture"
        },
        {
            id: 5,
            name: "Task Automation Tool",
            image: techgearshopImg,
            technologies: ["Python", "Automation", "API"],
            codeUrl: "https://github.com/yourusername/automation-tool",
            liveUrl: "https://automation-tool.com",
            description: "Automated workflow tool to streamline daily tasks and improve productivity"
        },
        {
            id: 6,
            name: "Data Processing Pipeline",
            image: commerceImg,
            technologies: ["ETL", "Database", "Cloud"],
            codeUrl: "https://github.com/yourusername/data-pipeline",
            liveUrl: "https://data-pipeline.com",
            description: "Scalable data processing pipeline for ETL operations and analytics"
        },
    ];

    return (
        <div className="fade-in" id={props.id || ""}>
            <ScreenHeading
                title={"Projects"}
                subHeading={"My Recent Works"}
            />
            <section className="projects-section">
                <div className="container">
                    <div className="projects-grid">
                        {projectsData.map((project) => (
                            <div className="project-item" key={project.id}>
                                <div className="project-image">
                                    <img src={project.image} alt={project.name} />
                                    <div className="project-overlay">
                                        <div className="project-info">
                                            <h3 className="project-name">{project.name}</h3>
                                            <p className="project-description">{project.description}</p>
                                            <div className="project-technologies">
                                                {project.technologies.map((tech, index) => (
                                                    <span key={index} className="tech-badge">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="project-buttons">
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-live"
                                                >
                                                    <i className="fa fa-external-link"></i> View
                                                </a>
                                                <a
                                                    href={project.codeUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-code"
                                                >
                                                    <i className="fa fa-code"></i> Code
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
