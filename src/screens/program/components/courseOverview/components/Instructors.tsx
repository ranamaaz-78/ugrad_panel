import { FaLinkedin } from "react-icons/fa";
import { Images } from "../../../../../constants/images";

const Instructors = () => {
  const data = [
    {
      name: "Olivia Rhye",
      designation: "Social Media Lead, Dunzo",
      imageURL: Images.InstructorImage1,
    },
    {
      name: "Phoenix Baker",
      designation: "Social Media Lead, Dunzo",
      imageURL: Images.InstructorImage2,
    },
    {
      name: "Demi Wilkinson",
      designation: "Social Media Lead, Dunzo",
      imageURL: Images.InstructorImage3,
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full mb-[30px]">
        <h4 className="font-sans mb-[8px] font-semibold text-[24px] md:text-[28px] lg:text-[32px] leading-[120%] text-[rgba(17,48,37,1)]">
          Meet the experts behind this program
        </h4>
      </div>
      <div className="w-full flex flex-wrap justify-between gap-[20px]">
        {data.map((instructor, index) => (
          <div key={index} className="w-full shrink-0 max-w-[300px]">
            <div className="flex w-full justify-between items-center gap-[8px]">
              <img
                className="w-[56px] h-[56px] rounded-[16px] "
                src={instructor.imageURL}
                alt="DP"
              />
              <div>
                <p className=" font-sans font-semibold text-[20px] leading-[120%] text-[rgba(17,48,37,1)]">
                  {instructor.name}
                </p>
                <p className="font-sans font-normal text-[14px] leading-[20px] text-[rgba(108,115,127,1)]">
                  {instructor.designation}
                </p>
              </div>
              <div>
                <FaLinkedin className="text-[24px] w-[24px] h-[24px] text-[rgba(0,67,183,1)]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
