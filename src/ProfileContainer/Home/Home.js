import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Profile from '../Profile/Profile';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div id="home">
            <Profile></Profile>
            <About></About>
            <Skill></Skill>
            <Projects></Projects>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;