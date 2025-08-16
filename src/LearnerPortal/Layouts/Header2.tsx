import './Header.scss'
import profile from '../../assets/learner_portal/layout/profile.svg';
import arrow from '../../assets/learner_portal/layout/arrow-left.svg';
export default function Header2() {
    return (
        <div>
            <div className="ugrad-header full">
                <div>
                    <h1 className='page-title'><a href=""><img src={arrow} alt="" /> Back to Enrolled Programs </a></h1>
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
