import React from "react";
import "./WebsiteFooter.css";

export default function WebsiteFooter() {
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
                    <h3>Nguyen Le Quoc Lam</h3>
                    <p>Backend Web Developer</p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a onClick={() => scrollToSection("Home")}>Home</a></li>
                        <li><a onClick={() => scrollToSection("AboutMe")}>About</a></li>
                        <li><a onClick={() => scrollToSection("Resume")}>Resume</a></li>
                        <li><a onClick={() => scrollToSection("Projects")}>Projects</a></li>
                        <li><a onClick={() => scrollToSection("ContactMe")}>Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Connect With Me</h4>
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
                <p>&copy; {new Date().getFullYear()} Nguyen Le Quoc Lam. All rights reserved.</p>
            </div>
        </footer>
    );
}
