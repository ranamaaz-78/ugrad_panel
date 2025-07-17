import React, { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

interface MediaCardProps {
  id: number;
  authorName: string;
  authorProfession?: string;
  textContent?: string;
  videoUrl?: string;
  thumbnail?: string;
  avatarImage?: string;
}

const MediaCard: React.FC<MediaCardProps> = ({
  id,
  authorName,
  authorProfession,
  textContent,
  videoUrl,
  thumbnail,
  avatarImage,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  // Odd ID shows text content
  if (id % 2 !== 0) {
    return (
      <div className="bg-white rounded-lg border flex flex-col justify-between items-center p-6 w-[356px] h-[384px]">
        <p className="text-gray-600">{textContent}</p>
        <div className="flex justify-between items-center w-full gap-2">
          <div className="flex gap-2">
            {/* Avatar Image */}
            <div className="w-10 h-10 rounded-full overflow-hidden">
              {avatarImage && (
                <img
                  src={avatarImage}
                  alt={authorName}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-sans font-semibold text-primary-darkGreen">
                {authorName}
              </p>
              <p className="text-[10px] font-sans font-normal text-brand-grayNatural500">
                {authorProfession}
              </p>
            </div>
          </div>
          <IoLogoLinkedin fontSize={24} />
        </div>
      </div>
    );
  }

  // Even ID shows video with play button
  return (
    <div className="bg-white rounded-lg border overflow-hidden relative w-[356px] h-[384px]">
      {!isPlaying ? (
        <div
          className="w-full h-full bg-cover bg-center flex flex-col justify-between"
          style={{ backgroundImage: `url(${thumbnail})` }}
        >
          {/* Overlay with author name */}
          <div className="absolute bottom-0 w-full p-4">
            <div className="flex justify-between items-center w-full gap-2">
              <div className="flex gap-2">
                {/* Avatar Image */}
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  {avatarImage && (
                    <img
                      src={avatarImage}
                      alt={authorName}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sm font-sans font-semibold text-white">
                    {authorName}
                  </p>
                  <p className="text-[10px] font-sans font-normal text-white">
                    {authorProfession}
                  </p>
                </div>
              </div>
              <IoLogoLinkedin fontSize={24} color="white" />
            </div>
          </div>

          {/* Play button centered */}
          <div className="flex-1 flex items-center justify-center">
            <button
              onClick={handlePlayClick}
              className="bg-white bg-opacity-80 rounded-full p-4 hover:bg-opacity-100 transition-all"
            >
              <FaPlay className="text-gray-800 text-2xl" />
            </button>
          </div>
        </div>
      ) : (
        <video
          ref={videoRef}
          src={videoUrl}
          controls
          className="w-full h-full object-cover"
          onEnded={() => setIsPlaying(false)}
          onPause={handlePause}
        />
      )}
    </div>
  );
};

export default MediaCard;
