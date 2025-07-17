import { useState, useEffect } from "react";
import { Images } from "../../../constants/images";
import { ProfileCard } from "../../../CommonComponents";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

const OurInstructors = ({
  heading,
  background,
  noOfRow,
}: {
  heading: string;
  background: boolean;
  noOfRow: number;
}) => {
  const teamData = [
    {
      name: "Olivia Rhye",
      image: Images.InstructorImage1,
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit integer massa.",
      LinkedInProfileLink: "/",
      position: "Founder & CEO",
    },
    {
      name: "Phoenix Baker",
      image: Images.InstructorImage2,
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit integer massa.",
      LinkedInProfileLink: "/",
      position: "Engineering Manager",
    },
    {
      name: "Lana Steiner",
      image: Images.InstructorImage3,
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit integer massa.",
      LinkedInProfileLink: "/",
      position: "Product Manager",
    },
    {
      name: "Demi Wilkinson",
      image: Images.InstructorImage4,
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit integer massa.",
      LinkedInProfileLink: "/",
      position: "Frontend Developer",
    },
    {
      name: "Candice Wu",
      image: Images.InstructorImage5,
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit integer massa.",
      LinkedInProfileLink: "/",
      position: "Backend Developer",
    },
    {
      name: "Natali Craig",
      image: Images.InstructorImage6,
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit integer massa.",
      LinkedInProfileLink: "/",
      position: "Product Designer",
    },
    {
      name: "Natali Craig",
      image: Images.InstructorImage6,
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit integer massa.",
      LinkedInProfileLink: "/",
      position: "Product Designer",
    },
    {
      name: "Natali Craig",
      image: Images.InstructorImage6,
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit integer massa.",
      LinkedInProfileLink: "/",
      position: "Product Designer",
    },
    {
      name: "Drew Cano",
      image: Images.InstructorImage7,
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit integer massa.",
      LinkedInProfileLink: "/",
      position: "UX Researcher",
    },
    {
      name: "Orlando Diggs",
      image: Images.InstructorImage8,
      description:
        "Lorem ipsum dolor sit amet consectetur. Velit integer massa.",
      LinkedInProfileLink: "/",
      position: "Customer Success",
    },
  ];
  const [displayConfig, setDisplayConfig] = useState({
    cardsPerRow: 4,
    rows: 2, // Always 2 rows
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        // Large and extra-large: 4 cards per row (8 total)
        setDisplayConfig({ cardsPerRow: 4, rows: noOfRow });
      } else if (width >= 768) {
        // Medium: 3 cards per row (6 total)
        setDisplayConfig({ cardsPerRow: 3, rows: noOfRow });
      } else {
        // Small: 1 card per row (2 total)
        setDisplayConfig({ cardsPerRow: 1, rows: noOfRow });
      }
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardsPerPage = displayConfig.cardsPerRow * displayConfig.rows;
  const totalPages = Math.ceil(teamData.length / cardsPerPage);
  const visibleCards = teamData.slice(
    currentIndex * cardsPerPage,
    (currentIndex + 1) * cardsPerPage
  );

  // Split into exactly 2 rows
  const rows = [];
  for (let i = 0; i < 2; i++) {
    rows.push(
      visibleCards.slice(
        i * displayConfig.cardsPerRow,
        (i + 1) * displayConfig.cardsPerRow
      )
    );
  }

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const canGoNext = currentIndex < totalPages - 1;
  const canGoPrev = currentIndex > 0;

  return (
    <div
      className={`py-8 px-8 sm:px-10  md:px-12 lg:px-24 w-full  ${
        background ? "bg-brand-grayNatural100" : "bg-transparent"
      }`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-semibold mb-8 text-center">
        {heading}
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        {totalPages > 1 && (
          <button
            onClick={prevPage}
            disabled={!canGoPrev}
            className={`absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-md hover:bg-gray-100 transition ${
              !canGoPrev ? "opacity-50 cursor-not-allowed" : "bg-white"
            }`}
            aria-label="Previous"
          >
            <MdOutlineArrowBackIos size={24} />
          </button>
        )}

        {/* Cards Container */}
        <div className="overflow-hidden">
          <div className="space-y-4 md:space-y-6">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`grid ${
                  displayConfig.cardsPerRow === 1
                    ? "grid-cols-1"
                    : displayConfig.cardsPerRow === 3
                    ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                    : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                } gap-4 md:gap-6`}
              >
                {row.map(
                  (member, index) =>
                    member && (
                      <ProfileCard
                        key={`${rowIndex}-${index}-${member.name}`}
                        name={member.name}
                        imageURL={member.image}
                        position={member.position}
                        description={member.description}
                        profileLink={member.LinkedInProfileLink}
                      />
                    )
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        {totalPages > 1 && (
          <button
            onClick={nextPage}
            disabled={!canGoNext}
            className={`absolute -right-8 md:-right-12 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-md hover:bg-gray-100 transition ${
              !canGoNext ? "opacity-50 cursor-not-allowed" : "bg-white"
            }`}
            aria-label="Next"
          >
            <MdOutlineArrowForwardIos size={24} />
          </button>
        )}
      </div>

      {/* Pagination Indicators */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default OurInstructors;
