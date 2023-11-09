import React, { useRef } from "react";
import "../App.css";
import candidate from "../assets/candidate.png";
import employer from "../assets/employer.png";
import welcomeVideo from "../assets/WelcomeHireMe.mp4";
import ClickHereImage from "../assets/ClickHere.png";

export default function Welcome() {
    const imageStyle = {
        border: "none",
        width: "150px",
        height: "auto",
        cursor: "pointer", 
        position: "absolute",
        bottom: "235px",
        right: "340px",
    };

    const videoRef = useRef(null);

    const handleImageClick = () => {
        // Check if the video is paused, and if so, play it; otherwise, pause it
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    return (
        <main className="main">
            <div className="introduction-container" style={{ marginBottom: "50px" }}>
                <h2 className="introduction-title" style={{ color: '#5271FF', marginBottom: "0px", fontWeight: "bold", marginLeft: "15px" }}>
                    Welcome to Hire Me!
                </h2>
                <p className="introduction" style={{ fontWeight: "bold", marginTop: "0px" }}>
                    <br />
                    Your platform for connecting with the perfect job candidates. Hire Me empowers employers to effortlessly search and connect with active job candidates. Employers can easily browse candidate profiles, access their resumes, and identify ideal candidates for their current job openings. Hire Me simplifies the hiring process, providing employers with an efficient way to discover and connect with potential candidates, while offering job seekers a dynamic platform to showcase their skills, ready to be discovered by eager employers.
                    <br />
                    <br />
                    So, what are you waiting for?{" "}
                    <a
                        href="/signup"
                        style={{
                            color: "#5271FF",
                            fontWeight: "bold",
                            textDecoration: "underline",
                        }}
                    >
                        Signup Now!
                    </a>
                </p>
                </div>
            <div className="image-container" style={{ marginRight: "300px" }}>
                <img
                    src={candidate}
                    alt="Candidate"
                    className="welcome-image"
                    width="300"
                    height="300"
                    style={{ marginRight: "30px" }}
                />
                <img
                    src={employer}
                    alt="Employer"
                    className="welcome-image"
                    width="300"
                    height="300"
                />
                <img
                    src={ClickHereImage}
                    alt="ClickHereImage"
                    style={imageStyle}
                    onClick={handleImageClick} // Handle click event
                />
                <video
                    ref={videoRef}
                    id="welcomeVideo"
                    src={welcomeVideo}
                    autoPlay
                    className="welcome-video"
                    width="400"
                    height="450"
                    style={{
                        position: "absolute",
                        bottom: "10px",
                        right: "10px",
                    }}
                ></video>
            </div>
        </main>
    );
}