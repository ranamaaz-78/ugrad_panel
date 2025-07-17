import { InfoCard } from "../../../CommonComponents";
import { Images } from "../../../constants/images";

const OurVision = () => {
  const data = [
    {
      id: 1,
      title: "A World Where Learning is Career-Driven",
      subTitle: "Education isn't just about certificates — it's about outcomes",
      description:
        "We see a future where every learner gains real-world skills that lead to real-world success.",
      image: <img className="w-[60px] h-auto" src={Images.Globe} alt="Icon" />,
    },
    {
      id: 2,
      title: "Professionals Who Lead, Not Just Follow",
      subTitle:
        "We’re nurturing a generation of thinkers, builders, and leaders.",
      description:
        "UGRAD learners are prepared to innovate, solve problems, and stand out in the evolving job market.",
      image: (
        <img className="w-[60px] h-auto" src={Images.VideoCall} alt="Icon" />
      ),
    },
  ];
  return (
    <div className="w-full py-[50px] md:px-10 px-4">
      <div className="container mx-auto px-4 w-full">
        <div className="w-full">
          <h2 className="font-sans font-semibold text-[30px] sm:text-[36px] md:text-[40px] lg:text-[48px] leading-[120%] text-center text-[#113025]">
            Our Vision — The Future We’re Building
          </h2>
          <p className="mt-[20px] font-sans text-[16px] sm:text-[18px] leading-[22px] sm:leading-[24px]   text-center text-[#6C737F] font-normal">
            We're committed to building a future where career-driven learning
            empowers individuals to lead, innovate & thrive.
          </p>
        </div>
        <div className="w-full">
          <div className=" flex flex-col mt-[40px] md:flex-row items-center  rounded-[20px] border-[1px] border-[rgba(210,214,219,1)] bg-white">
            <div className="w-full md:w-[40%] ">
              <img
                className="w-full h-auto rounded-[16px]"
                src={Images.OurVision}
                alt="Group Of People"
              />
            </div>
            <div className="w-full md:w-[50%] p-[10px] md:p-[25px]  flex flex-col gap-[14px]">
              <h3 className="font-sans  text-[24px] leading-[32px] font-normal  text-left text-[rgba(17,48,37,1)]">
                Thriving in an AI-First World
              </h3>
              <p className="font-sans  text-[16px] leading-[22px] font-normal text-left text-[rgba(17,48,37,1)]">
                We prepare talent for what’s next — not just what’s now.
              </p>
              <p className="font-sans  text-[16px] leading-[22px] font-normal text-left text-[rgba(108,115,127,1)]">
                As industries change, we equip you with adaptable, future-proof
                skills to grow confidently with the world
              </p>
            </div>
          </div>
          <div className="w-full flex h-full flex-col gap-[24px] md:gap-0  md:flex-row items-stretch mt-[25px] flex-wrap justify-between ">
            {data.map((item, index) => (
              <InfoCard
                key={index}
                title={item.title}
                subTitle={item.subTitle}
                description={item.description}
                icon={item.image}
                className="bg-white  items-stretch w-full min-h-[329px] md:w-[49%] !h-full "
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
