import React from 'react';
import './Projects.css';
import image1 from '../../images/blog1.png';
import image2 from '../../images/blog2.png';
import image3 from '../../images/blog3.png';
import image4 from '../../images/blog4.png';
import image5 from '../../images/blog5.png';
import image6 from '../../images/blog6.png';

const Projects = () => {
    return (
        <div id="project"><br /><br />
            <div className='project'>
                <div className='project-section'>
                    <h1>My Projects</h1>
                </div><br /><br /><br /><br /><br />
                <div className="project-container">
                <div className='project-card'>
                    <img src={image1} alt="" /><br /><br />
                    <h1>Popular Tours</h1><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea aperiam id qui odio illum sunt voluptatum sed ratione aliquam nihil!</p>
                </div>
                <div className='project-card'>
                    <img width="350px" src={image2} alt="" /><br /><br />
                    <h1>Fake Store</h1><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti quae modi temporibus? Rerum facilis a nam, et deleniti esse?</p>
                </div>
                <div className='project-card'>
                    <img width="350px" src={image3} alt="" /><br /><br />
                    <h1>Leader Ship</h1><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur libero earum necessitatibus non. Hic corrupti error facere, cum magnam rem?</p>
                </div>
                <div className='project-card'>
                    <img width="350px" src={image4} alt="" /><br /><br />
                    <h1>Popular Services</h1><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto sit maxime nostrum dolor sunt deleniti porro eos non maiores?</p>
                </div>
                <div className='project-card'>
                    <img width="350px" src={image5} alt="" /><br /><br />
                    <h1>Bike Race</h1><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolorum tempora ea dolorem repellendus possimus soluta deleniti. Officiis, repudiandae doloremque?</p>
                </div>
                <div className='project-card'>
                    <img width="350px" src={image6} alt="" /><br /><br />
                    <h1>E-commerce Site</h1><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vitae eveniet enim, ducimus facilis aliquam! Debitis illo exercitationem tenetur iusto?</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;