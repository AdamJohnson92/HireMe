import React from "react";
import logo from "../assets/HireMe.png";
import "../App.css";

export default function Header() {
    return (
        <header className="header">
            {/* Logo */}
            <div className="logo">
                <img src={logo} width="205" height="200" alt="HireMe Company Logo" />
            </div>

            {/* Slogan */}
            <div className="slogan" style={{
                fontSize: '28px', fontWeight: 'bold', fontStyle: 'italic',
                position: 'absolute', top: '50%;', left: '40%', width: '100%;'
            }}>
                <p>Find Your Perfect Candidate!</p>
            </div>
            {/* Menu Bar */}
            <div className="menu-bar">
                <div className="menu-container">
                    <span style={{ fontSize: '14px' }}>Trusted by:</span> &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="https://students.asu.edu/employment/search" style={{ fontWeight: 'bold' }}>
                        <i className="fa fa-asu"></i> ASU
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a href="https://careernetwork.2u.com/job-board/" style={{ fontWeight: 'bold' }}>
                        <i className="fa fa-edX"></i> edX
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a href="https://www.coursera.support/s/career-center?language=en_US" style={{ fontWeight: 'bold' }}>
                        <i className="fa fa-coursera"></i> coursera
                    </a>
                    &nbsp;&nbsp;&nbsp;
                </div>
            </div>
        </header>
    );
}