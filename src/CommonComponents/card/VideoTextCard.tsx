import React, { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { Images } from "../../constants/images";

interface MediaCardProps {
  id: number;
  authorName: string;
  authorPro: string;
  textContent?: string;
  videoUrl?: string;
  thumbnail?: string;
}

const MediaCard: React.FC<MediaCardProps> = ({
  id,
  authorName,
  authorPro,
  textContent,
  videoUrl,
  thumbnail,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  // Odd ID shows text content
  if (id % 2 !== 0) {
    return (
      <div className="bg-white rounded-lg flex flex-col justify-between p-6 w-[356px] h-[384px] border-2">
        <p className="text-gray-600">{textContent}</p>

        <div className="flex justify-between w-full">
          <div className="flex flex-row gap-6">
            <div>
              <img src={Images.MentorDp} alt="" className="rounded" />
              <p>{authorName}</p>
              <p>{authorPro}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Even ID shows video with play button
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-[356px] h-[384px]">
      {!isPlaying ? (
        <div className="relative">
          {thumbnail && (
            <img
              src={thumbnail}
              alt={authorName}
              className="w-full h-auto object-cover"
            />
          )}
          <button
            onClick={handlePlayClick}
            className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-30 transition hover:bg-opacity-50"
          >
            <div className="bg-white bg-opacity-80 rounded-full p-4">
              <FaPlay className="text-gray-800 text-2xl" />
            </div>
          </button>
        </div>
      ) : (
        <video
          ref={videoRef}
          src={videoUrl}
          controls
          className="w-full"
          onEnded={() => setIsPlaying(false)}
        />
      )}
      <h3 className="text-xl font-bold p-6">{authorName}</h3>
    </div>
  );
};

export default MediaCard;
