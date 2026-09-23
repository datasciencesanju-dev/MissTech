import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './CSS/Training_modes.css'
import { Link } from 'react-router-dom';
import {
  FaChalkboardTeacher,
  FaLaptopHouse,
  FaCalendarWeek,
  FaCheck,
  FaTimes,
  FaArrowRight,
  FaUserFriends,
  FaHeadset,
  FaRegClock
} from "react-icons/fa";

const modes = [
  {
    id: "classroom",
    icon: <FaChalkboardTeacher />,
    badge: "Most Immersive",
    title: "Classroom Training (Offline)",
    subtitle: "High-Tech Campus Labs in Kasya, Deoria",
    desc: "Experience 100% focused learning inside our modern, air-conditioned computer laboratories with immediate on-desk assistance from instructors.",
    features: [
      "Physical high-spec lab workstations provided",
      "Immediate on-desk doubt clearing by mentors",
      "In-person peer group discussions and hackathons",
      "Library and uninterrupted high-speed Wi-Fi access",
      "Daily practice assignments under direct supervision"
    ],
    schedule: "Mon - Fri (Morning & Evening slots)"
  },
  {
    id: "online",
    icon: <FaLaptopHouse />,
    badge: "100% Flexible",
    title: "Live Online Interactive",
    subtitle: "Learn from the Comfort of Your Home",
    desc: "Join real-time instructor-led interactive video classes with screen sharing, cloud coding environments, and lifetime lecture recordings.",
    features: [
      "Live two-way audio/video interactive sessions",
      "HD recordings uploaded within 2 hours of class",
      "Cloud sandbox environments for coding practice",
      "Dedicated Slack / WhatsApp mentor doubt groups",
      "Same curriculum and placement drive eligibility"
    ],
    schedule: "Mon - Fri (Flexible evening slots)"
  },
  {
    id: "weekend",
    icon: <FaCalendarWeek />,
    badge: "For Working Pros",
    title: "Weekend Intensive Batches",
    subtitle: "Specially Designed for College Students & Employees",
    desc: "Accelerate your upskilling without disturbing your weekday job or college. Extended deep-dive sessions with structured weekly milestones.",
    features: [
      "4-hour comprehensive sessions on Saturday & Sunday",
      "Self-paced weekly project assignments",
      "Personalized 1-on-1 mentor code reviews",
      "Exclusive focus on high-impact full stack modules",
      "Direct placement assistance on course completion"
    ],
    schedule: "Saturday & Sunday (9 AM - 1 PM or 2 PM - 6 PM)"
  }
];

const comparisonData = [
  { feature: "Live Instructor-led Training", classroom: true, online: true, weekend: true },
  { feature: "On-Campus Computer Lab Access", classroom: true, online: false, weekend: true },
  { feature: "Session Video Recordings", classroom: true, online: true, weekend: true },
  { feature: "Daily On-Desk Doubt Solving", classroom: true, online: "Via Call/Chat", weekend: true },
  { feature: "Capstone Live Projects", classroom: true, online: true, weekend: true },
  { feature: "1-on-1 Mock Interviews", classroom: true, online: true, weekend: true },
  { feature: "100% Placement Support", classroom: true, online: true, weekend: true },
  { feature: "Mode Switch Flexibility", classroom: true, online: true, weekend: true }
];

const Training_modes = () => {
  const [activeTab, setActiveTab] = useState("classroom");

  return (
    <>
      <Header />

      <section className="modes-hero">
        <div className="modes-hero-content">
          <span className="badge-tag">LEARNING PATHWAYS</span>
          <h1>Choose the <span className="highlight-text">Training Mode</span> That Fits Your Life</h1>
          <p>Whether you thrive in an in-person tech lab or prefer live interactive online classes from home, MissTech provides the ideal environment.</p>
        </div>
      </section>

      {/* THREE MODES CARDS */}
      <section className="modes-cards-section">
        <div className="modes-grid">
          {modes.map((m) => (
            <div className="mode-card" key={m.id}>
              <div className="mode-badge">{m.badge}</div>
              <div className="mode-icon-box">{m.icon}</div>
              <h3>{m.title}</h3>
              <span className="mode-sub">{m.subtitle}</span>
              <p className="mode-desc">{m.desc}</p>

              <div className="mode-schedule-box">
                <FaRegClock className="clock-icon" />
                <span>{m.schedule}</span>
              </div>

              <div className="mode-features-list">
                <h4>Key Advantages:</h4>
                <ul>
                  {m.features.map((f, i) => (
                    <li key={i}>
                      <FaCheck className="mode-check" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/enquiry" className="mode-btn-link">
                <button className="mode-select-btn">
                  Choose {m.title.split(" ")[0]} Mode <FaArrowRight />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="comparison-section">
        <div className="comparison-header">
          <span className="badge-tag">FEATURE COMPARISON</span>
          <h2>Compare Training Modes Side-by-Side</h2>
          <p>Every mode guarantees the exact same rigorous curriculum and 100% placement cell support.</p>
        </div>

        <div className="table-responsive-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Training Features</th>
                <th>Classroom (Offline)</th>
                <th>Live Online</th>
                <th>Weekend Batches</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr key={idx}>
                  <td className="feat-title">{row.feature}</td>
                  <td>
                    {row.classroom === true ? <FaCheck className="t-check" /> : row.classroom}
                  </td>
                  <td>
                    {row.online === true ? (
                      <FaCheck className="t-check" />
                    ) : row.online === false ? (
                      <FaTimes className="t-cross" />
                    ) : (
                      <span className="t-text">{row.online}</span>
                    )}
                  </td>
                  <td>
                    {row.weekend === true ? <FaCheck className="t-check" /> : row.weekend}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FLEXIBILITY PROMISE */}
      <section className="flexibility-section">
        <div className="flex-box">
          <div className="flex-text">
            <span className="badge-tag">FREEDOM TO SWITCH</span>
            <h2>Switch Modes Anytime with Zero Penalty</h2>
            <p>
              Started online and now want to visit our physical campus for project mentoring?
              Or relocating and need to switch from offline to live online?
              At MissTech, your enrolled seat gives you total flexibility to switch modes smoothly at any time.
            </p>
            <div className="flex-stats">
              <div>
                <h4>100%</h4>
                <span>Curriculum Parity</span>
              </div>
              <div>
                <h4>Zero</h4>
                <span>Switching Fee</span>
              </div>
              <div>
                <h4>24/7</h4>
                <span>Portal Access</span>
              </div>
            </div>
          </div>
          <div className="flex-cta">
            <h3>Need Help Deciding?</h3>
            <p>Speak to our academic director to see which schedule aligns best with your college or job commitments.</p>
            <Link to="/contact">
              <button className="flex-contact-btn">Speak With a Mentor Now →</button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Training_modes
