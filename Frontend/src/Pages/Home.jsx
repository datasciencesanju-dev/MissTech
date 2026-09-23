import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './CSS/Home.css'
import { IoRibbonOutline } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const courses = [
    {
      title: "CCC",
      badge: "NIELIT Certified",
      image: "/excel.jpg",
      topics: ["Computer Concepts & Windows", "MS Office / LibreOffice", "Internet & Cyber Security"],
    },
    {
      title: "O'Level",
      badge: "Govt. IT Diploma",
      image: "/python.webp",
      topics: ["IT Tools & Networking", "Web Designing & Python", "IoT & Sensor Applications"],
    },
    {
      title: "DCA",
      badge: "6 Months Diploma",
      image: "/database.avif",
      topics: ["Office Automation", "Database Management", "Data Entry & Applications"],
    },
    {
      title: "ADCA",
      badge: "1 Year Master Diploma",
      image: "/graphicdesign.jpg",
      topics: ["Advanced MS Office", "Tally Prime with GST", "Photoshop & CorelDRAW"],
    },
    {
      title: "Frontend Development",
      badge: "Modern UI/UX",
      image: "/webdevelopement.png",
      topics: ["HTML5, CSS3 & Modern JS", "React 19 & Tailwind CSS", "4+ Portfolio Projects"],
    },
    {
      title: "Backend Development",
      badge: "Server & APIs",
      image: "/java.jpeg",
      topics: ["Node.js & Express.js", "RESTful API Engineering", "MongoDB & PostgreSQL"],
    },
    {
      title: "Full Stack Development",
      badge: "100% Job Ready",
      image: "/about1.png",
      topics: ["Complete Frontend & Backend", "System Architecture & SQL", "Live Capstone Project"],
    },
    {
      title: "MERN Stack Development",
      badge: "Bestseller 2026",
      image: "/webdevelopement.png",
      topics: ["MongoDB & Express", "React 19 with Redux", "Real-Time Cloud Apps"],
    },
  ];

  return (
    <>
      <Header />
      <section className="bg-top">
        <div className="top-left">
          <h1>Upgrade Your Skills. Advance Your Future.</h1>
          <p>Government recognized computer diplomas (CCC, O'Level, DCA, ADCA) and modern full-stack software development with 100% practical learning and placement support.</p>
          <div className="buttons">
            <button className="explore" onClick={() => navigate('/Courses')}>Explore All Courses</button>
            <button className="callback" onClick={() => navigate('/contact')}>Request a Callback</button>
          </div>
          <div className="home-features">
            <div>
              <h4><FaUserGraduate /> Experienced Faculty</h4>
              <small>Learn from certified IT mentors</small>
            </div>
            <div>
              <h4><IoRibbonOutline /> Practical Labs</h4>
              <small>Hands-on daily coding & exercises</small>
            </div>
            <div>
              <h4><IoRibbonOutline /> Govt. Certification</h4>
              <small>Valid for government & MNC jobs</small>
            </div>
            <div>
              <h4><IoRibbonOutline /> Placement Support</h4>
              <small>Resume building & campus drives</small>
            </div>
          </div>
        </div>
        <div className="top-center">
          <img src="/bgpic.png" alt="MissTech Training" />
        </div>
      </section>

      <section className="popular-section">
        <div className="popular-header">
          <h2>
            📘 <span>FEATURED COURSES & DIPLOMAS</span>
          </h2>
          <Link to="/Courses">View All Programs →</Link>
        </div>

        <div className="course-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <ul>
                {course.topics.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button onClick={() => navigate('/Courses')}>View Course Details →</button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home
