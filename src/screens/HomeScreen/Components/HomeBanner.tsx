import { Images } from "../../../constants/images";
import { CustomButton } from "../../../CommonComponents";
import DraggableCircles from "./DragableCircle";

const HomeBanner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center  px-6 md:px-10 lg:px-24 py-5 ">
      <div
        className="hidden lg:block absolute inset-0 w-full h-full z-0 opacity-30 mt-32"
        style={{
          backgroundImage: `url(${Images.homeLines})`,
          backgroundSize: "cover",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* text div */}
      <div className="flex flex-col w-full md:w-[40%] text-primary-darkGreen gap-3 ">
        <h1 className="font-semibold text-gray-900 text-4xl lg:text-6xl font-sans leading-tight">
          Become a{" "}
          <span className="relative inline-block">
            Top
            {/* Image underline - perfectly positioned */}
            <img
              src={Images.Underline}
              alt=""
              className="absolute left-0 w-full h-auto top:10 lg:top-16 -translate-y-2/4"
              style={{ minWidth: "193px" }} // Match your image's natural width
            />
          </span>
          <span className="mt-10"> 1% Professional with UGRAD</span>
        </h1>
        <p className="text-lg text-brand-grayNatural500 font-sans font-normal text-justify">
          Master in-demand skills with industry-focused self-placed & fellowship
          programs to fast-track your career
        </p>
        <p className="text-lg text-brand-grayNatural500 font-sans font-normal text-justify">
          Learn by doing, grow with mentors, and land your dream job. Your next
          chapter begins here
        </p>
        <CustomButton
          label="Explore Program"
          background="#113025"
          labelClassName="text-white font-sans font-normal text-base"
          className="w-[181px] mt-2"
          onClick={() => {}}
        />
      </div>
      {/* image div */}
      <div className="flex flex-col justify-center items-center w-full md:w-[50%] h-full xl:w-[55%]">
        <DraggableCircles />
        <div className="flex flex-col lg:flex-row mt-4  justify-center items-center w-full gap-5  h-full relative">
          <div className="relative rounded-2xl px-4 py-4 flex flex-col justify-between overflow-hidden w-full max-w-[348px] h-[180px] bg-secondary-lightGreen">
            <div>
              <img src={Images.OpenQuote} alt="Open Quote" />
              <p className="text-base font-sans text-secondary-grayNeutral font-normal text-justify">
                AI will not replace developers, but will instead create more
                work for them
                <span className="inline-block align-middle">
                  <img
                    src={Images.CloseQuote}
                    alt="Close Quote"
                    className="inline-block mt-2"
                  />
                </span>
              </p>
            </div>
            <div className="flex gap-2 items-center ">
              <div className="w-9 h-9 rounded-full border-2 border-secondary-grayNeutral overflow-hidden">
                <img
                  src={Images.ceoImage}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col w-full">
                <p className="text-xs font-sans text-secondary-grayNeutral font-normal">
                  Github CEO:
                </p>
                <p className="text-xs font-sans text-secondary-grayNeutral font-normal">
                  Thomas Dohmke
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden w-full lg:w-[240px] h-full h-max-[180px]">
            <img
              src={Images.upskillingImage}
              alt="Upskilling"
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
