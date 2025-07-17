import { useState } from "react";
import FaqAccordion from "../../../CommonComponents/accordian/FaqAccordian";

const Faq = () => {
  const data = [
    {
      title: "Who is UGRAD for?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "What kind of programs does UGRAD offer?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Do I need prior experience to join a program?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "How does mentorship work at UGRAD?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Can I learn at my own pace?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full p-10">
      <div className="w-full container px-4 mx-auto">
        <div className="w-full  gap-[30px] flex-wrap flex justify-between">
          {/* -------------- */}
          <div className="w-full md:w-[30%] shrink-0">
            <div className="w-full">
              <h4 className="font-sans mb-[8px] font-semibold md:text-5xl text-[32px] text-primary-darkGreen">
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
