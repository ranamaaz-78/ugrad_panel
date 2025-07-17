import "./Authentication.scss";

export default function ResetPassword() {
    return (
        <div>
            <div>
                <div className="form-wrap">
                    <form action="">
                        <h2>Reset Your Password</h2>
                        <h6>Enter your email and we'll send you a verification email.</h6>

                        <div style={{ marginBottom: "30px", marginTop: "25px" }}>
                            <div className="ugrad-input-form-group" >
                                <label className="urag-label">Email</label>
                                <input type="text" className="ugrad-input" placeholder="Enter Email Address" />
                            </div>
                        </div>

                        <button className="submit-btn">Send Email</button>

                        <p className="auth-bottom-link">Remember your password? <a href="/admin/login">Login</a></p>

                    </form>
                </div>
            </div>
        </div>
    )
}
