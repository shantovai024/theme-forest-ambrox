import React from 'react';
import { Fade } from 'react-reveal';
import ContactForm from './ContactForm';

const Contact = () => {

    return (
        <>
            <div name="contact" className="contact-area shape-less default-padding overflow-hidden">
                <h2 className="text-shade">Contact</h2>
                <div className="container">
                    <div className="contact-content">
                        <div className="row align-center">
                            <div className="col-lg-7 contact-form-box mb-md-50 mb-xs-50">
                                <div className="form-box">
                                    <h2>Let's talk?</h2>
                                    <p>
                                        It's all about the humans behind a brand and those experiencing it, br we're right there. In the middle performance quick.
                                    </p>
                                    <ContactForm />
                                </div>
                            </div>

                            <div className="col-lg-4 offset-lg-1 info">
                                <div className="content">
                                    <ul>
                                        <Fade bottom delay={200}>
                                            <li className="contact-info-list">
                                                <div className="icon">
                                                    <i className="ri-mail-open-line"></i>
                                                </div>
                                                <div className="info">
                                                    <p>Our Email</p>
                                                    <h5>
                                                        <a href="mailto:info@validtheme.com">info@validtheme.com</a> <br />
                                                        <a href="mailto:support@softar.com">support@softar.com</a>
                                                    </h5>
                                                </div>
                                            </li>
                                        </Fade>
                                        <Fade bottom delay={400}>
                                            <li className="contact-info-list ">
                                                <div className="icon">
                                                    <i className="ri-map-pin-line"></i>
                                                </div>
                                                <div className="info">
                                                    <p>Address</p>
                                                    <h5>
                                                        22 Baker Street, <br /> London, United Kingdom, <br /> W1U 3BW
                                                    </h5>
                                                </div>
                                            </li>
                                        </Fade>
                                        <Fade bottom delay={600}>
                                            <li className="contact-info-list ">
                                                <div className="icon">
                                                    <i className="ri-customer-service-line"></i>
                                                </div>
                                                <div className="info">
                                                    <p>Phone</p>
                                                    <h5>
                                                        <a href="tel:+4733378901">+44-20-7328-4499</a> <br />
                                                        <a href="tel:+4733378901">+99-34-8878-9989</a>
                                                    </h5>
                                                </div>
                                            </li>
                                        </Fade>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;