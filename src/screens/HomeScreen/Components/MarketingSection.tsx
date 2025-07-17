import { ScrollableRow } from "../../../CommonComponents";
import { Images } from "../../../constants/images";
import MarketingCard from "./MarketingCard";

const MarketingSection = () => {
  const marketingCardArray = [
    {
      backgroundImage: Images.Program1,
      title: "Digital Marketing Kickstarter",
      duration: "4 hours",
      language: "English",
      ctaText: "Explore Programs",
      imageText: "Self-Placed",
    },
    {
      backgroundImage: Images.Program2,
      title: "Generative AI for Marketers",
      duration: "4 hours",
      language: "English",
      ctaText: "Explore Programs",
      imageText: "Self-Placed",
    },
    {
      backgroundImage: "",
      title: "",
      duration: "",
      language: "",
      ctaText: "",
      imageText: "",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center  bg-brand-grayNatural200 py-8 md:py-16 px-4 md:px-8 gap-6">
      <h1 className="font-sans font-semibold text-[32px] md:text-5xl text-primary-darkGreen">
        Self-Placed Programs
      </h1>
      <p className="text-center text-base md:text-xl font-sans text-primary-NavyBlue max-w-3xl">
        Upskill on your own time with structured video lessons and hands-on
        exercises — designed to fit around your life, not the other way around.
        Learn at your speed, build real skills, and stay in control of your
        progress — just pure flexibility.
      </p>
      <div className="hidden w-full lg:flex lg:flex-row items-center justify-center gap-4 lg:gap-8">
        {marketingCardArray.map((card, index) => (
          <MarketingCard
            key={index}
            backgroundImage={card.backgroundImage}
            title={card.title}
            duration={card.duration}
            language={card.language}
            ctaText={card.ctaText}
            imageText={card.imageText}
          />
        ))}
      </div>
      <div className="w-full lg:hidden">
        <ScrollableRow gap="lg" className="p-4 bg-gray-50">
          {marketingCardArray.map((card, index) => (
            <MarketingCard
              key={index}
              backgroundImage={card.backgroundImage}
              title={card.title}
              duration={card.duration}
              language={card.language}
              ctaText={card.ctaText}
              imageText={card.imageText}
            />
          ))}
        </ScrollableRow>
      </div>
    </div>
  );
};

export default MarketingSection;
