import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaYoutubeSquare} from "react-icons/fa"; 
import { MdWifiCalling3 } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="footer-main">
                <div className="foot-note">
                    <div className="left-first">
                        <img className="footer-logo" src="/logo.png" alt="logo" />
                        <span className="footer-title">MissTech</span>
                        <p className="footer-tagline">Your Future, Our Mission</p>
                    </div><br />
                    <p>We provide industry oriented training with 100% practical learning and placement assistance</p>
                    <div className="social-media">
                        <a href="#" aria-label="Facebook"><FaFacebook /></a>
                        <a href="#" aria-label="Instagram"><FaInstagramSquare /></a>
                        <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="#" aria-label="YouTube"><FaYoutubeSquare /></a>
                    </div>
                </div>
                <div className="foot-note">
                    <h2>Quick Links</h2><br />
                    <p><Link to='/' className="footer-link">Home</Link></p>
                    <p><Link to='/About' className="footer-link">About us</Link></p>
                    <p><Link to='/Blog' className="footer-link">Blog</Link></p>
                    <p><Link to='/Courses' className="footer-link">Courses</Link></p>
                    <p><Link to='/Placements' className="footer-link">Placements</Link></p>
                    <p><Link to='/Training-modes' className="footer-link">Training Modes</Link></p>
                    <p><Link to='/contact' className="footer-link">Contact us</Link></p>
                </div>
                <div className="foot-note">
                    <h2>Courses</h2><br />
                    <p>Full Stack Development</p>
                    <p>Python Programming</p>
                    <p>Web Development</p>
                    <p>Data Science</p>
                    <p>Digital Marketing</p>
                </div>
                <div className="foot-note">
                    <h2>Training Modes</h2><br />
                    <p>Online Live Training</p>
                    <p>Classroom Training</p>
                    <p>Weekend Batches</p>
                    <p>Corporate Training</p>
                </div>
                <div className="foot-note">
                    <h2>Contact Us</h2><br />
                    <p><MdWifiCalling3 /> +9190051#####</p>
                    <p><IoMdMail /> datasciencesanju@gmail.com</p>
                    <p><FiMapPin /> MissTech Institute, Kasya, Deoria</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2026 MissTech. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer
