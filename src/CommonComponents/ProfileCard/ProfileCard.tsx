import { FaLinkedin } from "react-icons/fa";

interface ProfileCardProps {
  className?: string;
  name: string;
  imageURL: string;
  position: string;
  description: string;
  profileLink: string;
}

const ProfileCard = (props: ProfileCardProps) => {
  return (
    <div className={`flex flex-wrap flex-col gap-[24px] ${props.className}`}>
      <img
        className="w-full h-auto rounded-[16px]"
        src={props.imageURL}
        alt="Profile Image"
      />
      <div className="flex w-full justify-between ">
        <div>
          <p className="text-[20px] font-sans font-semibold text-[rgba(17,48,37,1)]">
            {props.name}
          </p>
          <p className="text-[14px] mt-[5px] leading-[20px] font-sans font-medium text-[rgba(0,63,63,1)]">
            {props.position}
          </p>
        </div>
        <div>
          <FaLinkedin className="text-[24px] w-[24px] h-[24px] text-[rgba(0,67,183,1)]" />
        </div>
      </div>

      <p className="text-[14px] w-full whitespace-pre-wrap  font-sans font-normal text-[rgba(108,115,127,1)] leading-[20px]">
        {props.description}
      </p>
    </div>
  );
};

export default ProfileCard;
