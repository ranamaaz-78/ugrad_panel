import React from "react";
import { BsClock } from "react-icons/bs";
import { IoLanguageOutline } from "react-icons/io5";
import { AvatarStack, CustomButton } from "../../../CommonComponents";
import { useNavigate } from "react-router";
interface MarketingCardProps {
  backgroundImage: string;
  title: string;
  duration: string;
  language: string;
  ctaText: string;
  imageText?: string; // New prop for the text on image
}

const MarketingCard: React.FC<MarketingCardProps> = ({
  backgroundImage,
  title,
  duration,
  language,
  ctaText,
  imageText = "Digital Marketing", // Default value
}) => {
  const sampleImages: [string, string, string] = [
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
  ];

  const navigate = useNavigate();

  return (
    <div className="w-full w-max-[384px] rounded-xl overflow-hidden h-[500px] px-4 pt-4 border border-gray-200 shadow-lg bg-white flex flex-col gap-2">
      {title === "" ? (
        <div className="flex items-center justify-center rounded-2xl h-full">
          <p className="text-primary-darkGreen font-semibold text-4xl md:text-5xl font-sans">
            Coming Soon
          </p>
        </div>
      ) : (
        <>
          {/* Image Section with Text */}
          <div className="relative h-60 w-full rounded-2xl overflow-hidden bg-gray-100">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Dark overlay for better text visibility */}
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>

            {/* Text on top-right corner */}
            <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-[56px] shadow-sm">
              <span className="text-xs font-sans text-brand-grayNatural600">
                {imageText}
              </span>
            </div>
          </div>

          {/* Content Section Below Image */}
          <div className="p-2 flex flex-col gap-4">
            {/* Title */}
            <div>
              <h1 className="text-2xl font-semibold text-primary-darkGreen font-sans">
                {title}
              </h1>
            </div>

            {/* Metadata */}
            <div className="flex gap-8 border-t border-t-brand-grayNatural200 border-b border-b-brand-grayNatural200 py-4">
              <p className="flex items-center gap-2 text-lg text-brand-grayNatural600 font-normal font-sans">
                <IoLanguageOutline fontSize={24} />
                {language}
              </p>
              <p className="flex items-center gap-2 text-lg text-brand-grayNatural600 font-normal font-sans">
                <BsClock />
                {duration}
              </p>
            </div>

            {/* Footer with avatars and button */}
            <div className="flex items-center justify-between">
              <AvatarStack imageUrls={sampleImages} size="md" overlap={20} />
              <CustomButton
                label={ctaText}
                background="#113025"
                labelClassName="text-base font-sans"
                onClick={() => navigate("/programs")}
                className="text-white h-12 rounded-md border border-r-8 p-4"
                borderWidth="1"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MarketingCard;
