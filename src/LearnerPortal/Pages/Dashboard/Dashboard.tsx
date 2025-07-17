import './Dashboard.scss'

import banner from '../../../assets/learner_portal/dashboard/banner-img.svg'
import Streaks from '../../Components/Streaks'
import LeaderBoard from '../../Components/LeaderBoard'

import stat_1 from '../../../assets/learner_portal/dashboard/stat_1.svg';
import stat_2 from '../../../assets/learner_portal/dashboard/stat_2.svg';
import stat_3 from '../../../assets/learner_portal/dashboard/stat_3.svg';

import empty_lg from '../../../assets/learner_portal/empty/document_empty_lg.svg';
import empty from '../../../assets/learner_portal/empty/document_empty.svg';

export default function Dashboard() {
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
        <div className="col-md-9">
          <Streaks />

          <div className="row">
            <div className="col-md-4">
              <div className="stat-box orange">
                <div className="first">
                  <span>Enrolled Programs</span>
                  <h2>--</h2>
                </div>
                <img src={stat_1} alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-box blue">
                <div className="first">
                  <span>In-Progress</span>
                  <h2>--</h2>
                </div>
                <img src={stat_2} alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-box green">
                <div className="first">
                  <span>Completed</span>
                  <h2>--</h2>
                </div>
                <img src={stat_3} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <LeaderBoard />
        </div>
      </div>

      <div className="row">
        <div className="col-md-7">
          <div className="ugrad-card">
            <div className="header">
              <h1 className="title">Continue Your Learning Journey</h1>
            </div>
            <div className="body">
              <div className="empty">
                <img src={empty_lg} alt="" />
                <span>You haven’t enrolled in any program yet.</span>
                <a href="">Explore Programs</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="ugrad-card">
            <div className="header">
              <h1 className="title">Weekly Live Q&A Section</h1>
            </div>
            <div className="body">
              <div className="empty">
                <img src={empty} alt="" />
                <span>No Q&A session scheduled yet. Stay tuned for <br /> the next one!</span>
              </div>
            </div>
          </div>
          <div className="ugrad-card">
            <div className="header">
              <h1 className="title">Weekly Live Q&A Section</h1>
            </div>
            <div className="body">
              <div className="empty">
                <img src={empty} alt="" />
                <span>No events or masterclasses are currently scheduled. Stay <br /> tuned for upcoming learning opportunities!</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
