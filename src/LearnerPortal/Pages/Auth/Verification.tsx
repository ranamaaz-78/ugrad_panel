import React, { useState, useRef, useEffect } from "react";
import "./Authentication.scss";
import slash from "../../../assets/learner_portal/auth/slash.svg";

export default function Verification() {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);
    const [timer, setTimer] = useState(30);

    // Countdown timer
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Handle input changes
    const handleChange = (e, index) => {
        const value = e.target.value;
        if (!/^[0-9]?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    // Handle backspace
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div>
            <div className="form-wrap">
                <form className='text-center'>
                    <h2>Enter Verification Code</h2>
                    <h6>We've sent a 6-digit OTP to your email address [Learner's Email Address]. Please enter it below to verify your account.</h6>

                    <div style={{ marginBottom: "30px", marginTop: "25px" }}>
                        <div className="otp-wrap">
                            {otp.slice(0, 3).map((digit, i) => (
                                <input
                                    key={i}
                                    type="text"
                                    className={`otp-input ${digit ? "filled" : ""}`}
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(e, i)}
                                    onKeyDown={(e) => handleKeyDown(e, i)}
                                    ref={(el) => (inputRefs.current[i] = el)}
                                />
                            ))}
                            <img src={slash} alt="slash" />
                            {otp.slice(3, 6).map((digit, i) => (
                                <input
                                    key={i + 3}
                                    type="text"
                                    className={`otp-input ${digit ? "filled" : ""}`}
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(e, i + 3)}
                                    onKeyDown={(e) => handleKeyDown(e, i + 3)}
                                    ref={(el) => (inputRefs.current[i + 3] = el)}
                                />
                            ))}
                        </div>

                    </div>

                    <button className="submit-btn" type="submit">Verify OTP</button>
                    <p className="auth-bottom-link">
                        Didn’t receive the email?{" "}
                        {timer > 0 ? (
                            <span>{timer}s</span>
                        ) : (
                            <span className="resend-btn" onClick={() => setTimer(30)}>Resend</span>
                        )}
                    </p>
                </form>
            </div>
        </div>
    );
}
