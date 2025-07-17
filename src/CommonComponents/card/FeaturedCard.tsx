interface FeaturedCardProps {
  className?: string;
  iconURL: string;
  title: string;
}

const FeaturedCard = (props: FeaturedCardProps) => {
  return (
    <div
      className={` ${props.className} rounded-[20px]  p-[24px] min-h-[189px] h-full bg-white border border-[rgba(210,214,219,1)]`}
    >
      <p className=" font-sans font-normal leading-[28px] text-[20px] text-[rgba(17,48,37,1)] text-left">
        {props.title}
      </p>
      <div className="flex justify-end items-end">
        <img className="w-[100px] h-[100px]" src={props.iconURL} alt={"Icon"} />
      </div>
    </div>
  );
};

export default FeaturedCard;
