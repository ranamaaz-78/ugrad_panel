import { useState } from "react";
import "./Authentication.scss";

import facebookIcon from "../../../assets/learner_portal/auth/facebook.svg";
import googleIcon from "../../../assets/learner_portal/auth/google.svg";
import eye from "../../../assets/learner_portal/auth/eye.svg";
import eyeOff from "../../../assets/learner_portal/auth/eye.svg"; // Add this icon if you have it
export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div>
      <div className="form-wrap">
        <form action="">
          <h2>Create Your Account</h2>
          <h6>Enter your details to start learning with UGRAD.</h6>

          <div className="social-signup-wrap">
            <a href="" className="social-signup"><img src={googleIcon} alt="" />Sign Up with Google</a>
            <a href="" className="social-signup"><img src={facebookIcon} alt="" />Sign Up with Facebook</a>
          </div>
          <div className="divider"><span>Or Sign Up with</span></div>
          <div className="row">
            <div className="col-md-6">
              <div className="ugrad-input-form-group">
                <label className="urag-label">First Name</label>
                <input type="text" className="ugrad-input" placeholder="First Name" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="ugrad-input-form-group">
                <label className="urag-label">Last Name</label>
                <input type="text" className="ugrad-input" placeholder="Last Name" />
              </div>
            </div>
          </div>
          <div className="ugrad-input-form-group">
            <label className="urag-label">Email</label>
            <input type="text" className="ugrad-input" placeholder="Email" />
          </div>

          {/* Password */}
          <div className="ugrad-input-form-group password">
            <label className="urag-label">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="ugrad-input"
              placeholder="Enter Password"
            />
            <img
              src={showPassword ? eyeOff : eye}
              className="eye"
              alt="Toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          {/* Confirm Password */}
          <div className="ugrad-input-form-group password">
            <label className="urag-label">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="ugrad-input"
              placeholder="Confirm Password"
            />
            <img
              src={showConfirmPassword ? eyeOff : eye}
              className="eye"
              alt="Toggle confirm password visibility"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>

          <div className="ugrad-checkbox-wrapper" style={{ marginBottom: "20px" }}>
            <label className="ugrad-checkbox-label">
              <input type="checkbox" className="ugrad-checkbox" />
              <span className="custom-checkbox"></span>
              I agree to <a href="">Privacy Policy</a> and <a href="">Term & Conditions</a>
            </label>
          </div>

          <button className="submit-btn">Sign Up</button>

          <p className="auth-bottom-link">Already have an account? <a href="">Login</a></p>

        </form>
      </div>
    </div>
  );
}
