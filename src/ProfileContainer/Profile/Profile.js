import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

const Profile = () => {
    return (
        <div>
            <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="cols">
                        <div className="cols-icon">
                        <a href="https://www.facebook.com/Awladul/ "target="_blank">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                        <a href="https://www.google.com "target="_blank">
                            <i className="fab fa-google-plus-square"></i>
                        </a>
                        <a href="https://www.instagram.com/mohammad_awlad_909/ "target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCAu6Iy4U1jcYLaLAU7UlqyQ  "target="_blank">
                            <i className="fab fa-youtube-square"></i>
                        </a>
                        <a href="https://twitter.com/AwladulS "target="_blank">
                            <i className="fab fa-twitter-square"></i>
                        </a>
                        </div>
                    </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello, I'M <span className="highlighted-text fs-1">Awlad Hossain</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        {" "}
                        <h1>
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Front End Developer",
                                2000,
                                "MERN Stack Developer",
                                2000,
                                "React JS",
                                2000,
                                "Web Designer",
                                2000,
                            ]}
                            />
                        </h1>
                        <span className="profile-role-tagline">
                            Knack of building applications with front and MERN stack operations.
                        </span>
                    </span>
                </div>
                <div className="profile-options">
                    <a href="https://docs.google.com/document/d/1ZwEyq8aoeM5Tbw_T3VGlw07RUceLkVKPcKdV3P_UBqo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Hire Me</a>
                </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div> 
        </div>
    );
};

export default Profile;