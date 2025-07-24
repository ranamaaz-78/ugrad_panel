import { useState } from "react";
import "./Authentication.scss";

import facebookIcon from "../../../assets/learner_portal/auth/facebook.svg";
import googleIcon from "../../../assets/learner_portal/auth/google.svg";
import eye from "../../../assets/learner_portal/auth/eye.svg";
import eyeOff from "../../../assets/learner_portal/auth/eye.svg"; // Add this icon if you have it

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="form-wrap">
        <form action="">
          <h2>Welcome Back!</h2>
          <h6>Log in to manage tickets, tasks, and your sales pipeline.</h6>

          <div className="social-signup-wrap">
            <a href="" className="social-signup"><img src={googleIcon} alt="" />Sign Up with Google</a>
            <a href="" className="social-signup"><img src={facebookIcon} alt="" />Sign Up with Facebook</a>
          </div>
          <div className="divider"><span>Or Login with</span></div>
          <div className="ugrad-input-form-group">
            <label className="ugrad-label">Email</label>
            <input type="text" className="ugrad-input" placeholder="Email" />
          </div>

          {/* Password */}
          <div className="ugrad-input-form-group password">
            <label className="ugrad-label">Password</label>
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

          <div className="forgot-password-wrap" style={{ marginBottom: "20px" }}>
            <div className="ugrad-checkbox-wrapper" >
              <label className="ugrad-checkbox-label">
                <input type="checkbox" className="ugrad-checkbox" />
                <span className="custom-checkbox"></span>
                Remember me
              </label>
            </div>

            <a href="" className="forgot-password">Forgot Password?</a>
          </div>

          <button className="submit-btn">Login</button>

          <p className="auth-bottom-link">Don’t have an account yet? <a href="">Sign Up</a></p>

        </form>
      </div>
    </div>
  );
}
