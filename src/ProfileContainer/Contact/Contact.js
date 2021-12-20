import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact">
            <div className="contact-container">
                <div className="contact-info"><br /><br /><br />
                    <h1>Get In Touch...!</h1>
                    <p>Feel free to contact me</p>
                </div><br /><br />
                <div className="contact-section">
                    <div className="contact-right">
                        <div className="contact-right-info">
                            <div className="contact-right-address">
                                <div>
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h3>Address</h3>
                                    <p>Tejgaon Farm, Dhaka, Bangladesh</p>
                                </div>
                            </div>
                            <div className="contact-right-email">
                                <div>
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <h3>Email</h3>
                                    <p>mdawladbdinfo@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact-right-phone">
                                <div>
                                    <i class="fas fa-phone-alt"></i>
                                </div>
                                <div>
                                    <h3>Phone</h3>
                                    <p>+880-1725385909</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-left">
                        <div className="contact-left-info"><br />
                            <h2>Text Me</h2><br />
                            <div>
                                <input type="text" placeholder='Your Name' /><br /><br />
                                <input type="text" placeholder='Your Email'/><br /><br />
                                <input type="text" placeholder='Subject'/>
                            </div><br /><br />
                            <textarea name="" id="" cols="30" rows="6" placeholder='Message'></textarea><br /><br />
                            <div className='contact-btn'>
                                <button>Send</button>
                            </div><br />
                        </div>
                    </div>
                </div><br /><br />
            </div>
        </div>
    );
};

export default Contact;