import './ProgramSidebar.scss';
import logo from '../../../assets/learner_portal/layout/logo_program.svg';
// import video from '../../../assets/learner_portal/completetd/play-circle.svg';
// import Accordion from 'react-bootstrap/Accordion';
import ModuleAccordion from '../../Components/ModuleAccordion';


export default function ProgramSidebar() {
  return (
    <div>
      <div className="program-sidebar">
        <div className='logo'>
          <img src={logo} alt="" />
        </div>
        <div className="stack-stats-card">
          <h4 className='heading'>Full Stack Development Bootcamp</h4>
          <div className="stack-wrap">
            <div className="stack">
              <p>Modules</p>
              <span>06/12</span>
            </div>
            <div className="stack">
              <p>Progress</p>
              <span>45% Completed</span>
            </div>
            <div className="stack">
              <p>Status</p>
              <span>In-Progress</span>
            </div>
            <div className="stack">
              <p>Last Active</p>
              <span>Today</span>
            </div>
            <div className="stack">
              <p>Enrolled Date</p>
              <span>15/04/2025</span>
            </div>
          </div>
          <a href="" className='get-started mt-2'>Get Started</a>
        </div>
        <h1 className="sidebar-label">
          Modules & Projects
        </h1>
        <div>
          <ModuleAccordion
            title="Module 1: React Basics"
            completedVideos={4}
            totalVideos={10}
            totalDuration="4 hours"
            lessons={[
              { title: 'Intro to React', duration: '35min', completed: true },
              { title: 'State Management', duration: '35min', completed: false },
              { title: 'Intro to React', duration: '35min', completed: false },
              { title: 'Intro to React', duration: '35min', completed: false },
            ]}
          />
          <ModuleAccordion
            title="Module 1: React Basics"
            completedVideos={4}
            totalVideos={10}
            totalDuration="4 hours"
            lessons={[
              { title: 'Intro to React', duration: '35min', completed: true },
              { title: 'State Management', duration: '35min', completed: false },
              { title: 'Intro to React', duration: '35min', completed: false },
              { title: 'Intro to React', duration: '35min', completed: false },
            ]}
          />
          <ModuleAccordion
            title="Module 1: React Basics"
            completedVideos={4}
            totalVideos={10}
            totalDuration="4 hours"
            lessons={[
              { title: 'Intro to React', duration: '35min', completed: true },
              { title: 'State Management', duration: '35min', completed: false },
              { title: 'Intro to React', duration: '35min', completed: false },
              { title: 'Intro to React', duration: '35min', completed: false },
            ]}
          />
        </div>

      </div>


    </div>
  )
}
