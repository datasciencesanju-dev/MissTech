import React, { useState } from 'react'
import Header from '../Components/Header'
import "./CSS/Blog.css";
import Footer from '../Components/Footer'
import {
  FaSearch,
  FaUser,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

const blogs = [
  {
    title: "React JS Complete Guide 2026",
    category: "React",
    image: "/blog2.png",
    date: "May 10, 2026",
    time: "8 min"
  },
  {
    title: "Python For Beginners to Pro",
    category: "Python",
    image: "/blog3.png",
    date: "May 8, 2026",
    time: "7 min"
  },
  {
    title: "Top Java Interview Questions & Answers",
    category: "Java",
    image: "/blog4.png",
    date: "May 5, 2026",
    time: "6 min"
  },
  {
    title: "Complete Data Science Career Roadmap",
    category: "Data Science",
    image: "/blog5.png",
    date: "May 2, 2026",
    time: "9 min"
  },
  {
    title: "Mastering MERN Stack in 90 Days",
    category: "Web Development",
    image: "/blog6.png",
    date: "April 28, 2026",
    time: "8 min"
  },
  {
    title: "Top 10 High Paying Programming Skills",
    category: "Career",
    image: "/blog7.png",
    date: "April 25, 2026",
    time: "6 min"
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "React", "Python", "Java", "Web Development", "Data Science", "Career", "Interview"];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = selectedCategory === "All" || blog.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || blog.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />

      <section className="search-section">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search blogs, topics or skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="category-list">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="featured">
        <h4>FEATURED BLOG</h4>
        <div className="featured-card">
          <div className="featured-image">
            <img src="/blog1.png" alt="Featured blog" />
          </div>
          <div className="featured-content">
            <span className="badge">Web Development</span>
            <h2>Full Stack Development Roadmap 2026</h2>
            <div className="meta">
              <span><FaUser /> Admin</span>
              <span><FaCalendarAlt /> May 15, 2026</span>
              <span><FaClock /> 10 min read</span>
            </div>
            <p>
              Want to become a Full Stack Developer? Learn HTML, CSS, JavaScript, React,
              Node.js, Express and MongoDB with this step-by-step master roadmap designed for beginners and intermediates.
            </p>
            <button>Read Full Guide →</button>
          </div>
        </div>
      </section>

      <section className="blog-wrapper">
        <div className="blog-left">
          <h3 className="section-title">LATEST ARTICLES</h3>
          <div className="blog-grid">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((card, index) => (
                <div className="blog-card" key={index}>
                  <div className="blog-card-img-wrap">
                    <img src={card.image} alt={card.title} />
                  </div>
                  <div className="blog-content">
                    <span className="category">{card.category}</span>
                    <h4>{card.title}</h4>
                    <div className="blog-meta">
                      <span><FaUser /> Admin</span>
                      <span><FaCalendarAlt /> {card.date}</span>
                      <span><FaClock /> {card.time}</span>
                    </div>
                    <p>
                      Learn with practical hands-on examples, real projects and interview preparation strategies.
                    </p>
                    <button>Read More →</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-blogs">No articles found matching "{searchQuery}".</p>
            )}
          </div>
        </div>

        <div className="sidebar">
          <h3>POPULAR CATEGORIES</h3>
          <ul>
            <li onClick={() => setSelectedCategory("React")}>React <span>25</span></li>
            <li onClick={() => setSelectedCategory("Python")}>Python <span>18</span></li>
            <li onClick={() => setSelectedCategory("Java")}>Java <span>15</span></li>
            <li onClick={() => setSelectedCategory("Web Development")}>Web Development <span>30</span></li>
            <li onClick={() => setSelectedCategory("Data Science")}>Data Science <span>12</span></li>
            <li onClick={() => setSelectedCategory("Career")}>Career <span>22</span></li>
            <li onClick={() => setSelectedCategory("Interview")}>Interview Tips <span>20</span></li>
          </ul>

          <div className="sidebar-newsletter">
            <h4>Stay Ahead in Tech</h4>
            <p>Subscribe to our weekly newsletter for the latest coding tutorials and job openings.</p>
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Blog
