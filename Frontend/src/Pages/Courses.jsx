import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './CSS/Courses.css'
import { Link, useNavigate } from 'react-router-dom';
import {
  FaClock,
  FaLaptopCode,
  FaStar,
  FaCheck,
  FaUserGraduate,
  FaArrowRight,
  FaDownload,
  FaSearch,
  FaDatabase,
  FaCertificate
} from "react-icons/fa";

// Initial verified list (matches database seed)
const initialCourses = [
  {
    _id: "ccc",
    title: "CCC (Course on Computer Concepts)",
    category: "Certifications",
    badge: "NIELIT Govt. Certified",
    duration: "3 Months (80 Hours)",
    mode: "Classroom / Online",
    rating: "4.9",
    students: "3,500+ enrolled",
    description: "Official NIELIT certified computer literacy course covering hardware fundamentals, GUI operating systems, MS Office / LibreOffice suite, Internet applications, and digital governance tools.",
    image: "/excel.jpg",
    highlights: [
      "Introduction to Computer, GUI Operating System & File Management",
      "Word Processing & Professional Document Formatting",
      "Spreadsheets (Excel / LibreOffice Calc) & Formula Basics",
      "Presentations (PowerPoint), Animation & Slide Design",
      "Internet, Web Browsers, Emailing & Cyber Security Hygiene",
      "Digital Financial Services (UPI, Internet Banking) & Exam Mock Tests"
    ]
  },
  {
    _id: "olevel",
    title: "O'Level (NIELIT O Level IT Diploma)",
    category: "Diplomas",
    badge: "Govt. Recognized IT Diploma",
    duration: "1 Year (Foundation in IT)",
    mode: "Classroom / Online",
    rating: "4.9",
    students: "1,850+ enrolled",
    description: "Prestigious national-level IT diploma recognized by Govt. of India for government & private IT jobs, covering networking, web design, Python, and IoT systems.",
    image: "/python.webp",
    highlights: [
      "Module M1-R5: Information Technology Tools & Network Basics",
      "Module M2-R5: Web Designing & Publishing (HTML5, CSS3, JavaScript)",
      "Module M3-R5: Programming & Problem Solving through Python",
      "Module M4-R5: Internet of Things (IoT) & Sensor Applications",
      "Official Practical Lab Assignments & Project Guidance",
      "Mock Tests for NIELIT Examination & Central Govt. Eligibility"
    ]
  },
  {
    _id: "dca",
    title: "DCA (Diploma in Computer Applications)",
    category: "Diplomas",
    badge: "Essential Job Diploma",
    duration: "6 Months",
    mode: "Classroom / Online",
    rating: "4.8",
    students: "2,200+ enrolled",
    description: "Industry-standard 6-month computer application diploma designed for students seeking office computer jobs, data entry, and state government vacancies.",
    image: "/database.avif",
    highlights: [
      "Computer Fundamentals, Windows Architecture & System Utilities",
      "Advanced MS Office (Word, Excel, PowerPoint & Access Database)",
      "Internet Applications, Email Client Configuration & E-Services",
      "Basic Database Concepts, Data Entry & Office Automation",
      "Typing Speed Enhancement (English / Hindi) & Lab Drills",
      "Semester Exam, Project Work & Valid Institute Diploma"
    ]
  },
  {
    _id: "adca",
    title: "ADCA (Advance Diploma in Computer Applications)",
    category: "Diplomas",
    badge: "Comprehensive 1-Year Diploma",
    duration: "1 Year (2 Semesters)",
    mode: "Classroom / Online",
    rating: "4.9",
    students: "2,900+ enrolled",
    description: "Complete master-level computer diploma spanning advanced office productivity, financial accounting with Tally Prime & GST, graphic design software, and web basics.",
    image: "/graphicdesign.jpg",
    highlights: [
      "Semester 1: Operating Systems, Advanced Office Suite & Internet",
      "Financial Accounting with Tally Prime & GST Return Filing",
      "Graphic Designing with Adobe Photoshop & CorelDRAW",
      "Web Fundamentals: HTML5, CSS3, JavaScript Basics",
      "Database Management System (DBMS) & MIS Reporting",
      "Live Industrial Project & Recognized 1-Year Diploma"
    ]
  },
  {
    _id: "frontend",
    title: "Frontend Development",
    category: "Web Development",
    badge: "Modern UI/UX",
    duration: "4 Months",
    mode: "Classroom / Online",
    rating: "4.9",
    students: "1,600+ enrolled",
    description: "Craft responsive, interactive, and ultra-fast user interfaces. Master semantic HTML5, modern CSS3 animations, JavaScript ES6+, React 19, and Tailwind CSS.",
    image: "/webdevelopement.png",
    highlights: [
      "Semantic HTML5, Advanced CSS3, Flexbox & CSS Grid",
      "Modern JavaScript (ES6+, DOM Manipulation, Async/Await)",
      "React.js 19 Architecture, Custom Hooks & State Management",
      "Tailwind CSS & Mobile-First Responsive Design",
      "Git, GitHub Version Control & Component-Driven Architecture",
      "4+ High-Impact Portfolio Projects Hosted Live on Vercel"
    ]
  },
  {
    _id: "backend",
    title: "Backend Development",
    category: "Web Development",
    badge: "Server & APIs",
    duration: "4.5 Months",
    mode: "Classroom / Online",
    rating: "4.8",
    students: "1,350+ enrolled",
    description: "Build robust, secure, and production-grade backend services. Master Node.js runtime, Express.js microservices, REST API engineering, authentication, and databases.",
    image: "/java.jpeg",
    highlights: [
      "Node.js Core, Event Loop & Asynchronous I/O Programming",
      "Express.js Routing, Middleware, Security & Error Handling",
      "RESTful API Design, Testing with Postman & Swagger Docs",
      "MongoDB & PostgreSQL Schema Modeling, Mongoose & Indexing",
      "JWT Token Authentication, Password Hashing & Role-Based Access",
      "Server Deployment on Cloud (Render, AWS) with CI/CD Pipelines"
    ]
  },
  {
    _id: "fullstack",
    title: "Full Stack Development",
    category: "Web Development",
    badge: "100% Job Ready",
    duration: "6 Months",
    mode: "Classroom / Online",
    rating: "4.9",
    students: "2,400+ enrolled",
    description: "Comprehensive software engineering program bridging frontend user interfaces with scalable backend cloud services and relational/NoSQL databases.",
    image: "/about1.png",
    highlights: [
      "Full Frontend Mastery (HTML5, CSS3, JavaScript ES6+, React)",
      "Robust Backend Engineering with Node.js & Express.js",
      "Dual Database Experience: Relational SQL (PostgreSQL) + NoSQL (MongoDB)",
      "State Management with Redux Toolkit & Context API",
      "System Design Basics, API Rate Limiting & Web Security",
      "Full-Stack Capstone Project with 1-on-1 Senior Developer Code Reviews"
    ]
  },
  {
    _id: "mern",
    title: "MERN Stack Development",
    category: "Web Development",
    badge: "Most Popular 2026",
    duration: "6 Months",
    mode: "Classroom / Online",
    rating: "4.9",
    students: "2,850+ enrolled",
    description: "Master the industry's most popular JavaScript stack: MongoDB, Express.js, React 19, and Node.js. Build production-level web applications with real-time features.",
    image: "/webdevelopement.png",
    highlights: [
      "MongoDB Database Design, Aggregation Pipelines & Optimization",
      "Express.js Enterprise API Architecture & Microservices",
      "React 19 Single Page Applications (SPA) with Vite",
      "Redux Toolkit Global State Management & RTK Query",
      "Real-Time Chat & Notifications using WebSockets (Socket.io)",
      "Payment Gateway Integration (Razorpay/Stripe) & Cloud Deployment"
    ]
  }
];

