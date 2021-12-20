import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar variant="dark" sticky="top" collapseOnSelect expand="lg" className='navigation'>
                <Container
                  style={{width:'100%'}}>
                    <Navbar.Brand href="#home">
                        <img style={{width:'100px', height:'40px'}} className="mx-3" src={logo} alt="" />
                    </Navbar.Brand>
                <Navbar.Toggle className="bg-dark" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home#home" className="text-white fs-5">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about#about" className="text-white fs-5">About</Nav.Link>
                        <Nav.Link as={Link} to="/skill#skill" className="text-white fs-5">Skills</Nav.Link>
                        <Nav.Link as={Link} to="/project#project" className="text-white fs-5">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/blog#blog" className="text-white fs-5">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/contact#contact" className="text-white fs-5">Contact Us</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>
    );
};

export default Header;