import { useState } from 'react';
import './ModuleAccordion.scss';
import videoIcon from '../../assets/learner_portal/completetd/play-circle.svg';
import chevronDownIcon from '../../assets/learner_portal/completetd/chevron-down.svg';
import clockIcon from '../../assets/learner_portal/completetd/tabler_clock.svg';

interface Lesson {
  title: string;
  duration: string;
  completed: boolean;
}

interface ModuleAccordionProps {
  title: string;
  totalVideos: number;
  completedVideos: number;
  totalDuration: string;
  lessons: Lesson[];
}

export default function ModuleAccordion({
  title,
  totalVideos,
  completedVideos,
  totalDuration,
  lessons: initialLessons,
}: ModuleAccordionProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [lessons, setLessons] = useState<Lesson[]>(initialLessons);

  const toggleLesson = (index: number) => {
    const updatedLessons = [...lessons];
    updatedLessons[index].completed = !updatedLessons[index].completed;
    setLessons(updatedLessons);
  };

  return (
    <div className="module-accordion">
      <div className="module-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="header-top">
          <h4>{title}</h4>
          <span className={`arrow ${isOpen ? 'open' : ''}`}>
            <img src={chevronDownIcon} alt="Toggle module" />
          </span>
        </div>
        <div className="header-info">
          <span>
            <img src={videoIcon} alt="video icon" /> {completedVideos}/{totalVideos} Videos
          </span>
          <span>
            <img src={clockIcon} alt="clock icon" /> {totalDuration}
          </span>
        </div>
      </div>

      {isOpen && (
        <div className="module-body">
          {lessons.map((lesson, index) => (
            <div
              className={`lesson-item ${lesson.completed ? 'completed' : ''}`}
              key={index}
            >
              <label className="ugrad-checkbox-label-project">
                <input
                  className="ugrad-checkbox-project"
                  type="checkbox"
                  checked={lesson.completed}
                  onChange={() => toggleLesson(index)}
                />
                <span className="custom-checkbox-project" />
                {lesson.title}
              </label>

              <span className="lesson-time">
                <img src={clockIcon} alt="Duration" /> {lesson.duration}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
