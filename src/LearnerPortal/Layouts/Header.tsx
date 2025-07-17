import './Header.scss'
import profile from '../../assets/learner_portal/layout/profile.svg'
export default function Header() {
    return (
        <div>
            <div className="ugrad-header">
                <div>
                    <h1 className='page-title'>Assignment Feedback</h1>
                </div>
                <div>
                    <div className="profile-dropdown">
                        <div className="profile-img">
                            <img src={profile} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
