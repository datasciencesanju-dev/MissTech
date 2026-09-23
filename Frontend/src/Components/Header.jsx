import React, { useState } from "react";
import './Header.css';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
    const navigate = useNavigate();
    const [isLogin, setisLogin] = useState(false);
    const [isSignUp, setisSignUp] = useState(false);
    const [isEnquiry, setisEnquiry] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogin = () => navigate('/login');
    const handleSignUp = () => navigate('/signup');
    const handleEnquiry = () => navigate('/enquiry');

    return (
        <header className="header-outer">
            <div className="header-logo" onClick={() => navigate('/')}>
                <img src="/logo.png" alt="MissTech Logo" />
            </div>

            <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>

            <nav className={`header-menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <NavLink to='/' className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`} onClick={() => setMenuOpen(false)}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/About' className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`} onClick={() => setMenuOpen(false)}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Blog' className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`} onClick={() => setMenuOpen(false)}>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`} onClick={() => setMenuOpen(false)}>Contact us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Courses' className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`} onClick={() => setMenuOpen(false)}>Courses</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Placements' className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`} onClick={() => setMenuOpen(false)}>Placements</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Training-modes' className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`} onClick={() => setMenuOpen(false)}>Training Modes</NavLink>
                    </li>
                </ul>
            </nav>

            <div className="student_profile">
                <div>
                    {isLogin ? <IoPerson /> : <button onClick={handleLogin} className="header-login-btn">Login</button>}
                </div>
                <div>
                    {isSignUp ? <IoPerson /> : <button onClick={handleSignUp} className="header-SignUp-btn">SignUp</button>}
                </div>
                <div>
                    {isEnquiry ? <IoPerson /> : <button onClick={handleEnquiry} className="header-enquiry-btn">Enquire Now</button>}
                </div>
            </div>
        </header>
    )
}

export default Header
