import './Auth.scss'
import bannerImg from '../../../assets/learner_portal/auth/auth-frame.svg';
function Auth() {
  return (
    <div className="authBody">
        <div className="wrapper">
          <div className="banner">
            <img src={bannerImg} alt="" />
          </div>
          
        </div>
    </div>
  )
}

export default Auth
