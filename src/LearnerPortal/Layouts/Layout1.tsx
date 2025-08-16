import './Layout1.scss';
import logo from '../../assets/learner_portal/layout/logo.svg';
import { Link, useLocation } from 'react-router-dom';

import dashboard from '../../assets/learner_portal/layout/sidebar1/dashboard.svg';
import my_programs from '../../assets/learner_portal/layout/sidebar1/my_programs.svg';
import skill_drill from '../../assets/learner_portal/layout/sidebar1/skill_drill.svg';
import arena from '../../assets/learner_portal/layout/sidebar1/arena.svg';
import mentorship from '../../assets/learner_portal/layout/sidebar1/mentorship.svg';
import setting from '../../assets/learner_portal/layout/sidebar1/setting.svg';
// import menu_opener from '../../assets/learner_portal/layout/menu_opener.svg';

interface Layout1Props {
  sidebarOpen: boolean;
  onMenuClick: () => void;

}

export default function Layout1({ sidebarOpen, onMenuClick }: Layout1Props) {
  const location = useLocation();
  return (
    <div className={`ugrad-sidebar-1 ${sidebarOpen ? 'open' : ''}`}>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" />
          <span
            className='menu-opener'
            onClick={onMenuClick}
            role="button"
            tabIndex={0}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12H3M21 6H3M15 18H3" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </span>
        </div>
        <div className="navigation">
          <ul className="navigation-ul">
            <li>
              <Link to="/admin/" className={location.pathname === '/admin/' ? 'active' : ''}>
                <img src={dashboard} alt="" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/my-programs" className={location.pathname === '/admin/my-programs' ? 'active' : ''}>
                <img src={my_programs} alt="" />
                My Programs
              </Link>
            </li>
            <li className='disabled'>Coming Soon</li>
            <li>
              <Link to="/admin/skill-drills" className={location.pathname === '/admin/skill-drills' ? 'active' : ''}>
                <img src={skill_drill} alt="" />
                Skill Drills
              </Link>
            </li>
            <li>
              <Link to="/admin/arena" className={location.pathname === '/admin/arena' ? 'active' : ''}>
                <img src={arena} alt="" />
                Arena
              </Link>
            </li>
            <li>
              <Link to="/admin/mentorships" className={location.pathname === '/admin/mentorships' ? 'active' : ''}>
                <img src={mentorship} alt="" />
                Mentorships
              </Link>
            </li>
            <li className='last'>
              <Link to="/admin/" className='active'>
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
