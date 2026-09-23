const Course = require("../Models/CourseModel");

const defaultCourses = [
  {
    title: "CCC (Course on Computer Concepts)",
    slug: "ccc-course-on-computer-concepts",
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
    title: "O'Level (NIELIT O Level IT Diploma)",
    slug: "olevel-nielit-diploma",
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
    title: "DCA (Diploma in Computer Applications)",
    slug: "dca-diploma-computer-applications",
    category: "Diplomas",
    badge: "Essential Job Diploma",
    duration: "6 Months",
    mode: "Classroom / Online",
    rating: "4.8",
    students: "2,200+ enrolled",
    highlights: [
      "Computer Fundamentals, Windows Architecture & System Utilities",
      "Advanced MS Office (Word, Excel, PowerPoint & Access Database)",
      "Internet Applications, Email Client Configuration & E-Services",
      "Basic Database Concepts, Data Entry & Office Automation",
      "Typing Speed Enhancement (English / Hindi) & Lab Drills",
      "Semester Exam, Project Work & Valid Institute Diploma"
    ],
    description: "Industry-standard 6-month computer application diploma designed for high school and college students seeking office computer jobs, data entry, and government vacancies."
  },
  {
    title: "ADCA (Advance Diploma in Computer Applications)",
    slug: "adca-advance-diploma-computer-applications",
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
    title: "Frontend Development",
    slug: "frontend-development",
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
    title: "Backend Development",
    slug: "backend-development",
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
    title: "Full Stack Development",
    slug: "full-stack-development",
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
    title: "MERN Stack Development",
    slug: "mern-stack-development",
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

// Get all courses from Database (auto-seeds if collection is empty)
const getAllCourses = async (req, res) => {
  try {
    let courses = await Course.find().sort({ createdAt: 1 });

    if (!courses || courses.length === 0) {
      console.log("No courses in database. Auto-seeding default courses...");
      await Course.deleteMany({});
      courses = await Course.insertMany(defaultCourses);
      console.log(`Successfully seeded ${courses.length} courses into MongoDB!`);
    }

    res.status(200).json({
      status: "success",
      count: courses.length,
      source: "database",
      data: courses
    });
  } catch (error) {
    console.error("Error fetching courses from database:", error);
    // Fallback response with default courses so frontend never breaks
    res.status(200).json({
      status: "fallback",
      count: defaultCourses.length,
      source: "fallback",
      message: "Serving verified courses from fallback configuration",
      data: defaultCourses
    });
  }
};

// Explicit Seed Endpoint
const seedCourses = async (req, res) => {
  try {
    await Course.deleteMany({});
    const createdCourses = await Course.insertMany(defaultCourses);
    res.status(201).json({
      status: "success",
      message: `Successfully seeded ${createdCourses.length} courses in database!`,
      data: createdCourses
    });
  } catch (error) {
    console.error("Seeding error:", error);
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = {
  getAllCourses,
  seedCourses,
  defaultCourses
};
