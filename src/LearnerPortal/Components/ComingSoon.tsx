import './ComingSoon.scss';
import coming_soon from '../../assets/learner_portal/coming_soon/soom_img.svg';

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div>
      <div className="coming-soon">
        <img src={coming_soon} alt="Coming Soon" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
