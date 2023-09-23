import React, { useState, useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import "../App.css";
import logo from "../assets/HireMe.png";
import backgroundImage from "../assets/loginpage.png";
import employer from "../assets/employer.png";
import candidate from "../assets/candidate.png";


export default function Login() {

    const { setUserEmail } = useContext(LoginContext)



    const [emailForm, setEmailForm] = useState('')
    const [passwordForm, setPasswordForm] = useState('')


    const handleInputChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value


        if (inputName === 'email') {
            setEmailForm(inputValue)
            console.log(inputValue)
        } else if (inputName === 'password') {
            setPasswordForm(inputValue)
            console.log(inputValue)
        }
    }

    const handleSubmit = (event) => {
        const validEmailRegex = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)

        const emailCheck = validEmailRegex.test(emailForm)
        if (emailCheck === false) {
            window.alert('Not a valid email address')
        }
        if (!emailForm || !passwordForm) {
            window.alert('All three fields must be complete.')
        }
        event.preventDefault()

        if (emailCheck === true && emailForm && passwordForm) {
            window.alert('Logging in Test')

            setEmailForm('')
            setPasswordForm('')
        }
    };

    const footerStyle = {
        backgroundColor: "#333",
        color: "white",
        fontSize: "12px",
        textAlign: "center",
        padding: "5px",
        position: "fixed",
        bottom: "0",
        width: "100%",
        zIndex: "9999", 
    };

    return (
        <>
            <header className="header">
                {/* Logo and dropdown menu */}
                <div className="logo">
                    <img src={logo} width="205" height="200" alt="HireMe Company Logo" />
                </div>

                <p className="slogan" style={{ fontWeight: 'bold', fontSize: '30px' }}>Find Your Perfect Candidate!</p>

                <div className="menu-container">
                    <div className="dropdown">
                        <button className="dropbtn">Menu</button>
                        <div className="dropdown-content">
                            <a href="">Candidate Login</a>
                            <a href="">Employer Login</a>
                            <a href="">Register Now</a>
                        </div>
                    </div>
                </div>
            </header>
            {/* Trusted by section */}
            <header className="menu-bar">
                Trusted by: &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://students.asu.edu/employment/search"><i className="fa fa-university" ></i> ASU</a> &nbsp;&nbsp;&nbsp;
                <a href="https://careernetwork.2u.com/job-board/"><i className="fa fa-university"></i> edX</a>&nbsp;&nbsp;&nbsp;
                <a href="https://www.coursera.support/s/career-center?language=en_US"><i className="fa fa-building"></i> coursera</a>&nbsp;&nbsp;&nbsp;
            </header>


            <main className="main">
                {/* Introduction paragraph */}
                <div className="background-image">
                    <div className="introduction-container" style={{ padding: '40px 0 0 0' }}>
                        <p className="introduction" style={{ fontSize: '16px', color: '#000', textAlign: 'justify', margin: '15px' }}>
                            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Welcome to HireMe!</span>
                            <br />
                            <br />
                            Your platform for connecting with the perfect job candidates. HireMe empowers employers to effortlessly search and connect with active job candidates. Employers can easily browse candidate profiles, access their resumes, and identify ideal candidates for their current job openings. HireMe simplifies the hiring process, providing employers with an efficient way to discover and connect with potential candidates, while offering job seekers a dynamic platform to showcase their skills, ready to be discovered by eager employers.
                            <br />
                            <br />
                            So, what are you waiting for?! Join HireMe today and start connecting with your ideal candidates.
                        </p>
                    </div>
                </div>

                <section className="login-section">
                    {/* Login form */}
                    <div className="login-form-container">
                        <form className="login-form" style={{ textAlign: 'left' }}>
                            {/* Email input */}
                            <label className="form-label" htmlFor="email">
                                Email:&nbsp;
                                <input
                                    className="form-box email-input"
                                    type="text"
                                    name="email"
                                    value={emailForm || ''}
                                    onChange={handleInputChange}
                                ></input>
                            </label>
                            <br />
                            {/* Password input */}
                            <label className="form-label" htmlFor="password">
                                Password:&nbsp;
                            </label>
                            <input
                                className="form-box password-input"
                                id="password-box"
                                type="password"
                                name="password"
                                value={passwordForm || ''}
                                onChange={handleInputChange}
                            ></input>
                            <br />
                            <div style={{ textAlign: 'center' }}>
                                <input
                                    className="custom-btn"
                                    type="submit"
                                    value="Submit"
                                    onClick={handleSubmit}
                                />
                            </div>                        </form>
                    </div>
                </section>
                {/* Two columns with images for reviews */}
                <section className="columns">
                    <div className="column">
                        <img src={employer} alt="Employer Review" width="300" height="250" />
                    </div>
                    <div className="column">
                        <img src={candidate} alt="Candidate Review" width="300" height="250" />
                    </div>
                </section>
            </main>


            {/* Locked Footer */}
            <div style={footerStyle}>
                &copy; {new Date().getFullYear()} HireMe. All Rights Reserved.
            </div>
        </>
    );
}