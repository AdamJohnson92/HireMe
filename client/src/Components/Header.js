import React from "react";
import logo from "../assets/HireMe.png";
import "../App.css";
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

export default function Header() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
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
            <div>
                {Auth.loggedIn() ? (
                    <>
                        <Link className="btn btn-lg btn-info m-2" to="/me">
                            {Auth.getProfile().data.username}'s profile
                        </Link>
                        <button className="custom-btn" onClick={logout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link className="custom-btn" to="/login">
                            Login
                        </Link>
                        <Link className="custom-btn" to="/signup">
                            Signup
                        </Link>
                    </>
                )}
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