import './MyProgram.scss';
import { useState } from 'react';


import empty_lg from '../../../assets/learner_portal/empty/document_empty_lg.svg';
import banner from '../../../assets/learner_portal/program/program_banner.png';
import ProgressBar from '../../Components/ProgressBarProps';
export default function MyProgram() {

    const [showEmptySections, setShowEmptySections] = useState(true);

    const handleEmptyClick = () => setShowEmptySections(false);
    return (
        <div>
            <div>
                <h1 className="page-title">
                    Your Enrolled Programs
                </h1>
                <p className='page-title-p'>Continue your learning journey and track your progress here.</p>
            </div>
            <div>
                {showEmptySections ? (
                    <div className="empty">
                        <img src={empty_lg} alt="" />
                        <span>You haven’t enrolled in any programs yet. Ready to start learning?</span>
                        <button onClick={handleEmptyClick}>Explore Programs</button>
                    </div>
                ) : (
                    <div>
                        <div className='enrolled-course-wrap'>
                            <div className="enrolled-course">
                            <div className="first">
                                <div className='wrap'>
                                    <div className='sub-wrap'>
                                        <div className="program-banner">
                                            <img src={banner} alt="" />
                                            <span className='in-progress'>In Progress</span>
                                        </div>
                                    </div>
                                    <div className='details'>
                                        <div>
                                            <h1 className='heading'>Full Stack Development Bootcamp</h1>
                                        </div>
                                        <div className="points">
                                            <div className="point">
                                                <p>Enrollment Date</p>
                                                <h3>15/04/2025</h3>
                                            </div>
                                            <div className="point">
                                                <p>Last Active</p>
                                                <h3>Today</h3>
                                            </div>
                                            <div className="point">
                                                <p>Modules Completed</p>
                                                <h3>5/12</h3>
                                            </div>
                                            <div className="point">
                                                <p>Instructor</p>
                                                <h3><div><div className="avatar"><img src={banner} alt="" /></div> </div>Christopher</h3>
                                            </div>
                                        </div>
                                        <div>
                                            <ProgressBar value={33} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="last">
                                <a href="" className='save-btn'>Resume Learning</a>
                            </div>
                        </div>
                        <div className="enrolled-course">
                            <div className="first">
                                <div className='wrap'>
                                    <div className='sub-wrap'>
                                        <div className="program-banner">
                                            <img src={banner} alt="" />
                                            <span className='in-progress'>In Progress</span>
                                        </div>
                                    </div>
                                    <div className='details'>
                                        <div>
                                            <h1 className='heading'>Graphic Designer Bootcamp</h1>
                                        </div>
                                        <div className="points">
                                            <div className="point">
                                                <p>Enrollment Date</p>
                                                <h3>15/04/2025</h3>
                                            </div>
                                            <div className="point">
                                                <p>Last Active</p>
                                                <h3>Today</h3>
                                            </div>
                                            <div className="point">
                                                <p>Modules Completed</p>
                                                <h3>5/12</h3>
                                            </div>
                                            <div className="point">
                                                <p>Instructor</p>
                                                <h3><div><div className="avatar"><img src={banner} alt="" /></div></div> Christopher</h3>
                                            </div>
                                        </div>
                                        <div>
                                            <ProgressBar value={67} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="last">
                                <a href="" className='save-btn'>Resume Learning</a>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
