import React from "react";
import { useTranslation } from "react-i18next";
import "./WebsiteFooter.css";

export default function WebsiteFooter() {
    const { t } = useTranslation();
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="website-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>{t("footer.title")}</h3>
                    <p>{t("footer.subtitle")}</p>
                </div>

                <div className="footer-section">
                    <h4>{t("footer.quickLinks")}</h4>
                    <ul>
                        <li><a onClick={() => scrollToSection("Home")}>{t("nav.Home")}</a></li>
                        <li><a onClick={() => scrollToSection("AboutMe")}>{t("nav.AboutMe")}</a></li>
                        <li><a onClick={() => scrollToSection("Resume")}>{t("nav.Resume")}</a></li>
                        <li><a onClick={() => scrollToSection("Projects")}>{t("nav.Projects")}</a></li>
                        <li><a onClick={() => scrollToSection("ContactMe")}>{t("nav.ContactMe")}</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>{t("footer.connect")}</h4>
                    <div className="social-links">
                        <a href="https://www.facebook.com/quoclam.nguyen.52643/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-facebook-square" />
                        </a>
                        <a href="https://github.com/quoclam204/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github" />
                        </a>
                        <a href="https://www.linkedin.com/in/nguyen-le-quoc-lam-8b68943a3/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin-square" />
                        </a>
                        <a href="https://www.instagram.com/q_lam204?igsh=MWcwbXdndTBubHhkeA==/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-instagram" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} {t("footer.rights")}</p>
            </div>
        </footer>
    );
}
