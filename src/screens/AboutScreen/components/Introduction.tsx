import { useRef, useState } from "react";
import { Images } from "../../../constants/images";
import { FaPlay } from "react-icons/fa";
const Introduction = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoClick = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="w-full py-[50px] md:px-10 px-4">
      <div className="container mx-auto px-4 w-full">
        {/* Text Content */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="w-full md:[50%] lg:w-[60%] md:h-[360px]">
            <div className="w-full">
              <h2 className="font-sans font-semibold text-[30px] sm:text-[36px] md:text-[40px] lg:text-[48px] text-left text-[#113025]">
                What is UGRAD?
              </h2>
              <img
                className="w-full md:w-[90%] lg:w-[60%] h-auto mt-[20px] md:mt-[55px] "
                src={Images.AboutUsLogo}
                alt="About Us Logo"
              />
            </div>
          </div>
          <div className="w-full md:[50%] lg:w-[40%]  md:h-[360px] pt-2 md:pt-0">
            <p className=" font-sans text-[16px] sm:text-[18px] leading-[22px] sm:leading-[24px]   text-justify text-[#6C737F] font-normal ">
              UGRAD is a next-generation learning ecosystem designed to equip
              learners with the practical, in-demand skills they need to thrive
              in a fast-evolving, AI-first world. Our platform blends structured
              learning, real-world projects, and mentorship to help individuals
              not just learn—but grow into the professionals they aspire to be.
            </p>
            <p className="mt-[20px] font-sans text-[16px] sm:text-[18px] leading-[22px] sm:leading-[24px]   text-justify text-[#6C737F] font-normal ">
              We believe education should be outcome-driven. That’s why every
              course, every mentor session, and every tool we build is focused
              on one goal: career growth.Whether you're a student, a working
              professional, or someone looking to pivot into tech, UGRAD gives
              you the roadmap, resources, and community to accelerate your
              journey
            </p>
          </div>
        </div>
        {/* Video Content */}
        <div className="w-full rounded-[20px] relative overflow-hidden mt-[30px]">
          <div className="w-full h-full top-0 left-0 flex justify-center items-center right-0 bottom-0 absolute z-20 ">
            {!isVideoPlaying ? (
              <div
                onClick={handleVideoClick}
                className="flex bg-[rgba(255,255,255,0.8)] hover:bg-[rgba(255,255,255,0.9)] cursor-pointer items-center justify-center px-[16px] py-[8px] rounded-full "
              >
                <FaPlay className="text-[#28303F] mr-[8px]" />
                <p className="text-[14px] text-center">Play Video</p>
              </div>
            ) : null}
          </div>
          <div className="w-[100%] h-full flex justify-center items-center">
            <video
              ref={videoRef}
              className="h-auto w-full !max-h-[740px]  object-fill"
              controls={false}
              muted
              onPause={() => setIsVideoPlaying(false)}
            >
              <source src={Images.AboutUsVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
