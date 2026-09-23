import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './CSS/Placement.css'
import { Link } from 'react-router-dom';
import {
  FaTrophy,
  FaBuilding,
  FaChartLine,
  FaUserTie,
  FaQuoteLeft,
  FaCheckCircle,
  FaStar,
  FaHandshake
} from "react-icons/fa";

const alumniStories = [
  {
    name: "Amit Kumar",
    role: "Full Stack MERN Developer",
    company: "Tech Mahindra",
    package: "7.2 LPA",
    background: "BCA Graduate (Non-technical coding background)",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    quote: "MissTech transformed my entire career. I went from zero React knowledge to building full-stack production apps with MongoDB. The mock interviews gave me immense confidence."
  },
  {
    name: "Pooja Verma",
    role: "Frontend React Engineer",
    company: "Infosys",
    package: "6.5 LPA",
    background: "B.Sc Graduate (Career Switcher)",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    quote: "The mentors at MissTech teach you how things actually work in real tech companies. The live projects on my GitHub were the sole reason I cleared all 3 technical interview rounds."
  },
  {
    name: "Vikram Singh",
    role: "Python Backend Developer",
    company: "Cognizant",
    package: "8.0 LPA",
    background: "B.Tech Fresher",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    quote: "Django, REST APIs, and database indexing were explained with practical code examples. MissTech's placement cell scheduled direct interviews for me within 2 weeks of course completion."
  },
  {
    name: "Sneha Patel",
    role: "Data Analyst",
    company: "Wipro Digital",
    package: "5.8 LPA",
    background: "B.Com Graduate",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    quote: "Being from a commerce background, I was intimidated by coding. But the step-by-step guidance in Advanced Excel, SQL, and Python made me a confident data analyst."
  }
];

const hiringCompanies = [
  "Tata Consultancy Services",
  "Infosys",
  "Wipro",
  "Tech Mahindra",
  "Cognizant",
  "HCL Technologies",
  "Capgemini",
  "Accenture",
  "Zomato Tech",
  "Paytm",
  "GlobalLogic",
  "Persistent Systems"
];

const roadmapSteps = [
  {
    num: "01",
    title: "Foundational Mastery & Capstone Projects",
    desc: "Build real-world full-stack web and backend applications hosted live on GitHub and cloud platforms."
  },
  {
    num: "02",
    title: "DSA & Problem Solving Drills",
    desc: "Daily algorithmic practice in arrays, strings, recursion, sorting, and database SQL optimization."
  },
  {
    num: "03",
    title: "Resume & Portfolio Optimization",
    desc: "Craft an ATS-optimized technical resume, standout LinkedIn profile, and live portfolio showcase."
  },
  {
    num: "04",
    title: "1-on-1 Mock Technical & HR Rounds",
    desc: "Rigorous technical mock interviews with senior industry engineers to eliminate interview nervousness."
  },
  {
    num: "05",
    title: "Campus Drives & Offer Rollouts",
    desc: "Exclusive interview drives with MissTech's 150+ hiring partner companies until you accept your offer letter."
  }
];

const Placements = () => {
  return (
    <>
      <Header />

      <section className="placements-hero">
        <div className="placements-hero-content">
          <span className="badge-tag">CAREER SUCCESS</span>
          <h1>Turning Aspirations Into <span className="highlight-text">Dream Tech Careers</span></h1>
          <p>Join thousands of successful alumni working at leading MNCs and fast-growing tech startups.</p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="placement-metrics-section">
        <div className="placement-metrics-grid">
          <div className="metric-box">
            <div className="metric-icon-wrap"><FaTrophy /></div>
            <h2>18.0 LPA</h2>
            <p>Highest Package Offered</p>
          </div>
          <div className="metric-box">
            <div className="metric-icon-wrap"><FaChartLine /></div>
            <h2>5.5 LPA</h2>
            <p>Average Fresher Package</p>
          </div>
          <div className="metric-box">
            <div className="metric-icon-wrap"><FaBuilding /></div>
            <h2>150+</h2>
            <p>Active Hiring Partners</p>
          </div>
          <div className="metric-box">
            <div className="metric-icon-wrap"><FaUserTie /></div>
            <h2>95%</h2>
            <p>Placement Track Record</p>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="roadmap-section">
        <div className="roadmap-header">
          <span className="badge-tag">OUR METHODOLOGY</span>
          <h2>The 5-Step Placement Blueprint</h2>
          <p>A proven roadmap engineered to take you from a curious beginner to a confident hired engineer.</p>
        </div>

        <div className="roadmap-timeline">
          {roadmapSteps.map((step, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-badge">{step.num}</div>
              <div className="timeline-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="stories-section">
        <div className="stories-header">
          <span className="badge-tag">STUDENT VOICES</span>
          <h2>Real Students. Real Transformations.</h2>
          <p>Read inspiring journeys of students who transformed their careers with MissTech.</p>
        </div>

        <div className="stories-grid">
          {alumniStories.map((story, i) => (
            <div className="story-card" key={i}>
              <FaQuoteLeft className="quote-watermark" />
              <div className="story-profile">
                <img src={story.image} alt={story.name} className="profile-pic" />
                <div>
                  <h4>{story.name}</h4>
                  <span className="story-role">{story.role}</span>
                  <span className="story-bg">{story.background}</span>
                </div>
              </div>

              <div className="package-pill">
                <span className="company-name">{story.company}</span>
                <span className="package-tag">{story.package}</span>
              </div>

              <p className="story-quote">"{story.quote}"</p>

              <div className="story-stars">
                {[...Array(5)].map((_, s) => (
                  <FaStar key={s} className="gold-star" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HIRING PARTNERS */}
      <section className="partners-section">
        <div className="partners-header">
          <span className="badge-tag"><FaHandshake /> HIRING ECOSYSTEM</span>
          <h2>Top Companies Hiring MissTech Graduates</h2>
          <p>Our students are trusted and hired by India's most prestigious IT employers.</p>
        </div>

        <div className="partners-chips-grid">
          {hiringCompanies.map((company, index) => (
            <div className="company-chip" key={index}>
              <FaCheckCircle className="company-check" />
              <span>{company}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="placement-cta-section">
        <div className="placement-cta-box">
          <h2>Ready to Launch Your High-Paying Tech Career?</h2>
          <p>Schedule a free career evaluation session with our Placement Director today.</p>
          <div className="cta-btn-group">
            <Link to="/enquiry">
              <button className="cta-primary-btn">Apply For Placement Program →</button>
            </Link>
            <Link to="/Courses">
              <button className="cta-secondary-btn">Explore Eligible Courses</button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Placements
