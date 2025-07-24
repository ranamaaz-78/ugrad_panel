import './Profile.scss';

import has from '../../../assets/learner_portal/profile/has.svg';
import dont from '../../../assets/learner_portal/profile/dont.svg';


import PersonalDetails from '../../Components/Profile/PersonalDetails';
import About from '../../Components/Profile/About';
import Resume from '../../Components/Profile/Resume';
import Skill from '../../Components/Profile/Skill';
import SocialLink from '../../Components/Profile/SocialLink';
import Education from '../../Components/Profile/Education';
import WorkExperience from '../../Components/Profile/WorkExperience';
export default function Profile() {
    return (
        <div>
            <div>
                <h1 className="page-title">
                    Settings
                </h1>
            </div>

            <div>
                <nav>
                    <div className="nav nav-tabs profile-nav" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-personal-tab" data-bs-toggle="tab" data-bs-target="#nav-personal" type="button" role="tab" aria-controls="nav-personal" aria-selected="true"> Personal Details <img src={has} alt="" /></button>
                        <button className="nav-link" id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about" type="button" role="tab" aria-controls="nav-about" aria-selected="false">About <img src={has} alt="" /> </button>
                        <button className="nav-link" id="nav-resume-tab" data-bs-toggle="tab" data-bs-target="#nav-resume" type="button" role="tab" aria-controls="nav-resume" aria-selected="false">Resume <img src={dont} alt="" /> </button>
                        <button className="nav-link" id="nav-skills-tab" data-bs-toggle="tab" data-bs-target="#nav-skills" type="button" role="tab" aria-controls="nav-skills" aria-selected="false">Skills <img src={has} alt="" /> </button>
                        <button className="nav-link" id="nav-education-tab" data-bs-toggle="tab" data-bs-target="#nav-education" type="button" role="tab" aria-controls="nav-education" aria-selected="false">Education <img src={dont} alt="" /> </button>
                        <button className="nav-link" id="nav-work-tab" data-bs-toggle="tab" data-bs-target="#nav-work" type="button" role="tab" aria-controls="nav-work" aria-selected="false"> Work Experience<img src={has} alt="" /></button>
                        <button className="nav-link" id="nav-social-tab" data-bs-toggle="tab" data-bs-target="#nav-social" type="button" role="tab" aria-controls="nav-social" aria-selected="false"> Social Link<img src={has} alt="" /></button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-personal" role="tabpanel" aria-labelledby="nav-personal-tab" tabIndex={0}><PersonalDetails/></div>
                    <div className="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab" tabIndex={0}><About/></div>
                    <div className="tab-pane fade" id="nav-resume" role="tabpanel" aria-labelledby="nav-resume-tab" tabIndex={0}><Resume/></div>
                    <div className="tab-pane fade" id="nav-skills" role="tabpanel" aria-labelledby="nav-skills-tab" tabIndex={0}><Skill/></div>
                    <div className="tab-pane fade" id="nav-education" role="tabpanel" aria-labelledby="nav-education-tab" tabIndex={0}><Education/></div>
                    <div className="tab-pane fade" id="nav-work" role="tabpanel" aria-labelledby="nav-work-tab" tabIndex={0}><WorkExperience/></div>
                    <div className="tab-pane fade" id="nav-social" role="tabpanel" aria-labelledby="nav-social-tab" tabIndex={0}><SocialLink/></div>
                </div>

            </div>
        </div>
    )
}
