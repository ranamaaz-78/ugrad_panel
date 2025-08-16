import './Certifications.scss';
import { useState } from 'react';

import empty_lg from '../../../assets/learner_portal/empty/document_empty_lg.svg';
import certificate_card from '../../../assets/learner_portal/certificate/certificate_card.svg';


export default function Certifications() {
    const [showEmptySections, setShowEmptySections] = useState(false);

    const handleEmptyClick = () => setShowEmptySections(false);
    return (
        <div>
            <div>
                <h1 className="page-title">
                    Certifications
                </h1>
            </div>

            {showEmptySections ? (
                <div className="empty">
                    <img src={empty_lg} alt="" />
                    <h2>You haven’t enrolled in any programs yet.</h2>
                    <span>Start your learning journey by enrolling in a program.</span>
                    <button onClick={handleEmptyClick}>Explore Programs</button>
                </div>
            ) : (
                <div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="certification-card">
                                 <div className="first">
                                <div className='wrap'>
                                    <div className='sub-wrap'>
                                        <div className="program-banner">
                                            <img src={certificate_card} alt="" />
                                        </div>
                                    </div>
                                    <div className='details'>
                                        <div>
                                            <h1 className='heading'>Full Stack Development Bootcamp</h1>
                                        </div>
                                        <div className="points">
                                            <div className="point">
                                                <p>Certificate Status</p>
                                                <span className='status earned'>Earned</span>
                                            </div>
                                            <div className="point">
                                                <p>Date Earned</p>
                                                <h3>15/04/2025</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="last">
                                <a href="" className='cancel-btn'>Download</a>
                                <a href="" className='save-btn'>View Certificate</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="certification-card">
                                 <div className="first">
                                <div className='wrap'>
                                    <div className='sub-wrap'>
                                        <div className="program-banner">
                                            <img src={certificate_card} alt="" />
                                        </div>
                                    </div>
                                    <div className='details'>
                                        <div>
                                            <h1 className='heading'>Generative AI for Marketers</h1>
                                        </div>
                                        <div className="points">
                                            <div className="point">
                                                <p>Certificate Status</p>
                                                <span className='status in-progress'>In Progress</span>
                                            </div>
                                            <div className="point">
                                                <p>Date Earned</p>
                                                <h3>---</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="last">
                                <a href="" className='cancel-btn disabled w-100'>Keep Learning</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
