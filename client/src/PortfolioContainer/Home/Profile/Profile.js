import React from "react";
import Typical from "react-typical";
import { useTranslation } from "react-i18next";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  const { t } = useTranslation();
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/quoclam.nguyen.52643/">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://github.com/quoclam204/">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.linkedin.com/in/nguyen-le-quoc-lam-8b68943a3/">
                <i className="fa fa-linkedin-square" />
              </a>
              <a href="https://www.instagram.com/q_lam204?igsh=MWcwbXdndTBubHhkeA==/">
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              {t("profile.hello")} <span className="highlighted-text">Nguyen Le Quoc Lam</span>
            </span>
          </div>
          <div className="profile-details-role">
            <h1 className="primary-text">
              <Typical
                loop={Infinity}
                steps={[
                  "Web Engineer 🌐",
                  1000,
                  "Backend Developer 💻",
                  1000,
                ]}
              />
            </h1>

            <span className="profile-role-tagline">
              {t("profile.tagline")}
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > {t("profile.hireMe")} </button>
            <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
              <button className="btn highlighted-btn">{t("profile.getResume")}</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
