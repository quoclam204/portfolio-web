import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    name: "I'm Quoc Lam",
    title: "Web Backend Developer",
    description:
      "Backend-focused developer with experience in ASP.NET MVC/Core and RESTful APIs. Skilled in Azure deployment, CI/CD with GitHub Actions, and expanding expertise in React and Node.js. Passionate about building efficient, scalable solutions.",
    email: "nguyenlequoclam@gmail.com",
    place: "Da Lat city, Vietnam",
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <h1 className="about-me-name">{SCREEN_CONSTANTS.name}</h1>
            <div className="about-me-title">
              <span>{SCREEN_CONSTANTS.title}</span>
            </div>
            <p className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </p>
            <div className="about-me-info">
              <div className="info-item">
                <span className="info-label">Email :</span>
                <span className="info-value">{SCREEN_CONSTANTS.email}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Place :</span>
                <span className="info-value">{SCREEN_CONSTANTS.place}</span>
              </div>
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                Hire Me
              </button>
              <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
