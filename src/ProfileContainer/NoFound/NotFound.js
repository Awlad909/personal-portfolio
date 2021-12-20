import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
import image from '../../images/page-NotFound.jpg';

const NotFound = () => {
    return (
        <div><br /><br />
            <h1 className='text-center fs-1'>Oops..! 404 Page Not Found</h1>
            <p className='text-center'>Looks like you come to wrong page on our server</p><br /><br />
            <div className='pageNotFound'>
                <img src={image} alt="" />
            </div><br /><br /><br />
            <Link to="/"><button className="button">Go Back</button></Link><br /><br /><br />
        </div>
    );
};

export default NotFound;