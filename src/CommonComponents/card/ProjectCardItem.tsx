interface ProjectCardItemProps {
  className?: string;
  difficulty: string;
  title: string;
  description: string;
  requisites: string[];
  technologies: string[];
}

const ProjectCardItem = (props: ProjectCardItemProps) => {
  return (
    <div
      className={`${props.className}  p-[16px] rounded-[12px] border border-primary-NavyBlue w-72 md:w-80 lg:w-[364px] 2xl:w-[450px]`}
    >
      <div className="w-full">
        <p className=" font-sans font-normal text-[16px] leading-[22px] text-[rgba(0,60,63,1)] mb-[16px]">
          {props.difficulty}
        </p>
        <div className="w-full mb-[16px]">
          <h4 className="font-sans font-semibold text-[20px] leading-[28px] text-primary-darkGreen mb-[8px]">
            {props.title}
          </h4>
          <p className="font-sans font-normal text-[14px] leading-[20px] text-brand-grayNatural500 text-justify ">
            {props.description}
          </p>
        </div>
        <div className="w-full flex-wrap gap-[16px] sm:gap-0  flex justify-between">
          <div className="w-full sm:w-auto shrink-0">
            <h5 className="font-sans font-normal text-[16px] leading-[22px] text-primary-darkGreen mb-[8px]">
              Pre-Requisites:
            </h5>
            <div className="flex w-full flex-wrap gap-[5px]">
              {props.requisites.map((item, index) => (
                <span
                  key={index}
                  className=" shrink-0 py-[5px] px-[10px] inline-block text-[rgba(17,25,40,1)] text-[14px] leading-[20px] text-center font-sans font-normal  rounded-md bg-[rgba(233,241,243,1)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full sm:w-auto shrink-0 self-end">
            <h5 className="font-sans font-normal text-[16px] leading-[22px] text-primary-darkGreen mb-[8px]">
              Skills to be learned:
            </h5>
            <div className="flex w-full flex-wrap gap-[5px]">
              {props.technologies.map((item, index) => (
                <span
                  key={index}
                  className=" shrink-0 py-[5px] pr-[10px] text-[rgba(17,25,40,1)] border border-[rgba(243,244,246,1)] text-[14px] leading-[20px] text-center font-sans font-normal  rounded-md "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardItem;
