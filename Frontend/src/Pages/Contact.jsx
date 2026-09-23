import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './CSS/Contact.css'
import { MdWifiCalling3, MdLocationOn, MdAccessTime, MdSend } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaYoutubeSquare, FaCheckCircle, FaQuestionCircle } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Full Stack Web Development",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "Can I attend a free demo class before enrolling?",
      a: "Yes! We offer 2 days of free demo sessions for all our primary programs including Full Stack, Python, and Data Science."
    },
    {
      q: "Is there an installment facility available for fees?",
      a: "Absolutely. We offer easy monthly installment options with zero interest to ensure learning remains affordable for every student."
    },
    {
      q: "What if I miss a live or classroom lecture?",
      a: "All students get access to recorded sessions, daily class notes, code repositories, and dedicated backup batches on weekends."
    },
    {
      q: "Do you provide placement guarantee or assistance?",
      a: "We provide 100% placement assistance, resume reviews, 1-on-1 mock interviews, and organize recruitment drives with our 150+ hiring partners."
    }
  ];

  return (
    <>
      <Header />

      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="badge-tag">CONTACT US</span>
          <h1>Let's Talk About <span className="highlight-text">Your Tech Future</span></h1>
          <p>Have questions about course modules, batches, or career counseling? Our expert mentors are ready to assist you.</p>
        </div>
      </section>

      <section className="contact-cards-section">
        <div className="contact-info-grid">
          <div className="contact-info-card">
            <div className="info-icon-wrapper">
              <MdWifiCalling3 className="info-icon" />
            </div>
            <h3>Call Us Directly</h3>
            <p>Speak to our senior career counselor</p>
            <a href="tel:+919005100000" className="info-link">+91 90051 #####</a>
            <span className="info-sub">Toll-Free Mon-Sat 8AM-8PM</span>
          </div>

          <div className="contact-info-card">
            <div className="info-icon-wrapper">
              <IoMdMail className="info-icon" />
            </div>
            <h3>Email Support</h3>
            <p>Send your queries or resume anytime</p>
            <a href="mailto:datasciencesanju@gmail.com" className="info-link">datasciencesanju@gmail.com</a>
            <span className="info-sub">Fast response within 2 hours</span>
          </div>

          <div className="contact-info-card">
            <div className="info-icon-wrapper">
              <MdLocationOn className="info-icon" />
            </div>
            <h3>Visit Our Campus</h3>
            <p>Experience our state-of-the-art tech lab</p>
            <span className="info-address">MissTech Institute, Near Kasya Bus Station, Kasya, Deoria Road</span>
            <span className="info-sub">Open 7 days a week</span>
          </div>

          <div className="contact-info-card">
            <div className="info-icon-wrapper">
              <MdAccessTime className="info-icon" />
            </div>
            <h3>Working Hours</h3>
            <p>Flexible batch timings available</p>
            <span className="info-address">Mon - Sat: 8:00 AM - 7:00 PM</span>
            <span className="info-sub">Sunday: 9:00 AM - 2:00 PM</span>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="form-container-box">
          <div className="form-left-col">
            <span className="sub-tag">GET IN TOUCH</span>
            <h2>Send Us a Message & Get Free Counseling</h2>
            <p>Fill out the form and our admissions team will schedule a free 1-on-1 counseling session along with the syllabus brochure.</p>

            <div className="perks-list">
              <div className="perk-item">
                <FaCheckCircle className="perk-check" />
                <span>Free syllabus and career roadmap PDF</span>
              </div>
              <div className="perk-item">
                <FaCheckCircle className="perk-check" />
                <span>Access to 2-day live interactive demo session</span>
              </div>
              <div className="perk-item">
                <FaCheckCircle className="perk-check" />
                <span>One-on-one personalized career guidance</span>
              </div>
            </div>

            <div className="social-connect">
              <h4>Follow MissTech Community</h4>
              <div className="contact-social-icons">
                <a href="#" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" aria-label="Instagram"><FaInstagramSquare /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="#" aria-label="YouTube"><FaYoutubeSquare /></a>
              </div>
            </div>
          </div>

          <div className="form-right-col">
            {submitted ? (
              <div className="contact-success">
                <div className="check-bubble">✓</div>
                <h3>Message Received!</h3>
                <p>Thank you for reaching out, <strong>{formData.name}</strong>. Our career expert will connect with you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> today.</p>
                <button onClick={() => setSubmitted(false)} className="resubmit-btn">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-real-form">
                <div className="form-row">
                  <div className="form-field">
                    <label>Your Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-field">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-field">
                    <label>Course Interested In</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="Full Stack Web Development">Full Stack Web Development</option>
                      <option value="Python Programming">Python & Django / Flask</option>
                      <option value="Java Full Stack">Java & Spring Boot</option>
                      <option value="Data Science & Machine Learning">Data Science & AI / ML</option>
                      <option value="Frontend Development">React JS / Frontend</option>
                      <option value="Other Certification">Other Certification</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label>Your Message / Query *</label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your background, career goals, or any specific questions..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="contact-submit-btn">
                  Submit Enquiry <MdSend className="send-icon" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-header">
          <span className="badge-tag">FREQUENTLY ASKED QUESTIONS</span>
          <h2>Got Questions? We've Got Answers</h2>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div className="faq-card" key={index}>
              <div className="faq-q">
                <FaQuestionCircle className="faq-icon" />
                <h4>{faq.q}</h4>
              </div>
              <p className="faq-a">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Contact
