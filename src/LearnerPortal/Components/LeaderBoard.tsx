import './LeaderBoard.scss';

import gold from '../../assets/learner_portal/components/leader_board/1.svg';
import silver from '../../assets/learner_portal/components/leader_board/2.svg';
import bronze from '../../assets/learner_portal/components/leader_board/3.svg';

import p_1 from '../../assets/learner_portal/components/leader_board/1_pic.svg';
import p_2 from '../../assets/learner_portal/components/leader_board/2_pic.svg';
import p_3 from '../../assets/learner_portal/components/leader_board/3_pic.svg';
import p_4 from '../../assets/learner_portal/components/leader_board/4_pic.svg';


export default function LeaderBoard() {
    return (
        <div>
            <div className="leader-board">
                <div className="board">
                    <div className="wrap">
                        <h5>UGRAD Leaderboard</h5>
                        <p>Climb through activities, earn points, and let your learning journey speak for itself. The more you learn, the higher you rise</p>
                    </div>

                    <div className="positions">
                        <div className="position second">
                            <div className="img second">
                                <div className="profile">
                                    <img src={p_2} alt="" />
                                </div>
                                <img src={silver} className='medal' alt="" />
                                <span className="rank">2nd</span>
                            </div>
                            <h3 className='name'>John Wick</h3>
                            <div className="point">
                                <span>800 pt</span>
                            </div>
                        </div>
                        <div className="position first">
                            <div className="img">
                                <div className="profile">
                                    <img src={p_1} alt="" />
                                </div>
                                <img src={gold} className='medal' alt="" />
                                <span className="rank">1st</span>
                            </div>
                            <h3 className='name'>Zeeshan</h3>
                            <div className="point">
                                <span>800 pt</span>
                            </div>
                        </div>
                        <div className="position third">
                            <div className="img">
                                <div className="profile">
                                    <img src={p_3} alt="" />
                                </div>
                                <img src={bronze} className='medal' alt="" />
                                <span className="rank">3rd</span>
                            </div>
                            <h3 className='name'>Noraiz</h3>
                            <div className="point">
                                <span>800 pt</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="board-detail">
                    <ul>
                        <li>
                            <div className='first'>
                                <span className='rank'>4th</span>
                                <div className='img'><img src={p_4} alt="" /></div>
                                <p className="name">James Bond</p>
                            </div>
                            <span className='point'>600 pt</span>
                        </li>
                        <li>
                            <div className='first'>
                                <span className='rank'>5th</span>
                                <div className='img'><img src={p_4} alt="" /></div>
                                <p className="name">James Bond</p>
                            </div>
                            <span className='point'>569 pt</span>
                        </li>
                        <li className='active'>
                            <div className='first'>
                                <span className='rank'>61th</span>
                                <div className='img'><img src={p_4} alt="" /></div>
                                <p className="name">You</p>
                            </div>
                            <span className='point'>100 pt</span>
                        </li>
                    </ul>
                </div>
                <div className="footer">
                    <a href="">Review Points Policy</a>
                </div>
            </div>
        </div>
    )
}
