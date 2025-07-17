import { Images } from "../../../constants/images";
import CareerCard from "./CareerCard";

const CareerSection = () => {
  const cardData = [
    {
      id: "01",
      title: "Real-World Skill Tracks",
      description:
        "Learn what the industry actually uses – no fluff, just the skills that matter",

      icon: Images.Globe,
      hoverIcon: Images.GlobeWhite,
      className: "w-[318px] h-[350px]",
    },
    {
      id: "02",
      title: "Mentors who have been there",
      description:
        "Get certified in the skills that employers are looking forGet guidance from professionals who have done the work and know what it takes",

      icon: Images.VideoCall,
      hoverIcon: Images.VideoCallWhite,
      className: "w-[318px] lg:w-[518px] h-[350px]",
    },
    {
      id: "03",
      title: "Hands-on project-based learning",
      description:
        "Build real projects & solve real problems – learning by doing, not just watching",

      icon: Images.PensilBook,
      hoverIcon: Images.PensilBookWhite,
      className: "w-[318px] h-[350px]",
    },
    {
      id: "04",
      title: "Career Ready, Outcome-Driven",
      description:
        "Everything you learn is geared toward one goal: landing the job or role you deserve",

      icon: Images.Target,
      hoverIcon: Images.TargetWhite,
      className: "w-[318px] lg:w-[518px] h-[350px]",
    },
    {
      id: "05",
      title: "Community that lifts you up",
      description:
        "You’re never alone — ask questions, share wins, get support. We're in this together",
      icon: Images.Users,
      hoverIcon: Images.UsersWhite,
      className: "w-[318px] lg:w-[518px] h-[350px]",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full h-full p-4 mt-8 ">
      <div className="flex flex-col items-center justify-center gap-2 w-full">
        <h1 className="text-4xl text-primary-darkGreen sm:text-5xl font-sans font-semibold">
          Built to accelerate your career
        </h1>
        <p className="text-base sm:text-lg text-brand-grayNatural500 font-sans font-normal text-center">
          Unlock the skills, mentorship, and support you need to grow faster and
          further in your professional journey
        </p>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 w-full items-center sm:justify-center">
        {cardData.map((item) => (
          <CareerCard
            key={item.id}
            title={item.title}
            description={item.description}
            number={item.id}
            icon={<img src={item.icon} />}
            hoverIcon={<img src={item.hoverIcon} />}
            className={item.className}
          />
        ))}
      </div>
    </div>
  );
};
export default CareerSection;
