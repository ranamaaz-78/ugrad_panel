import './Layout1.scss';
import logo from '../../assets/learner_portal/layout/logo.svg';
import { Link } from 'react-router-dom';

import feedback from '../../assets/learner_portal/layout/sidebar1/feedback.svg';
import paraphrasing from '../../assets/learner_portal/layout/sidebar1/paraphrasing.svg';
import ai_teacher from '../../assets/learner_portal/layout/sidebar1/ai_teacher.svg';
import grammer from '../../assets/learner_portal/layout/sidebar1/grammer.svg';
import outline from '../../assets/learner_portal/layout/sidebar1/outline.svg';
import settings from '../../assets/learner_portal/layout/sidebar1/settings.svg';
import summarizer from '../../assets/learner_portal/layout/sidebar1/summarizer.svg';
import text_to_speech from '../../assets/learner_portal/layout/sidebar1/text_to_speech.svg';

export default function Layout1() {
  return (
    <div className="ugrad-sidebar-1">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navigation">
          <ul className="navigation-ul">
            <li className='disabled'>Writing Support Tools</li>
            <li>
              <Link to="/" className='active'>
                <img src={paraphrasing} alt="" />
                Assignment feedback
              </Link>
            </li>
            <li>
              <Link to="/" className=''>
                <img src={feedback} alt="" />
                Paraphrasing
              </Link>
            </li>
            <li>
              <Link to="/" className=''>
                <img src={grammer} alt="" />
                Grammar Checker
              </Link>
            </li>
            <li>
              <Link to="/" className=''>
                <img src={outline} alt="" />
                Outline Generator
              </Link>
            </li>
            <li className='disabled'>Learning Support Tools</li>
            <li>
              <Link to="/" className=''>
                <img src={summarizer} alt="" />
                Summarizer
              </Link>
            </li>
            <li>
              <Link to="/" className=''>
                <img src={text_to_speech} alt="" />
                Text to Speech
              </Link>
            </li>
            <li className='disabled'>Others</li>
            <li>
              <Link to="/" className=''>
                <img src={ai_teacher} alt="" />
                AI Teacher
              </Link>
            </li>
            <li>
              <Link to="/" className=''>
                <img src={settings} alt="" />
                Settings
              </Link>
            </li>

          </ul>
        </div>
        <div className="tracker-wrap">
          <div className="wrap">
            <h3>Usage Tracker</h3>
            <div className="divider"></div>
            <div className="data-wrap">
              <p>Token <span>120/500</span></p>
              <p>Text to speech <span>15/60 Mins</span></p>
              <p>Current plan <span className='plan-badge'>PRO</span></p>
              <Link to="/" className='more mt-1'>Unlock more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
