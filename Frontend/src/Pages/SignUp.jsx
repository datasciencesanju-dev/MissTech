import React, { useState } from "react";
import "./CSS/SignUp.css";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match. Please verify.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message || "Account created successfully! Redirecting to login...");
        setFormData({
          name: "",
          phone: "",
          email: "",
          password: "",
          confirmPassword: ""
        });
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setErrorMessage(data.message || "Failed to create account.");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      setErrorMessage("Could not connect to backend server. Make sure server is running on port 7000.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-brand">
        <Link to="/">
          <img src="/logo.png" alt="MissTech Logo" className="signup-brand-logo" />
        </Link>

        <div className="signup-brand-content">
          <h1>
            Start Your
            <br />
            <span>Tech Journey.</span>
          </h1>

          <p>
            Join MissTech today to learn cutting-edge tools, build impressive projects, and launch a successful software career.
          </p>

          <div className="brand-line"></div>

          <div className="feature-list">
            <div><span>✓</span> 100% Practical, Hands-on Training</div>
            <div><span>✓</span> Industry Recognized Certification</div>
            <div><span>✓</span> Dedicated Placement & Career Support</div>
            <div><span>✓</span> Lifetime Access to Learning Resources</div>
          </div>
        </div>

        <div className="signup-code">
          &lt;/&gt;
        </div>
      </div>

      {/* Right Side */}
      <div className="signup-section">
        <div className="signup-card">
          <Link to="/">
            <img src="/logo.png" alt="MissTech" className="signup-logo" />
          </Link>

          <h2>Create Account</h2>
          <p className="signup-subtitle">Create your MissTech student account to get started</p>

          {errorMessage && <div className="auth-alert error">{errorMessage}</div>}
          {successMessage && <div className="auth-alert success">{successMessage}</div>}

          <form onSubmit={handleSubmit}>
            <div className="two-inputs">
              <div className="form-group">
                <label>Full Name</label>
                <div className="input-wrapper">
                  <span>👤</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <div className="input-wrapper">
                  <span>📱</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <span>✉</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <span>🔒</span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <div className="input-wrapper">
                <span>🔐</span>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            <div className="terms">
              <input type="checkbox" id="terms" required defaultChecked />
              <label htmlFor="terms">
                I agree to the <a href="#terms" onClick={(e) => e.preventDefault()}>Terms & Conditions</a> and <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
              </label>
            </div>

            <button type="submit" className="create-btn" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <div className="divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <button className="social-btn" onClick={() => alert("Social sign-up will be enabled in production!")}>
            <span className="google-icon">G</span>
            Sign up with Google
          </button>

          <p className="login-text">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>

          <p className="login-text" style={{ marginTop: "10px" }}>
            <Link to="/" style={{ color: "#64748b", fontSize: "13px" }}>← Back to Homepage</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
