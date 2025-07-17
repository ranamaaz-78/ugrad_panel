interface InfoCardProps {
  className?: string;
  icon: React.ReactNode;
  title: string;
  subTitle: string;
  description: string;
}

const InfoCard = (props: InfoCardProps) => {
  return (
    <div
      className={`${props.className}   p-[24px] rounded-[20px] border-[1px] border-[rgba(210,214,219,1)]`}
    >
      <div className="w-full flex flex-col justify-between h-full gap-[16px]">
        {props.icon}
        <div className="w-full flex flex-col gap-[14px]">
          <h3 className="font-sans  text-[24px] leading-[32px] font-normal  text-left text-[rgba(17,48,37,1)]">
            {props.title}
          </h3>
          <p className="font-sans  text-[16px] leading-[22px] font-normal text-left text-[rgba(17,48,37,1)]">
            {props.subTitle}
          </p>
          <p className="font-sans  text-[16px] leading-[22px] font-normal text-left text-[rgba(108,115,127,1)]">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
