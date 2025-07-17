import { Images } from "../../../../../constants/images";
import Marquee from "react-fast-marquee";
const TechToolsList = () => {
  const logos = [
    Images.FictionalCompanyLogo1,
    Images.FictionalCompanyLogo2,
    Images.FictionalCompanyLogo3,
    Images.FictionalCompanyLogo4,
    Images.FictionalCompanyLogo5,
  ];

  const Row = ({ reverse }: { reverse?: boolean }) => (
    <Marquee
      direction={reverse ? "right" : "left"}
      autoFill={true}
      pauseOnHover={true}
      speed={50}
      className="w-full mb-[15px]"
    >
      {logos.map((item: any, idx: any) => (
        <div
          key={idx}
          className="border mx-[10px] cursor-pointer  border-[rgba(229,231,235,1)] rounded-[8px] w-[150px] h-[50px] flex items-center justify-center py-[12px] px-[16px]"
        >
          <img className="w-full  h-auto" src={item} alt="" />
        </div>
      ))}
    </Marquee>
  );

  return (
    <div className="w-full">
      <div className="w-full mb-[30px]">
        <h4 className="font-sans mb-[8px] font-semibold text-[24px] md:text-[28px] lg:text-[32px] leading-[120%] text-[rgba(17,48,37,1)]">
          Tools & Technologies you will learn
        </h4>
      </div>
      <div className="overflow-hidden whitespace-nowrap relative group">
        <Row />
        <Row reverse />
      </div>
    </div>
  );
};

export default TechToolsList;
