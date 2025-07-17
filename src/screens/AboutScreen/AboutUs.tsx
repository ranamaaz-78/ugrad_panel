import { Images } from "../../constants/images";
import Introduction from "./components/Introduction";
import OurInstructors from "./components/OurInstructors";
import OurMission from "./components/OurMission";
import OurVision from "./components/OurVision";

const AboutUs = () => {
  return (
    <div className="w-full">
      {/* ------- About Us Banner ------- */}
      <div className="w-full py-[45px] md:py-[60px] bg-primary-darkGreen relative">
        <div
          className=" absolute w-full md:w-[70%] h-full z-20 right-0 top-0 left-0"
          style={{
            backgroundImage: `url(${Images.Lines})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="container mx-auto px-4">
          <div className=" w-full flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-[50%]   md:mb-0 mb-[30px]">
              <h2 className="font-sans font-semibold text-[30px] sm:text-[36px] md:text-[48px] text-left text-white">
                Learn. Grow. Lead. <br /> With UGRAD.
              </h2>
            </div>
            <div className="w-full md:w-[50%] flex justify-end">
              <div className="w-full lg:w-[400px] h-auto text-right rounded-[20px] border-[2px] border-white overflow-hidden">
                <img
                  className="w-full obeject-cover "
                  src={Images.AboutUsBannerImage}
                  alt="About Us Banner Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        {/* ------ About Us Intro ------ */}
        <Introduction />
        {/* ------ Our Mission ------ */}
        <OurMission />
        {/* ------ Our Vision ------ */}
        <OurVision />
        {/* ------ Our Instructors ------ */}
      </div>
      <OurInstructors heading="Our Instructors" background={true} noOfRow={2} />
      <OurInstructors heading="Our Mentors" background={false} noOfRow={1} />
    </div>
  );
};

export default AboutUs;
