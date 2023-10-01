import React from "react";
import { Link } from 'react-router-dom'; 
import logo from "../assets/HireMe.png";
import "../App.css";
import Auth from '../utils/auth';

export default function Header() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    const buttonStyle = {
        position: 'absolute',
        top: '10px',
        right: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    };

    const centeredText = {
        textAlign: 'center',
    };

    const sloganStyle = {
        fontWeight: 'bold',
        fontStyle: 'italic',
        width: '100%',
        textAlign: 'center',
        margin: '0 auto',
    };

    const mobileSloganStyle = {
        fontSize: '26px',
    };

    return (
        <header className="header">
            {/* Made the Logo as Link back to Home/Welcome page */}
            <Link to="/">
                <div className="logo">
                    <img src={logo} width="205" height="200" alt="HireMe Company Logo" />
                </div>
            </Link>

            {/* Slogan */}
            <div className="slogan" style={sloganStyle}>
                <p style={mobileSloganStyle}>Find Your Perfect Candidate!</p>
            </div>
            {/* Buttons */}
            <div style={buttonStyle}>
                {Auth.loggedIn() ? (
                    <>
                        <Link className="btn btn-lg btn-info m-2" to="/profile">
                            {Auth.getProfile().data.firstName}'s profile
                            {console.log(Auth.getProfile().data.firstName)}
                        </Link>
                        
                        <button className="custom-btn" onClick={logout} style={centeredText}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link className="custom-btn" to="/login" style={centeredText}>
                            Login
                        </Link>
                        <Link className="custom-btn" to="/signup" style={centeredText}>
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
                    <a href="https://www.linkedin.com/jobs/" style={{ fontWeight: 'bold' }}>
                        <i className="fa fa-linkedin"></i> LinkedIn
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a href="https://www.indeed.com/" style={{ fontWeight: 'bold' }}>
                        Indeed
                    </a>
                </div>
            </div>
        </header>

    );
}
