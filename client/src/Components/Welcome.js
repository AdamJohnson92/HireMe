import React from "react";
import "../App.css";
import candidate from "../assets/candidate.png";
import employer from "../assets/employer.png";

export default function Welcome() {
    return (
        <main className="main">
            {/* Introduction paragraph */}
            <div className="background-image">
                <div className="introduction-container">
                    <p className="introduction">
                        <span className="introduction-title">Welcome to Hire Me!</span>
                        <br />
                        <br />
                        Your platform for connecting with the perfect job candidates. Hire
                        Me empowers employers to effortlessly search and connect with active
                        job candidates. Employers can easily browse candidate profiles,
                        access their resumes, and identify ideal candidates for their
                        current job openings. Hire Me simplifies the hiring process,
                        providing employers with an efficient way to discover and connect
                        with potential candidates, while offering job seekers a dynamic
                        platform to showcase their skills, ready to be discovered by eager
                        employers.
                        <br />
                        <br />
                        So, what are you waiting for?!{" "}
                        <a href="/signup">Signup Now!</a>
                    </p>
                </div>
            </div>

            {/* Images */}
            <div className="image-container">
                <img
                    src={candidate}
                    alt="Candidate"
                    className="welcome-image"
                    width="300"
                    height="300"
                    style={{ marginTop: "50px" }} 

                />
                <img
                    src={employer}
                    alt="Employer"
                    className="welcome-image"
                    width="300"
                    height="300"
                    style={{ marginLeft: "125px", marginTop: "20px" }} 

                />
            </div>
        </main>
    );
}
