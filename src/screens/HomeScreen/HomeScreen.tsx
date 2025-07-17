import { Images } from "../../constants/images";
import RunningRow from "./Components/AminationRow";
import CareerSection from "./Components/CareerSection";
import Faq from "./Components/Faq";
import HomeBanner from "./Components/HomeBanner";
import MarketingSection from "./Components/MarketingSection";
import MentorSection from "./Components/MentorSection";
import PassionateSection from "./Components/PassionateSection";
import ProgramSection from "./Components/ProgramSection";
const HomeScreen = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* home Banner */}
      <HomeBanner />
      {/* partnersection */}
      <div className="w-full  bg-primary-secondaryGreen flex flex-col items-center justify-center h-48 gap-10">
        <p className="text-white font-sans font-normal text-sm text-center leading-5">
          Our curriculum is aligned with the hiring needs of the most
          forward-thinking companies
        </p>
        <RunningRow
          pauseOnHover={true}
          speed="medium"
          className="w-full flex items-center justify-center"
        >
          {[
            Images.companyImage1,
            Images.companyImage2,
            Images.companyImage3,
            Images.companyImage4,
            Images.companyImage5,
          ].map((item) => (
            <img
              src={item}
              alt="Company Logo"
              className="object-contain"
              key={item}
            />
          ))}
        </RunningRow>
      </div>
      {/* Career Section */}
      <CareerSection />
      {/* Marketing Section */}
      <MarketingSection />
      {/* mentor section working*/}
      <ProgramSection />
      <MentorSection />
      {/* Faq */}
      <Faq />
      {/* Passionate Section */}
      <PassionateSection />
    </div>
  );
};

export default HomeScreen;
