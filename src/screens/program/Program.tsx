import { CgChevronRight } from "react-icons/cg";
import { Images } from "../../constants/images";
import FeatureHighlightSection from "./components/FeatureHighlightSection";
import CourseOverviewSection from "./components/courseOverview/CourseOverviewSection";
import MentorTestimonial from "./components/MentorTestimonial";
import Faq from "./components/Faq";

const Program = () => {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    {
      name: "Program",
      href: "/Program",
      current: true,
    },
  ];

  return (
    <>
      <div className="w-full">
        {/* ----------- Program Banner ----------- */}
        <div className="w-full bg-black px-10">
          <div className="mx-auto px-4 flex-col lg:py-0 lg:flex-row flex">
            {/* ---------------------- */}
            <div className="lg:w-[45%] shrink-0 w-full flex justify-center items-center">
              <div className="lg:px-10 w-full flex flex-col justify-between h-[426px] pt-8 lg:py-0">
                {/* ----- */}
                <div className="flex">
                  {breadcrumbItems.map((item, index) => (
                    <div key={index} className="flex items-center">
                      {index > 0 && (
                        <CgChevronRight className="w-[20px] h-[20px] mr-[5px] text-white" />
                      )}
                      {item.current ? (
                        <span className=" text-white cursor-pointer font-normal font-sans text-[16px] leading-[22px] ">
                          {item.name}
                        </span>
                      ) : (
                        <a
                          href={item.href}
                          className="hover:underline text-white font-normal font-sans text-[16px] leading-[22px] "
                        >
                          {item.name}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
                {/* ------ */}
                <div className="w-full flex flex-col gap-[24px]">
                  <h3 className="font-sans font-semibold text-[30px] sm:text-[36px] md:text-[40px] lg:text-[48px] text-left text-white">
                    Dijital Marketing
                  </h3>
                  <p className="font-sans text-[16px] lg:text-[18px] leading-[22px] sm:leading-[24px]   text-justify text-white font-normal">
                    Master all essential digital marketing skills to drive
                    results
                    <br />
                    and stay ahead in today’s competitive landscape
                  </p>
                  <button
                    onClick={() => {}}
                    className="border border-white rounded-[8px] bg-white inline-block cursor-pointer py-[12px] px-[20px] text-[rgba(0,60,63,1)] font-sans font-normal text-[16px] leading-[22px] max-w-[200px]"
                  >
                    Join the Waiting list
                  </button>
                </div>
                {/* ----- */}
                <div className="w-full flex gap-[10px]">
                  <div className="relative flex  items-center">
                    <img
                      className=" w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full border-[2px] border-white overflow-hidden"
                      src={Images.InstructorImage4}
                      alt="DP"
                    />
                    <img
                      className=" absolute z-20 left-[30px]  w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full border-[2px] border-white overflow-hidden"
                      src={Images.InstructorImage7}
                      alt="DP"
                    />
                  </div>
                  <div className="ml-[35px]">
                    <p className=" font-normal text-[12px] leading-[18px] font-sans text-white">
                      Created By:
                    </p>
                    <p className="font-semibold text-[14px] md:text-[16px] leading-[22px] font-sans text-white">
                      Dianne Russell . Kristin Watson
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------------------- */}
            <div className="w-full lg:w-[55%] my-10 lg:my-0">
              <img
                src={Images.Program1}
                alt="Program Banner Image"
                className="w-full h-auto max-h-[600px] object-contain"
              />
            </div>
          </div>
        </div>
        {/* Featured Section */}
        <div>
          <FeatureHighlightSection />
          {/* --------------------- */}
          <CourseOverviewSection />
          {/* --------------------- */}
          <MentorTestimonial />
          {/* --------------------- */}
          <Faq />
        </div>
      </div>
    </>
  );
};

export default Program;
