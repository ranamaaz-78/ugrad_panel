import { InfoCard } from "../../../CommonComponents";
import { Images } from "../../../constants/images";

const OurMission = () => {
  const data = [
    {
      id: 1,
      title: "Learn Your Way — Instantly & Interactively",
      subTitle:
        "Master skills through on-demand lessons and hands-on projects.",
      description:
        "Learn at your pace, whenever you want, with engaging content that helps you apply what you learn, not just memorize it",
      image: (
        <img className="w-[60px] h-auto" src={Images.PensilBook} alt="Icon" />
      ),
    },
    {
      id: 2,
      title: "Grow with a Thriving Community",
      subTitle:
        "Surround yourself with learners, mentors, and professionals who push you forward.",
      description:
        "Ask questions, share insights, collaborate on ideas, and build your network — because growth is better together.",
      image: <img className="w-[60px] h-auto" src={Images.Users} alt="Icon" />,
    },
  ];

  return (
    <div className="w-full bg-brand-grayNatural100 py-[50px] md:px-10 px-4">
      <div className="container mx-auto px-4 w-full">
        <div className="w-full">
          <h2 className="font-sans font-semibold text-[30px] sm:text-[36px] md:text-[40px] lg:text-[48px] leading-[120%] text-center text-[#113025]">
            Our Mission In Action
          </h2>
          <p className="mt-[20px] font-sans text-[16px] sm:text-[18px] leading-[22px] sm:leading-[24px]   text-center text-[#6C737F] font-normal">
            We don’t just teach – we empower support and grow with. Here’s How;
          </p>
        </div>
        <div className="w-full flex-col md:flex-row flex items-stretch mt-[24px] gap-[16px] md:gap-[16px]">
          <div className="flex  flex-col items-stretch gap-[16px] w-full md:w-[48%] shrink-0">
            {data.map((item, index) => (
              <InfoCard
                key={index}
                title={item.title}
                subTitle={item.subTitle}
                description={item.description}
                icon={item.image}
                className="bg-white  flex-1"
              />
            ))}
          </div>
          <div className="w-full md:w-[48%] shrink-0">
            <div className="p-[24px]   h-full flex flex-col justify-between rounded-[20px] border-[1px] border-[rgba(210,214,219,1)] bg-white">
              <img
                className="w-full h-auto rounded-[16px]"
                src={Images.InfoImage}
                alt="Group Of People"
              />
              <div className="w-full flex flex-col gap-[14px] mt-[25px]">
                <h3 className="font-sans  text-[24px] leading-[32px] font-normal  text-left text-[rgba(17,48,37,1)]">
                  Mentorship That Moves You Forward
                </h3>
                <p className="font-sans  text-[16px] leading-[22px] font-normal text-left text-[rgba(17,48,37,1)]">
                  Get real guidance from real experts.
                </p>
                <p className="font-sans  text-[16px] leading-[22px] font-normal text-left text-[rgba(108,115,127,1)]">
                  From career advice to solving course doubts — our mentors are
                  here to support your journey with answers that actually help
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
