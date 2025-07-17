import { useState } from "react";
import "./Authentication.scss";

import eye from "../../../assets/learner_portal/auth/eye.svg";
import eyeOff from "../../../assets/learner_portal/auth/eye.svg"; // Add this icon if you have it
export default function SetNewPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    return (
        <div>
            <div className="form-wrap">
                <form action="">
                    <h2>Set a New Password</h2>
                    <h6>Create a strong password to secure your account.</h6>

                    <div style={{ marginBottom: "30px", marginTop: "25px" }}>
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
                    </div>

                    <button className="submit-btn">Update Password</button>


                </form>
            </div>
        </div>
    )
}
