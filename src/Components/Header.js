import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import ModalVideo from 'react-modal-video';
import { Link } from "react-scroll";
import logoIcon from '../assets/img/logo-icon.png'

const Header = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <MobileMenu />
            <header className="header-fixed">
                <div className="f-flex">
                    <div className="logo">
                        <Link spy={true} to="/"><img src={logoIcon} alt="Logo" /></Link>
                    </div>
                    <div className="menu">
                        <ul className="nav d-block">
                            <li>
                                <Link className="smooth-menu" spy={true} to="/">
                                    <i className="ri-home-smile-line"></i>
                                    <div className="menu-name">Home</div>
                                </Link>
                            </li>
                            <li>
                                <Link className="smooth-menu" spy={true} to="services">
                                    <i className="ri-settings-2-line"></i>
                                    <div className="menu-name">Services</div>
                                </Link>
                            </li>
                            <li>
                                <Link className="smooth-menu" spy={true} to="portfolio">
                                    <i className="ri-briefcase-4-line"></i>
                                    <div className="menu-name">Portfolio</div>
                                </Link>
                            </li>
                            <li>
                                <Link className="smooth-menu" spy={true} to="about">
                                    <i className="ri-user-3-line"></i>
                                    <div className="menu-name">About</div>
                                </Link>
                            </li>
                            <li>
                                <Link className="smooth-menu" spy={true} to="resume">
                                    <i className="ri-file-text-line"></i>
                                    <div className="menu-name">Resume</div>
                                </Link>
                            </li>
                            <li>
                                <Link className="smooth-menu" spy={true} to="contact">
                                    <i className="ri-chat-1-line"></i>
                                    <div className="menu-name">Contact</div>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="video">
                        <ModalVideo channel='youtube'
                            autoplay
                            isOpen={isOpen}
                            videoId="5qRsGTuy3Rs"
                            onClose={() => setOpen(false)} />
                        <Link onClick={() => setOpen(true)}
                            className="popup-youtube video-play-button theme">
                            <i className="ri-play-line"></i>
                        </Link>
                    </div>

                </div>
            </header>
        </>
    );
};

export default Header;