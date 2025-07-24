import { useState } from "react";
import "./Authentication.scss";

import eye from "../../../assets/learner_portal/auth/eye.svg";
import eyeOff from "../../../assets/learner_portal/auth/eye.svg"; // Add this icon if you have it
export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <div className="form-wrap">
                <form action="">
                    <h2>Change Your Password</h2>
                    <h6>Keep your account secure by updating your password regularly.</h6>

                    <div style={{ marginBottom: "30px", marginTop: "25px" }}>
                        {/* Password */}
                        <div className="ugrad-input-form-group password">
                            <label className="ugrad-label">Current Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="ugrad-input"
                                placeholder="Enter Current Password"
                            />
                            <img
                                src={showPassword ? eyeOff : eye}
                                className="eye"
                                alt="Toggle password visibility"
                                onClick={() => setShowPassword(!showPassword)}
                            />
                        </div>
                    </div>

                    <button className="submit-btn">Next</button>


                </form>
            </div>
        </div>
    )
}
