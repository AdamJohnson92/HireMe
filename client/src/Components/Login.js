import React, { useState, useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import "../App.css";
import LoginCandidate from './LoginCandidate'
import LoginEmployer from "./LoginEmployer";


export default function Login() {


    return (
        <main className="main">
            {/* Introduction paragraph */}
            <div className="background-image">
                <div className="introduction-container">
                    <p className="introduction">
                        <span className="introduction-title">Welcome to Hire Me!</span>
                        <br />
                        <br />
                        Your platform for connecting with the perfect job candidates. Hire Me empowers employers to effortlessly search and connect with active job candidates. Employers can easily browse candidate profiles, access their resumes, and identify ideal candidates for their current job openings. Hire Me simplifies the hiring process, providing employers with an efficient way to discover and connect with potential candidates, while offering job seekers a dynamic platform to showcase their skills, ready to be discovered by eager employers.
                        <br />
                        <br />
                        So, what are you waiting for?! Join Hire Me today and start connecting with your ideal candidates.
                        <br />
                        <br />
                        <a href="path_to_signup_js">Signup Now!</a>
                    </p>
                </div>
            </div>


            {/* Login forms */}
            <div className="login-container">
                <LoginCandidate></LoginCandidate>
                <LoginEmployer></LoginEmployer>
            </div>
        </main>
    );
}