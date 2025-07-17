import Form from "../Form";
import KeyoutConmes from "./components/KeyoutConmes";
import TechToolsList from "./components/TechToolsList";
import CirculumAccordian from "./components/CirculumAccordian";
import ProjectCards from "./components/ProjectCards";
import Instructors from "./components/Instructors";
import CertificateInfo from "./components/CertificateInfo";

const CourseOverviewSection = () => {
  return (
    <div className="w-full pb-[80px] px-5 md:px-8  lg:px-12">
      <div className=" container px-4 mx-auto">
        <div className="w-full flex justify-between gap-[20px] flex-col-reverse lg:flex-row">
          {/* ---------- */}
          <div className="w-full lg:w-[68%] shrink-0">
            <KeyoutConmes />
            <div className="my-[30px] border-t border-[rgba(210,214,219,1)] w-full"></div>
            <TechToolsList />
            <div className="my-[30px] border-t border-[rgba(210,214,219,1)] w-full"></div>
            <CirculumAccordian />
            <div className="my-[30px] border-t border-[rgba(210,214,219,1)] w-full"></div>
            <ProjectCards />
            <div className="my-[30px] border-t border-[rgba(210,214,219,1)] w-full"></div>
            <Instructors />
            <div className="my-[30px] border-t border-[rgba(210,214,219,1)] w-full"></div>
            <CertificateInfo />
          </div>
          {/* ---------- */}
          <div className="w-full lg:w-[30%] shrink-0">
            <Form className="bg-[rgba(243,245,247,1)]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverviewSection;
