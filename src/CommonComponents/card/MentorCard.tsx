import { useRef, useState } from "react";
import { FaLinkedin, FaPause, FaPlay } from "react-icons/fa";

interface MentorCardProps {
  className?: string;
  description?: string;
  dpImageURL: string;
  position: string;
  videoURL?: string;
  linkedInURL?: string;
  name: string;
}

const MentorCard = (props: MentorCardProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoPlay = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  const handleVideoPause = () => {
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  return (
    <div
      onMouseOver={() => setIsVideoHovered(true)}
      onMouseLeave={() => setIsVideoHovered(false)}
      className={`relative ${props.className} rounded-[20px] ${
        props.videoURL ? "" : "p-[24px]"
      }  overflow-hidden min-h-[385px] h-full flex justify-between flex-col bg-white`}
    >
      <div className=" w-full h-full absolute  z-10">
        {!isVideoPlaying && props.videoURL && (
          <div className=" absolute w-full h-full flex justify-center items-center  z-30">
            <div
              onClick={handleVideoPlay}
              className="flex bg-[rgba(255,255,255,0.8)]  hover:bg-[rgba(255,255,255,0.9)] cursor-pointer items-center justify-center px-[16px] py-[8px] w-[80px] h-[80px] rounded-full "
            >
              <FaPlay className="text-white text-[25px] " />
            </div>
          </div>
        )}

        {isVideoHovered && isVideoPlaying ? (
          <>
            <div className="absolute w-full h-full flex justify-center items-center  z-30">
              <div
                onClick={handleVideoPause}
                className="flex bg-[rgba(255,255,255,0.8)] hover:bg-[rgba(255,255,255,0.9)] cursor-pointer items-center justify-center px-[16px] py-[8px] w-[80px] h-[80px] rounded-full "
              >
                <FaPause className="text-white text-[25px] " />
              </div>
            </div>
          </>
        ) : null}

        <video
          ref={videoRef}
          className="w-full h-full  object-fill"
          controls={false}
          muted
          onPause={() => setIsVideoPlaying(false)}
        >
          <source src={props.videoURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {props.description ? (
        <p className=" font-sans font-normal text-[18px] leading-[24px] text-[rgba(77,87,97,1)]">
          {props.description}
        </p>
      ) : (
        <p></p>
      )}
      <div
        className={`w-full relative z-20 bg-transparent ${
          props.videoURL ? "pb-[20px] px-[20px]" : ""
        }`}
      >
        <div className="flex w-full justify-between items-center gap-[8px]">
          <div className="flex gap-[8px] items-center">
            <img
              className="w-[40px] h-[40px] rounded-full "
              src={props.dpImageURL}
              alt="DP"
            />
            <div>
              <p
                className={`${
                  props.videoURL ? "!text-white" : ""
                } font-sans font-medium text-[14px] leading-[20px] text-[rgba(17,48,37,1)]`}
              >
                {props.name}
              </p>
              <p
                className={` ${
                  props.videoURL ? "!text-white" : ""
                } font-sans font-normal text-[10px] leading-[12px] text-[rgba(108,115,127,1)]`}
              >
                {props.position}
              </p>
            </div>
          </div>
          <div>
            <FaLinkedin
              className={`text-[24px] w-[24px] h-[24px] ${
                props.videoURL ? "text-white" : "text-black"
              } `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