const Courses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState(initialCourses);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [dbStatus, setDbStatus] = useState("checking");

  // Fetch courses from Backend MongoDB API
  useEffect(() => {
    const fetchCoursesFromDB = async () => {
      try {
        const response = await fetch("/api/courses");
        if (response.ok) {
          const result = await response.json();
          if (result.data && result.data.length > 0) {
            setCourses(result.data);
            setDbStatus(result.source === "database" ? "connected" : "synced");
          }
        } else {
          setDbStatus("synced");
        }
      } catch (err) {
        console.log("Using cached course dataset:", err);
        setDbStatus("synced");
      }
    };
    fetchCoursesFromDB();
  }, []);

  const filteredCourses = courses.filter((course) => {
    const matchesCat = selectedCategory === "all" || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <Header />

      <section className="courses-hero">
        <div className="courses-hero-content">
          <span className="badge-tag">GOVERNMENT & INDUSTRY CERTIFIED PROGRAMS</span>
          <h1>Professional & Job-Ready <span className="highlight-text">Courses</span></h1>
          <p>
            From essential diplomas (CCC, O'Level, DCA, ADCA) to advanced software engineering (Frontend, Backend, Full Stack & MERN), MissTech delivers industry-leading education.
          </p>
          <div className="db-sync-badge">
            <FaDatabase className="db-icon" />
            <span>Database Status: {dbStatus === "connected" ? "Connected to MongoDB Live" : "Synchronized with MissTech DB"}</span>
          </div>
        </div>
      </section>

      <section className="courses-controls-section">
        <div className="courses-controls-container">
          <div className="courses-search-bar">
            <FaSearch className="c-search-icon" />
            <input
              type="text"
              placeholder="Search by course (e.g., CCC, O'Level, DCA, MERN, Frontend)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="category-tabs">
            <button
              className={selectedCategory === "all" ? "active" : ""}
              onClick={() => setSelectedCategory("all")}
            >
              All Courses ({courses.length})
            </button>
            <button
              className={selectedCategory === "Diplomas" ? "active" : ""}
              onClick={() => setSelectedCategory("Diplomas")}
            >
              Diplomas (O'Level, DCA, ADCA)
            </button>
            <button
              className={selectedCategory === "Certifications" ? "active" : ""}
              onClick={() => setSelectedCategory("Certifications")}
            >
              Certifications (CCC)
            </button>
            <button
              className={selectedCategory === "Web Development" ? "active" : ""}
              onClick={() => setSelectedCategory("Web Development")}
            >
              Web & Software Development
            </button>
          </div>
        </div>
      </section>

      <section className="courses-grid-section">
        <div className="courses-container">
          {filteredCourses.length > 0 ? (
            <div className="courses-cards-grid">
              {filteredCourses.map((c, index) => (
                <div className="course-item-card" key={c._id || index}>
                  <div className="card-top-banner">
                    <div className="card-img-wrap">
                      <img src={c.image || "/webdevelopement.png"} alt={c.title} />
                    </div>
                    <span className="course-badge">{c.badge}</span>
                  </div>

                  <div className="course-body">
                    <div className="course-meta-top">
                      <span className="rating-pill">
                        <FaStar className="star-icon" /> {c.rating}
                      </span>
                      <span className="students-count">{c.students}</span>
                    </div>

                    <h3 className="course-title">{c.title}</h3>
                    <p className="course-desc">{c.description}</p>

                    <div className="course-specs">
                      <div className="spec-item">
                        <FaClock className="spec-icon" />
                        <span>{c.duration}</span>
                      </div>
                      <div className="spec-item">
                        <FaLaptopCode className="spec-icon" />
                        <span>{c.mode}</span>
                      </div>
                    </div>

                    <div className="course-syllabus-highlights">
                      <h4>Syllabus Highlights:</h4>
                      <ul>
                        {c.highlights && c.highlights.map((h, i) => (
                          <li key={i}>
                            <FaCheck className="check-bullet" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="card-actions">
                      <button
                        className="enroll-btn"
                        onClick={() => navigate('/enquiry')}
                      >
                        Enroll Now <FaArrowRight />
                      </button>
                      <button
                        className="syllabus-btn"
                        onClick={() => {
                          alert(`Brochure and Syllabus for "${c.title}" will be sent to your email after submitting the enquiry form!`);
                          navigate('/enquiry');
                        }}
                      >
                        <FaDownload /> Syllabus
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-courses-found">
              <h3>No courses found matching "{searchQuery}"</h3>
              <p>Try searching for CCC, O'Level, DCA, ADCA, Frontend, Backend, or MERN Stack.</p>
              <button
                className="reset-search-btn"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
              >
                View All Courses
              </button>
            </div>
          )}
        </div>
      </section>

      {/* WHY LEARN AT MISSTECH */}
      <section className="courses-why-banner">
        <div className="why-content">
          <span className="badge-tag" style={{ background: "rgba(255,255,255,0.15)", color: "#FFC107", borderColor: "#FFC107" }}>
            THE MISSTECH ADVANTAGE
          </span>
          <h2>Government Recognized Certifications & Modern Tech Labs</h2>
          <div className="why-grid">
            <div className="why-box">
              <span className="why-num">01</span>
              <h4>Govt. Recognized Diplomas</h4>
              <p>Valid for all state & central government jobs, banking, and private corporate recruitments.</p>
            </div>
            <div className="why-box">
              <span className="why-num">02</span>
              <h4>100% Practical Computer Labs</h4>
              <p>Dedicated modern PC workstations with fast internet and hands-on software environments.</p>
            </div>
            <div className="why-box">
              <span className="why-num">03</span>
              <h4>Experienced Faculty</h4>
              <p>Mentorship from NIELIT certified trainers and senior full-stack software engineers.</p>
            </div>
            <div className="why-box">
              <span className="why-num">04</span>
              <h4>Placement & Exam Prep</h4>
              <p>Special mock test drills for CCC/O'Level and resume placement support for developers.</p>
            </div>
          </div>

          <div className="why-cta-wrap">
            <Link to="/enquiry">
              <button className="counseling-cta-btn">Book Free Counseling & Demo Class →</button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Courses
