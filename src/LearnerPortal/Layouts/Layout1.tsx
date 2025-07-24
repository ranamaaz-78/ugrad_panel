import './Layout1.scss';
import logo from '../../assets/learner_portal/layout/logo.svg';
import { Link } from 'react-router-dom';

import dashboard from '../../assets/learner_portal/layout/sidebar1/dashboard.svg';
import my_programs from '../../assets/learner_portal/layout/sidebar1/my_programs.svg';
import skill_drill from '../../assets/learner_portal/layout/sidebar1/skill_drill.svg';
import arena from '../../assets/learner_portal/layout/sidebar1/arena.svg';
import mentorship from '../../assets/learner_portal/layout/sidebar1/mentorship.svg';
import setting from '../../assets/learner_portal/layout/sidebar1/setting.svg';


export default function Layout1() {
  return (
    <div className="ugrad-sidebar-1">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navigation">
          <ul className="navigation-ul">
            <li>
              <Link to="/" className='active'>
                <img src={dashboard} alt="" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/" className=''>
                <img src={my_programs} alt="" />
                My Programs
              </Link>
            </li>
            <li className='disabled'>Coming Soon</li>
            <li>
              <Link to="/" className=''>
                <img src={skill_drill} alt="" />
                Skill Drills
              </Link>
            </li>
            <li>
              <Link to="/" className=''>
                <img src={arena} alt="" />
                Arena 
              </Link>
            </li>
            <li>
              <Link to="/" className=''>
                <img src={mentorship} alt="" />
                Mentorships
              </Link>
            </li>
            <li className='last'>
              <Link to="/" className='active'>
                <img src={setting} alt="" />
                Contact Support
              </Link>
            </li>
            

          </ul>
        </div>
      </div>
    </div>
  )
}
