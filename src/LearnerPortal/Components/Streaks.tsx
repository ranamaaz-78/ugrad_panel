
import './Streaks.scss'

import streak_lg from '../../assets/learner_portal/components/streaks/streak_lg.svg';
import streak_dark from '../../assets/learner_portal/components/streaks/streak_dark.svg';
import streak_light from '../../assets/learner_portal/components/streaks/streak_light.svg';
import left from '../../assets/learner_portal/components/streaks/left_chevron.svg';
import right from '../../assets/learner_portal/components/streaks/right_chevron.svg';
// import down from '../../assets/learner_portal/components/streaks/down_chevron.svg';
export default function Streaks() {
    return (
        <div>
            <div className="streaks">
                <div className="header">
                    <div>
                        <h1>Learning Streak</h1>
                    </div>
                    <div className="filters-wrap">
                        <button className='filter-btn'><img src={left} alt="" /></button>
                        <div className="select-wrapper">
                            <select name="" id="" className='filter-select'>
                                <option value="">Last 7 days</option>
                                <option value="">This Month</option>
                            </select>
                        </div>
                        <button className='filter-btn'><img src={right} alt="" /></button>
                    </div>
                </div>
                <div className="wrap">
                    <h1 className="streak-heading"><img src={streak_lg} alt="" /> 0 Days Streak</h1>
                </div>
                <div className="streak-data">
                    <div className="streak-wrap">
                        {Array.from({ length: 30 }, (_, i) => (
                            <div className={`streak ${i < 14 ? "active" : ""}`} key={i}>
                                <p>Day {i + 1}</p>
                                <img src={streak_dark} className="dark" alt="" />
                                <img src={streak_light} className="light" alt="" />
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </div>
    )
}
