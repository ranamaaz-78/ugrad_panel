import { Accordion } from "../../../../../CommonComponents";
const CirculumAccordian = () => {
  const data = [
    {
      title: "Fundamentals of Digital Marketing",
      content:
        "The module covers setting marketing objectives, conducting market and competitor research, understanding the marketing funnel and customer journey, identifying target audience segments, creating buyer personas, developing value propositions, key digital marketing terms and metrics, media types, digital marketing channels, selecting the right channel mix, and case studies for each channel.",
    },
    {
      title: "Fundamentals of Digital Marketing",
      content:
        "The module covers setting marketing objectives, conducting market and competitor research, understanding the marketing funnel and customer journey, identifying target audience segments, creating buyer personas, developing value propositions, key digital marketing terms and metrics, media types, digital marketing channels, selecting the right channel mix, and case studies for each channel.",
    },
    {
      title: "SEO Fundamentals",
      content:
        "The module covers setting marketing objectives, conducting market and competitor research, understanding the marketing funnel and customer journey, identifying target audience segments, creating buyer personas, developing value propositions, key digital marketing terms and metrics, media types, digital marketing channels, selecting the right channel mix, and case studies for each channel.",
    },
    {
      title: "Social Media Marketing",
      content:
        "The module covers setting marketing objectives, conducting market and competitor research, understanding the marketing funnel and customer journey, identifying target audience segments, creating buyer personas, developing value propositions, key digital marketing terms and metrics, media types, digital marketing channels, selecting the right channel mix, and case studies for each channel.",
    },
    {
      title: "Persuasive Copywriting",
      content:
        "The module covers setting marketing objectives, conducting market and competitor research, understanding the marketing funnel and customer journey, identifying target audience segments, creating buyer personas, developing value propositions, key digital marketing terms and metrics, media types, digital marketing channels, selecting the right channel mix, and case studies for each channel.",
    },
    {
      title: "Marketing on Google",
      content:
        "The module covers setting marketing objectives, conducting market and competitor research, understanding the marketing funnel and customer journey, identifying target audience segments, creating buyer personas, developing value propositions, key digital marketing terms and metrics, media types, digital marketing channels, selecting the right channel mix, and case studies for each channel.",
    },
    {
      title: "Marketing On Facebook",
      content:
        "The module covers setting marketing objectives, conducting market and competitor research, understanding the marketing funnel and customer journey, identifying target audience segments, creating buyer personas, developing value propositions, key digital marketing terms and metrics, media types, digital marketing channels, selecting the right channel mix, and case studies for each channel.",
    },
    {
      title: "Marketing On Facebook",
      content:
        "The module covers setting marketing objectives, conducting market and competitor research, understanding the marketing funnel and customer journey, identifying target audience segments, creating buyer personas, developing value propositions, key digital marketing terms and metrics, media types, digital marketing channels, selecting the right channel mix, and case studies for each channel.",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full mb-[30px]">
        <h4 className="font-sans mb-[8px] font-semibold text-[24px] md:text-[28px] lg:text-[32px] leading-[120%] text-[rgba(17,48,37,1)]">
          Curriculum
        </h4>
        <p className=" font-sans font-normal text-[18px] leading-[24px] text-[rgba(108,115,127,1)]">
          From Basics to Brilliance – Here’s What You’ll Learn
        </p>
      </div>
      <div className="w-full">
        {data.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            children={
              <p className="font-sans font-normal text-[18px] leading-[24px] text-[rgba(108,115,127,1)]">
                {item.content}
              </p>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default CirculumAccordian;
