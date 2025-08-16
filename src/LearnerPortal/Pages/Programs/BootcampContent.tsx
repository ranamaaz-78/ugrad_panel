import './MyProgram.scss';
import React from 'react';
import bullet from '../../../assets/learner_portal/program/bullet_point.svg';

interface BootcampContentProps {
  title: string;
  paragraphs?: string[]; // optional
  lists?: string[]; // optional
}

const BootcampContent: React.FC<BootcampContentProps> = ({
  title,
  paragraphs = [],
  lists = [],
}) => {
  return (
    <section className="program-content">
      <h2 className="program-content-heading">{title}</h2>

      {paragraphs.length > 0 &&
        paragraphs.map((text, index) => (
          <p key={index} className="program-content-p">
            {text}
          </p>
        ))}

      {lists.length > 0 && (
        <ul className='program-content-list'>
          {lists.map((text, index) => (
            <li key={index} className="program-li">
              <img src={bullet} alt="" />
              {text}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default BootcampContent;
