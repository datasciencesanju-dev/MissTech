import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("/api/login/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });
      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message || "Login successful!");
        localStorage.setItem("user", JSON.stringify(data.user || { email: formData.email }));
        setTimeout(() => {
          navigate("/");
        }, 1200);
      } else {
        setErrorMessage(data.message || "Invalid email or password");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Could not connect to backend server. Ensure backend is running on port 7000.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-brand">
        <Link to="/">
          <img src="/logo.png" alt="MissTech Logo" className="brand-logo" />
        </Link>

        <div className="brand-content">
          <h1>
            Code Today,
            <br />
            <span>Create Tomorrow.</span>
          </h1>

          <p>
            Build your skills, explore breakthrough technology,
            and supercharge your career with MissTech.
          </p>
        </div>

        <div className="code-box">
          <span>&lt;/&gt;</span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-section">
        <div className="login-card">
          <Link to="/">
            <img src="/logo.png" alt="MissTech" className="mobile-logo" />
          </Link>

          <h2>Welcome Back!</h2>
          <p className="login-subtitle">Login to your MissTech student portal</p>

          {errorMessage && <div className="auth-alert error">{errorMessage}</div>}
          {successMessage && <div className="auth-alert success">{successMessage}</div>}

          <form onSubmit={handleSubmit}>
            <div className="login-form-group">
              <label>Email Address</label>
              <div className="login-input-wrapper">
                <span className="login-input-icon">✉</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  required
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value
                    })
                  }
                />
              </div>
            </div>

            <div className="login-form-group">
              <label>Password</label>
              <div className="login-input-wrapper">
                <span className="login-input-icon">🔒</span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  required
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value
                    })
                  }
                />
                <button
                  type="button"
                  className="show-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            <div className="forgot-password">
              <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Please contact institute support to reset password."); }}>
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Signing In..." : "Login"}
            </button>
          </form>

          <div className="divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <button className="social-btn" onClick={() => alert("Social login will be integrated in production!")}>
            <span className="google-icon">G</span>
            Continue with Google
          </button>

          <button className="social-btn" onClick={() => alert("Social login will be integrated in production!")}>
            <span className="microsoft-icon">⊞</span>
            Continue with Microsoft
          </button>

          <p className="signup-text">
            Don't have an account?
            <Link to="/signup"> Sign Up</Link>
          </p>

          <p className="signup-text" style={{ marginTop: "12px" }}>
            <Link to="/" style={{ color: "#64748b", fontSize: "13px" }}>← Back to Homepage</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
