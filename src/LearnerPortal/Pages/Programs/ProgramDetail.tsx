// import React from 'react'
import { useState } from 'react';
import ConfettiModal from '../../Components/ConfettiModal';

import ProgramSidebar from './ProgramSidebar';
import './ProgramDetail.scss';
import video from '../../../assets/learner_portal/program/program_banner.png';
import BootcampContent from './BootcampContent';
import {
  introduction,
  learningObjectivesContent,
  conceptsCoveredContent,
  whatsNextContent
} from './bootcampModule1Content';
import Resources from './Resources';

export default function ProgramDetail() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <ProgramSidebar />
      <div className="program-content-container">
        <div className="program-title">
          <div>
            <h2>Full Stack Development Bootcamp</h2>
            <p>Learn Digital Marketing At Your Own Pace</p>
          </div>
          <div>
            <span>3/10 Videos Completed</span>
          </div>
        </div>
        <div className="video-section">
          <img src={video} alt="" />
        </div>
        <div>
          <nav>
            <div className="nav nav-tabs profile-nav program" id="nav-tab" role="tablist">
              <button className="nav-link active" id="nav-overview-tab" data-bs-toggle="tab" data-bs-target="#nav-overview" type="button" role="tab" aria-controls="nav-overview" aria-selected="true">Overview</button>
              <button className="nav-link" id="nav-resources-tab" data-bs-toggle="tab" data-bs-target="#nav-resources" type="button" role="tab" aria-controls="nav-resources" aria-selected="false">Resources </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-overview" role="tabpanel" aria-labelledby="nav-personal-tab" tabIndex={0}>
              <BootcampContent {...introduction} />
              <BootcampContent {...learningObjectivesContent} />
              <BootcampContent {...conceptsCoveredContent} />
              <BootcampContent {...whatsNextContent} />
            </div>
            <div className="tab-pane fade" id="nav-resources" role="tabpanel" aria-labelledby="nav-about-tab" tabIndex={0}><Resources /></div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="d-flex align-items-center justify-content-end gap-2">
            <button type="button" className='cancel-btn program-btn'>Previous</button>
            <button type="submit" className='save-btn program-btn' onClick={() => setShow(true)}>Mark As Completed</button>
          </div>
        </div>
      </div>
      <ConfettiModal
        show={show}
        onHide={() => setShow(false)}
        message="You have earned <span>+25</span> points — Keep it up!"
      />
    </div>
  )
}
