import { useEffect, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import confetti from 'canvas-confetti';
import './ConfettiModal.scss';

import check from '../../assets/learner_portal/completetd/check.svg';

interface ConfettiModalProps {
  show: boolean;
  onHide: () => void;
  message: string;
}

const ConfettiModal: React.FC<ConfettiModalProps> = ({ show, onHide, message }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (show && canvasRef.current) {
      const myConfetti = confetti.create(canvasRef.current, {
        resize: true,
        useWorker: true,
      });

      myConfetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  }, [show]);

  return (
    <Modal show={show} onHide={onHide} centered className="confetti-modal-container">
      <Modal.Body className="text-center position-relative p-4">
        {/* Confetti Canvas */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="confetti-modal">
            <div className="mb-4">
            <div className='check'>
                <img src={check} alt="" />
            </div>
          </div>
          <h4 className="confetti-modal-title">Module Completed Successfully!</h4>
          <p className="confetti-modal-message mb-0"  dangerouslySetInnerHTML={{ __html: message }} />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ConfettiModal;
