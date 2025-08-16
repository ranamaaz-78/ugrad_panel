// import React from 'react';
import './ProgramDetail.scss';
import pdf from '../../../assets/learner_portal/program/pdf.svg';
import download from '../../../assets/learner_portal/program/download.svg';

export default function Resources() {
  return (
    <div>
      <div className="resource-body">
        <div className="resource">
          <div className="first">
            <img src={pdf} alt="" />
            <h2>Getting_Started_Guide.pdf</h2>
          </div>
          <a href="" className='download'><img src={download} alt="" /></a>
        </div>
        <div className="resource">
                  <div className="first">
                    <img src={pdf} alt="" />
                    <h2>Getting_Started_Guide.pdf</h2>
                  </div>
                  <a href="" className='download'><img src={download} alt="" /></a>
                </div>
      </div>
    </div>
  )
}
