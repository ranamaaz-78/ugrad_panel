// import { useState } from 'react';
import './Dashboard.scss';

import banner from '../../../assets/learner_portal/dashboard/banner-img.svg';
import Streaks from '../../Components/Streaks';
import LeaderBoard from '../../Components/LeaderBoard';

import stat_1 from '../../../assets/learner_portal/dashboard/stat_1.svg';
import stat_2 from '../../../assets/learner_portal/dashboard/stat_2.svg';
import stat_3 from '../../../assets/learner_portal/dashboard/stat_3.svg';

// import empty_lg from '../../../assets/learner_portal/empty/document_empty_lg.svg';
// import empty from '../../../assets/learner_portal/empty/document_empty.svg';

import courses from '../../../assets/learner_portal/dashboard/courses.svg';
import CircularProgressBar from '../../Components/CircularProgressBar';

import calender from '../../../assets/learner_portal/dashboard/calendar.svg';
import profile_sm from '../../../assets/learner_portal/dashboard/profile_sm.svg';


export default function Dashboard() {
  // 👇 Single state to hide/show all empty divs
  // const [showEmptySections, setShowEmptySections] = useState(false);

  return (
    <div>
      <div className="dashboard-banner">
        <div className="banner-wrap">
          <h1 className="banner-title">Welcome, Noraiz</h1>
          <p className='banner-text'>Keep learning, keep growing — every step you take today brings <br /> you closer to the professional you aspire to be.</p>
        </div>
        <div className="banner-img">
          <img src={banner} alt="" />
        </div>
      </div>

      <div className="row">
        <div className="col-xl-8 col-lg-7 col-md-12">
          <Streaks />
          <div className="row">
            <div className="col-xl-4 col-lg-12 col-md-12">
              <div className="stat-box orange">
                <div className="first">
                  <span>Enrolled Programs</span>
                  <h2>236</h2>
                </div>
                <img src={stat_1} alt="" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="stat-box blue">
                <div className="first">
                  <span>In-Progress</span>
                  <h2>12</h2>
                </div>
                <img src={stat_2} alt="" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="stat-box green">
                <div className="first">
                  <span>Completed</span>
                  <h2>3256</h2>
                </div>
                <img src={stat_3} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5 col-md-12">
          <LeaderBoard />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-7 col-md-12">
          <div className="ugrad-card">
            <div className="header">
              <h1 className="title">Continue Your Learning Journey</h1>
            </div>
            <div className="body">
              {/* Empty state removed due to unused variable */}

              <div className="dashboard-course-wrap">
                <div className="dashboard-course">
                  <div className="info">
                    <div className="first">
                      <div>
                        <div className="profile">
                          <img src={courses} alt="" />
                        </div>
                      </div>
                      <div>
                        <h3 className="title">Frontend Web Development Bootcamp</h3>
                        <p className="description">Learn strategies, tools, and trends to excel in digital campaigns.</p>
                      </div>
                    </div>
                    <div>
                      <CircularProgressBar percentage={89} />
                    </div>
                  </div>
                  <a href="" className="link-btn mt-3">Resume</a>
                </div>
                <div className="dashboard-course">
                  <div className="info">
                    <div className="first">
                      <div>
                        <div className="profile">
                          <img src={courses} alt="" />
                        </div>
                      </div>
                      <div>
                        <h3 className="title">Digital Marketing 101</h3>
                        <p className="description">Learn strategies, tools, and trends to excel in digital campaigns.</p>
                      </div>
                    </div>
                    <div>
                      <CircularProgressBar percentage={89} />
                    </div>
                  </div>
                  <a href="" className="link-btn mt-3">Resume</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-12">
          <div className="ugrad-card">
            <div className="header">
              <h1 className="title">Weekly Live Q&A Section</h1>
            </div>
            <div className="body">
              {/* Empty state removed due to unused variable */}

              <div className="dashboard-events-wrap">
                <div className="dashboard-event">
                  <div className="first">
                    <span><img src={calender} alt="" /> 31 Mar at 07:00PM</span>
                    <h3>Upcoming Session</h3>
                    <div className="profile">
                      <div className="img"><img src={profile_sm} alt="" /></div>
                      <p>Christopher</p>
                    </div>
                  </div>
                  <div className="last">
                    <h3>01h : 45m</h3>
                    <a href="" className="link-btn">Join Session</a>

                  </div>
                </div>
                <div className="dashboard-event">
                  <div className="first">
                    <span><img src={calender} alt="" /> 31 Mar at 07:00PM</span>
                    <h3>Upcoming Session</h3>
                    <div className="profile">
                      <div className="img"><img src={profile_sm} alt="" /></div>
                      <p>Christopher</p>
                    </div>
                  </div>
                  <div className="last">
                    <h3>01h : 45m</h3>
                    <a href="" className="link-btn">Join Session</a>

                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="ugrad-card">
            <div className="header">
              <h1 className="title">Upcoming Events & Masterclasses</h1>
            </div>
            <div className="body">
              {/* Empty state removed due to unused variable */}

               <div className="dashboard-events-wrap">
                <div className="dashboard-event">
                  <div className="first">
                    <span><img src={calender} alt="" /> 31 Mar at 07:00PM</span>
                    <h3>Mastering GitHub</h3>
                    <div className="profile">
                      <div className="img"><img src={profile_sm} alt="" /></div>
                      <p>Christopher</p>
                    </div>
                  </div>
                  <div className="last">
                    <h3>01h : 45m</h3>
                    <a href="" className="link-btn">Register</a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
