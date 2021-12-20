import React from 'react';
import './About.css';
import image from '../../images/awlad.png'
import CV from '../../images/Awlad-Resume.png';


const About = () => {
    return (
        <div id="about">
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-info">
                <div className='about-img'>
                    <img style={{width:"400px", height:"400px"}} src={image} alt="" />
                </div>
                <div className="about-desc">
                <h2>I'm Awlad and I'm a <span className='type-cursor'>
                        Front-End Developer                
                    </span> </h2>
                    <p>I'm Awlad and I'm a Front-End Deve|
                    I am up for building your desired website, blending my experience with technology and style.I am an enthusiastic person who learn new tools to enhance capability.</p>
                    <p>Providing interactive frontend development solution to build custom, robust and secure applications in all verticals using latest tools and platforms for designing and developing powerful user-friendly interfaces.</p>
                    <a href={CV} download >Download CV <i className="fas fa-download"></i></a>
                </div>
            </div>
            <br /><br /><br /><br />
        </div>
    );
};

export default About;