import React from 'react'
import Header from '../Components/Header'
import './CSS/About.css'
import Footer from '../Components/Footer'
import {
  FaLaptopCode,
  FaUserTie,
  FaBriefcase,
  FaCertificate,
  FaCalendarAlt,
  FaUsers,
  FaBullseye,
  FaEye,
  FaCheckCircle
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Header />
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="badge-tag">ABOUT MISSTECH</span>
          <h1>Empowering Careers Through <span className="highlight-text">Practical Tech Education</span></h1>
          <p>We bridge the gap between academic education and industry demands with hands-on, job-oriented training programs.</p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-image">
          <img src='/about1.png' alt="About MissTech" />
          <div className="exp-badge">
            <span className="exp-num">10+</span>
            <span className="exp-text">Years of Excellence</span>
          </div>
        </div>
        <div className="about-content">
          <h5>OUR STORY</h5>
          <h2>Dedicated to Building Modern Tech Leaders</h2>
          <p>
            MissTech is one of the premier IT training institutes dedicated to
            building successful careers in the software and technology industry.
          </p>
          <p>
            We strongly believe learning should be practical rather than theoretical.
            Our experienced mentors provide real-world projects, live interactive classes,
            and comprehensive placement support so that every student becomes industry-ready from day one.
          </p>
          <div className="about-points">
            <div className="point-item"><FaCheckCircle className="check-icon" /> 100% Practical & Project-based Curriculum</div>
            <div className="point-item"><FaCheckCircle className="check-icon" /> Dedicated Career Support & Mock Interviews</div>
            <div className="point-item"><FaCheckCircle className="check-icon" /> Mentorship from Senior Industry Developers</div>
          </div>
          <Link to="/Courses">
            <button className="about-cta-btn">Explore Courses →</button>
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="title">
          <h5>WHY CHOOSE US</h5>
          <h2>We Provide The Best Learning Experience</h2>
          <p className="subtitle">Everything you need to transform from a learner to a hired professional</p>
        </div>

        <div className="feature-container">
          <div className="feature-card">
            <FaLaptopCode className="icon" />
            <h3>Live Projects</h3>
            <p>Work on production-grade real-time projects with version control and code reviews.</p>
          </div>

          <div className="feature-card">
            <FaUserTie className="icon" />
            <h3>Expert Trainers</h3>
            <p>Learn directly from top industry software engineers with 8+ years experience.</p>
          </div>

          <div className="feature-card">
            <FaBriefcase className="icon" />
            <h3>Placement Support</h3>
            <p>Dedicated placement cell with 150+ hiring company partners and interview drives.</p>
          </div>

          <div className="feature-card">
            <FaCertificate className="icon" />
            <h3>Certification</h3>
            <p>Industry-recognized certificates and project portfolio to stand out on LinkedIn.</p>
          </div>

          <div className="feature-card">
            <FaCalendarAlt className="icon" />
            <h3>Flexible Batches</h3>
            <p>Weekend, morning, and evening slots tailored for students and working professionals.</p>
          </div>

          <div className="feature-card">
            <FaUsers className="icon" />
            <h3>Interview Prep</h3>
            <p>Technical assessments, resume refinement, and 1-on-1 mock interview drill downs.</p>
          </div>
        </div>
      </section>

      <section className="mission-wrapper">
        <div className="title">
          <h5>CORE VALUES</h5>
          <h2>Our Mission & Vision</h2>
        </div>
        <div className="mission">
          <div className="mission-card">
            <FaBullseye className="mission-icon" />
            <h2>Our Mission</h2>
            <p>
              To provide affordable, high-quality, and market-relevant technical education with rigorous practical training and direct industry exposure for every aspiring student.
            </p>
          </div>
          <div className="mission-card">
            <FaEye className="mission-icon" />
            <h2>Our Vision</h2>
            <p>
              To become the most reliable technology launchpad that transforms curious students into capable, self-reliant, and high-earning software developers.
            </p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-box">
          <h2>5000+</h2>
          <p>Students Trained</p>
        </div>
        <div className="stat-box">
          <h2>250+</h2>
          <p>Batches Completed</p>
        </div>
        <div className="stat-box">
          <h2>95%</h2>
          <p>Placement Rate</p>
        </div>
        <div className="stat-box">
          <h2>150+</h2>
          <p>Hiring Partners</p>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default About;
