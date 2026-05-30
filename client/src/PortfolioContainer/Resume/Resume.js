import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  const { t } = useTranslation();
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});
  const containerRef = useRef(null);

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: t("resume.education"), logoSrc: "education.svg" },
    { label: t("resume.workHistory"), logoSrc: "work-history.svg" },
    // TODO: Thêm phần mới thay thế Programming Skills (ví dụ: Certifications, Languages, Awards)
    // { label: "Certifications", logoSrc: "certifications.svg" },
    // { label: "Languages", logoSrc: "languages.svg" },
    // TODO: Thêm phần mới thay thế Projects (đã có trang Projects riêng)
    // { label: "Awards", logoSrc: "awards.svg" },
    { label: t("resume.interests"), logoSrc: "interests.svg" },
  ];

  /* TODO: THÊM DỮ LIỆU MỚI THAY THẾ Programming Skills và Projects
   * Gợi ý:
   * 1. Certifications (Chứng chỉ)
   * 2. Languages (Ngôn ngữ: Tiếng Việt, Tiếng Anh)
   * 3. Awards & Achievements (Giải thưởng)
   * 4. Volunteer Experience (Hoạt động tình nguyện)
   */

  // COMMENTED OUT - Đã có trang Skills riêng
  // const programmingSkillsDetails = [
  //   { skill: "JavaScript", ratingPercentage: 85 },
  //   { skill: "React JS", ratingPercentage: 85 },
  //   { skill: "React Native", ratingPercentage: 85 },
  //   { skill: "Express JS", ratingPercentage: 89 },
  //   { skill: "Node JS", ratingPercentage: 89 },
  //   { skill: "Mongo Db", ratingPercentage: 70 },
  //   { skill: "Core Java", ratingPercentage: 80 },
  //   { skill: "HTML", ratingPercentage: 80 },
  //   { skill: "CSS", ratingPercentage: 80 },
  // ];

  // COMMENTED OUT - Đã có trang Projects riêng
  // const projectsDetails = [
  //   {
  //     title: "Personal Portfolio Website",
  //     duration: { fromDate: "2020", toDate: "2021" },
  //     description:
  //       "A Personal Portfolio website to showcase all my details and projects at one place.",
  //     subHeading: "Technologies Used: React JS, Bootsrap",
  //   },
  //   {
  //     title: "Mobile E-shop ",
  //     duration: { fromDate: "2020", toDate: "2021" },
  //     description:
  //       "An ecommerce application designed to sell products online wth payment system integration",
  //     subHeading:
  //       "Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.",
  //   },
  //   {
  //     title: "Ecommerce Website ",
  //     duration: { fromDate: "2020", toDate: "2021" },
  //     description:
  //       "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
  //     subHeading:
  //       "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
  //   },
  // ];

  // VÍ DỤ: Thêm dữ liệu Certifications
  // const certificationsDetails = [
  //   {
  //     title: "Microsoft Certified: Azure Fundamentals",
  //     date: "2024",
  //     description: "Certification in cloud computing fundamentals",
  //   },
  // ];

  // VÍ DỤ: Thêm dữ liệu Languages
  // const languagesDetails = [
  //   { language: "Vietnamese", level: "Native" },
  //   { language: "English", level: "Professional Working Proficiency" },
  // ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={t("resume.eduSchool")}
        subHeading={t("resume.eduDegree")}
        fromDate={"2022"}
        toDate={"2027"}
      />

    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={t("resume.workTitle")}
          fromDate={"2023"}
          toDate={"Present"}
        />

        <div className="experience-description">
          <span className="resume-description-text">
            {t("resume.workDesc1")}
          </span>
        </div>

        <div className="experience-description">
          <span className="resume-description-text">
            {t("resume.workDesc2")}
          </span>
          <br />
          <span className="resume-description-text">
            {t("resume.workDesc3")}
          </span>
          <br />
          <span className="resume-description-text">
            {t("resume.workDesc4")}
          </span>
          <br />
          <span className="resume-description-text">
            {t("resume.workDesc5")}
          </span>
          <br />
          <span className="resume-description-text">
            {t("resume.workDesc6")}
          </span>
          <br />
          <span className="resume-description-text">
            {t("resume.workDesc7")}
          </span>
        </div>
      </div>
    </div>,

    /* TODO: THÊM PHẦN MỚI Ở ĐÂY (thay thế Programming Skills & Projects) */

    // VÍ DỤ: Certifications Section
    // <div className="resume-screen-container" key="certifications">
    //   {certificationsDetails.map((cert, index) => (
    //     <ResumeHeading
    //       key={index}
    //       heading={cert.title}
    //       description={cert.description}
    //       fromDate={cert.date}
    //       toDate={""}
    //     />
    //   ))}
    // </div>,

    // VÍ DỤ: Languages Section  
    // <div className="resume-screen-container" key="languages">
    //   {languagesDetails.map((lang, index) => (
    //     <div className="skill-parent" key={index}>
    //       <div className="heading-bullet"></div>
    //       <span>{lang.language}</span>
    //       <span className="skill-percentage">{lang.level}</span>
    //     </div>
    //   ))}
    // </div>,

    /* COMMENTED OUT - PROGRAMMING SKILLS (Đã có trang Skills riêng) */
    // <div
    //   className="resume-screen-container programming-skills-container"
    //   key="programming-skills"
    // >
    //   {programmingSkillsDetails.map((skill, index) => (
    //     <div className="skill-parent" key={index}>
    //       <div className="heading-bullet"></div>
    //       <span>{skill.skill}</span>
    //       <div className="skill-percentage">
    //         <div
    //           style={{ width: skill.ratingPercentage + "%" }}
    //           className="active-percentage-bar"
    //         ></div>
    //       </div>
    //     </div>
    //   ))}
    // </div>,

    /* COMMENTED OUT - PROJECTS (Đã có trang Projects riêng) */
    // <div className="resume-screen-container" key="projects">
    //   {projectsDetails.map((projectsDetails, index) => (
    //     <ResumeHeading
    //       key={index}
    //       heading={projectsDetails.title}
    //       subHeading={projectsDetails.subHeading}
    //       description={projectsDetails.description}
    //       fromDate={projectsDetails.duration.fromDate}
    //       toDate={projectsDetails.duration.toDate}
    //     />
    //   ))}
    // </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading={t("resume.intMusic")}
        description={t("resume.intMusicDesc")}
      />
      <ResumeHeading
        heading={t("resume.intRest")}
        description={t("resume.intRestDesc")}
      />
      <ResumeHeading
        heading={t("resume.intCode")}
        description={t("resume.intCodeDesc")}
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    // Lấy chiều cao thực tế của container thay vì hard-code 360
    let offsetHeight = 360;
    if (containerRef.current) {
      const container = containerRef.current.querySelector('.resume-screen-container');
      if (container) {
        offsetHeight = container.offsetHeight;
      }
    }

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        ref={containerRef}
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={t("resume.title")} subHeading={t("resume.subHeading")} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
