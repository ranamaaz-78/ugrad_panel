import { useEffect, useRef } from "react";
import { CgCheck } from "react-icons/cg";

interface ThankYouPopUpProps {
  handleClose: () => void;
}

const ThankYouPopUp = ({ handleClose }: ThankYouPopUpProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden"; // prevent background scroll
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div
        ref={modalRef}
        className="p-6 md:p-10 lg:p-14 bg-white rounded-[10px] shadow-lg max-w-[650px] w-full flex flex-col items-center"
      >
        <div className="w-[70px] h-[70px] rounded-full bg-green-600 flex items-center justify-center mb-10">
          <CgCheck className="text-white w-[70px] h-[70px]" />
        </div>
        <h4 className="text-center text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-[120%] font-sans mb-4">
          Thank You for Joining the Waitlist!
        </h4>
        <p className="text-center text-[16px] leading-[22px] text-gray-500 font-sans">
          You’re officially on the path to upgrading your skills. We’ve added
          you to the list and will notify you as soon as the program goes live.
        </p>
      </div>
    </div>
  );
};

export default ThankYouPopUp;
