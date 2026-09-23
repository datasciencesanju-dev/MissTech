import React, { useState } from "react";
import "./CSS/Enquiry.css";
import { Link } from "react-router-dom";

const StudentEnquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    phone: "",
    email: "",
    dob: "",
    gender: "",
    qualification: "",
    course: "",
    batch: "",
    mode: "",
    source: "",
    address: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      fatherName: "",
      motherName: "",
      phone: "",
      email: "",
      dob: "",
      gender: "",
      qualification: "",
      course: "",
      batch: "",
      mode: "",
      source: "",
      address: "",
      message: ""
    });
    setSubmitted(false);
  };

  return (
    <div className="enquiry-page">
      <header className="enquiry-header">
        <div className="header-left">
          <Link to="/">
            <img src="/logo.png" alt="MissTech" />
          </Link>
        </div>

        <div className="header-title">
          <h2>Student Enquiry</h2>
          <p>Fill in the details to submit your enquiry</p>
        </div>

        <div className="header-right">
          <Link to="/" className="back-to-home">← Back to Home</Link>
        </div>
      </header>

      <main className="enquiry-main">
        <div className="page-heading">
          <div>
            <h1>Student Admission & Enquiry Form</h1>
            <p>Please provide the student's information below. Our counselor will contact you within 24 hours.</p>
          </div>
          <span className="enquiry-badge">Admission Open 2026</span>
        </div>

        {submitted ? (
          <div className="enquiry-success-card">
            <div className="success-icon">✓</div>
            <h2>Thank You, {formData.name || "Student"}!</h2>
            <p>Your enquiry has been successfully registered. Our career counselor will call you at {formData.phone || "your number"} shortly with the full course syllabus and batch schedule.</p>
            <button className="submit-btn" onClick={handleReset}>Submit Another Enquiry</button>
          </div>
        ) : (
          <form className="enquiry-card" onSubmit={handleSubmit}>
            <div className="section-title">
              <span>01</span>
              <div>
                <h3>Personal Information</h3>
                <p>Basic identification details of the student</p>
              </div>
            </div>

            <div className="enquiry-form-grid">
              <div className="enquiry-form-group">
                <label>Student Name <span>*</span></label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="enquiry-form-group">
                <label>Father's Name <span>*</span></label>
                <input
                  type="text"
                  name="fatherName"
                  placeholder="Enter father's name"
                  value={formData.fatherName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="enquiry-form-group">
                <label>Mother's Name</label>
                <input
                  type="text"
                  name="motherName"
                  placeholder="Enter mother's name"
                  value={formData.motherName}
                  onChange={handleChange}
                />
              </div>

              <div className="enquiry-form-group">
                <label>Mobile Number <span>*</span></label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter 10-digit mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="enquiry-form-group">
                <label>Email Address <span>*</span></label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="enquiry-form-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>

              <div className="enquiry-form-group">
                <label>Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="enquiry-form-group">
                <label>Highest Qualification</label>
                <select name="qualification" value={formData.qualification} onChange={handleChange}>
                  <option value="">Select qualification</option>
                  <option value="10th">10th Standard</option>
                  <option value="12th">12th Standard</option>
                  <option value="B.Tech/BCA/B.Sc">Graduate (B.Tech / BCA / B.Sc / BA / B.Com)</option>
                  <option value="M.Tech/MCA/M.Sc">Post Graduate (MCA / M.Tech / M.Sc)</option>
                  <option value="Diploma">Diploma / PolyTechnic</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="section-title section-space">
              <span>02</span>
              <div>
                <h3>Course Information</h3>
                <p>Select the program and preferred learning schedule</p>
              </div>
            </div>

            <div className="enquiry-form-grid">
              <div className="enquiry-form-group">
                <label>Interested Course <span>*</span></label>
                <select name="course" value={formData.course} onChange={handleChange} required>
                  <option value="">Select course</option>
                  <option value="CCC">CCC (Course on Computer Concepts)</option>
                  <option value="O'Level">O'Level (NIELIT IT Diploma)</option>
                  <option value="DCA">DCA (Diploma in Computer Applications)</option>
                  <option value="ADCA">ADCA (Advance Diploma in Computer Applications)</option>
                  <option value="Frontend Development">Frontend Development (React, JS, Tailwind)</option>
                  <option value="Backend Development">Backend Development (Node.js, Express, MongoDB)</option>
                  <option value="Full Stack Development">Full Stack Development (MERN + SQL)</option>
                  <option value="MERN Stack Development">MERN Stack Development (Production Ready)</option>
                </select>
              </div>

              <div className="enquiry-form-group">
                <label>Preferred Batch Timing</label>
                <select name="batch" value={formData.batch} onChange={handleChange}>
                  <option value="">Select batch</option>
                  <option value="Morning">Morning (8:00 AM - 11:00 AM)</option>
                  <option value="Afternoon">Afternoon (12:00 PM - 3:00 PM)</option>
                  <option value="Evening">Evening (4:00 PM - 7:00 PM)</option>
                  <option value="Weekend">Weekend Only (Sat & Sun)</option>
                </select>
              </div>

              <div className="enquiry-form-group">
                <label>Preferred Training Mode</label>
                <select name="mode" value={formData.mode} onChange={handleChange}>
                  <option value="">Select mode</option>
                  <option value="Classroom">Classroom (Offline)</option>
                  <option value="Online">Live Interactive Online</option>
                  <option value="Hybrid">Hybrid (Offline + Online)</option>
                </select>
              </div>

              <div className="enquiry-form-group">
                <label>How did you hear about us?</label>
                <select name="source" value={formData.source} onChange={handleChange}>
                  <option value="">Select option</option>
                  <option value="Google">Google Search</option>
                  <option value="Instagram">Instagram / Facebook</option>
                  <option value="YouTube">YouTube</option>
                  <option value="Friend">Friend / Relative Recommendation</option>
                  <option value="Walk-in">Campus Walk-in</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="section-title section-space">
              <span>03</span>
              <div>
                <h3>Address & Additional Notes</h3>
                <p>Location details and specific questions</p>
              </div>
            </div>

            <div className="enquiry-form-grid">
              <div className="enquiry-form-group full-width">
                <label>Residential Address</label>
                <textarea
                  name="address"
                  placeholder="Enter complete current address"
                  rows="2"
                  value={formData.address}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="enquiry-form-group full-width">
                <label>Enquiry / Any Specific Questions</label>
                <textarea
                  name="message"
                  placeholder="Any particular topics, doubts, or career goals you'd like to discuss..."
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="reset-btn" onClick={handleReset}>
                Reset Form
              </button>
              <button type="submit" className="submit-btn">
                Submit Enquiry <span>→</span>
              </button>
            </div>
          </form>
        )}
      </main>
    </div>
  );
};

export default StudentEnquiry;
