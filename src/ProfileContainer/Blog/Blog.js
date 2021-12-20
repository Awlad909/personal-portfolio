import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div id='blog'>
           <div className='blog'>
                <div className="blog-container">
                    <h1>My Blogs</h1>
                </div><br /><br /><br /><br /><br /><br />
                <div className="blog-card">
                    <div className='blog-card-box'><br />
                        <i className="fas fa-paint-brush"></i><br /><br />
                        <h1 className='text-center text-white'>Web Design</h1>
                        <p className='text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repudiandae sapiente, atque doloremque similique numquam.</p>
                    </div>
                    <div className='blog-card-box'><br />
                        <i className="fas fa-code"></i><br /><br />
                        <h1 className='text-center text-white'>Front-End Developer</h1><br />
                        <p className='text-center text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quas incidunt neque, quaerat nihil non!</p>
                    </div>
                    <div className='blog-card-box'><br />
                        <i className="fas fa-chart-line text-center"></i><br /><br />
                        <h1 className='text-center text-white'>Wordpress</h1><br />
                        <p className='text-center text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, in alias optio vitae quod quo.</p>
                    </div>
                </div><br /><br />
            </div>
        </div>
    );
};

export default Blog;