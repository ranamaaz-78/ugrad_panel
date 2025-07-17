import { Images } from "../../../../../constants/images";

const CertificateInfo = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between gap-[15px] flex-wrap">
        <div className="w-full md:w-[60%] shrink-0 ">
          <div className="w-full mb-[30px]">
            <h4 className="font-sans mb-[8px] font-semibold text-[24px] md:text-[28px] lg:text-[32px] leading-[120%] text-[rgba(17,48,37,1)]">
              Earn a Certificate You Can Be Proud Of
            </h4>
            <p className=" font-sans font-normal text-[16px] leading-[22px] text-[rgba(108,115,127,1)]">
              Complete the course and receive a verified Certificate of
              Completion — a powerful proof of your skills that you can showcase
              on your resume, LinkedIn, or portfolio.
            </p>
          </div>
          <ul className="custom-list pl-5 space-y-3">
            <li className=" font-sans font-semibold text-[16px] leading-[22px] text-[rgba(17,48,37,1)]">
              Verified & Shareable
            </li>
            <p className=" font-sans font-normal text-[16px] leading-[22px] text-[rgba(108,115,127,1)]">
              Each certificate is uniquely generated and can be shared directly
              on LinkedIn or downloaded as a PDF.
            </p>
            <li className="font-sans font-semibold text-[16px] leading-[22px] text-[rgba(17,48,37,1)]">
              Recognized by Industry Mentors
            </li>
            <p className=" font-sans font-normal text-[16px] leading-[22px] text-[rgba(108,115,127,1)]">
              Our certifications carry weight because they’re backed by
              real-world mentors and practical, project-based learning.
            </p>
            <li className="font-sans font-semibold text-[16px] leading-[22px] text-[rgba(17,48,37,1)]">
              Skill-Backed Recognition
            </li>
            <p className="font-sans font-normal text-[16px] leading-[22px] text-[rgba(108,115,127,1)]">
              {" "}
              It’s not just a piece of paper — it’s proof of real skills you’ve
              gained through hands-on learning and assessments.
            </p>
          </ul>
        </div>
        <div className="w-full md:w-[35%] shrink-0 border border-brand-grayNatural300 rounded-xl p-1">
          <img
            className="w-full h-auto object-contain"
            src={Images.certificate}
            alt="Certificate Image"
          />
        </div>
      </div>
    </div>
  );
};

export default CertificateInfo;
