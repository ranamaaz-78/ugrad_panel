import { useState } from "react";
import FaqAccordion from "../../../CommonComponents/accordian/FaqAccordian";

const Faq = () => {
  const data = [
    {
      title: "Who is this program for?",
      content:
        "Whether you're a student, career switcher, or professional looking to upskill — this course is built for you.",
    },
    {
      title: "Is this self-paced or live?",
      content:
        "Whether you're a student, career switcher, or professional looking to upskill — this course is built for you.",
    },
    {
      title: "Will I get support if I’m stuck?",
      content:
        "Whether you're a student, career switcher, or professional looking to upskill — this course is built for you.",
    },
    {
      title: "What kind of projects will I build?",
      content:
        "Whether you're a student, career switcher, or professional looking to upskill — this course is built for you.",
    },
    {
      title: "Do I need any prior experience?",
      content:
        "Whether you're a student, career switcher, or professional looking to upskill — this course is built for you.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full py-[60px]   px-5 md:px-8  lg:px-12">
      <div className="w-full container px-4 mx-auto">
        <div className="w-full  gap-[30px] flex-wrap flex justify-between">
          {/* -------------- */}
          <div className="w-full md:w-[30%] shrink-0">
            <div className="w-full">
              <h4 className="font-sans mb-[8px] font-semibold text-[24px] md:text-[28px] lg:text-[32px] leading-[120%] text-[rgba(17,48,37,1)]">
                Frequently Asked Questions
              </h4>
              <p className=" font-sans font-normal text-[18px] leading-[24px] text-[rgba(108,115,127,1)]">
                Got questions? We’ve got clear answers to help you get started
                with confidence.
              </p>
            </div>
          </div>
          {/* ---------------- */}
          <div className="w-full md:w-[65%] shrink-0">
            {data.map((item, index) => (
              <FaqAccordion
                title={item.title}
                children={
                  <p className="font-sans font-normal text-[16px] leading-[22px] text-[rgba(108,115,127,1)]">
                    {item.content}
                  </p>
                }
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
