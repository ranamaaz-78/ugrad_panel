import MentorCard from "../../../CommonComponents/card/MentorCard";
import { Images } from "../../../constants/images";

const MentorTestimonial = () => {
  const data = [
    {
      name: "Nancy A.",
      description:
        "UGRAD gives aspiring professionals more than just knowledge—it gives them a roadmap. I’ve seen students go from unsure to unstoppable with the right guidance and community.",
      position: "Senior Software Engineer, Swiggy",
      dpImageURL: Images.MentorDp,
    },
    {
      name: "Nancy A.",
      position: "Senior Software Engineer, Swiggy",
      dpImageURL: Images.MentorDp,
      videURL: Images.ProgramVideo,
    },
    {
      name: "Nancy A.",
      description:
        "UGRAD gives aspiring professionals more than just knowledge—it gives them a roadmap. I’ve seen students go from unsure to unstoppable with the right guidance and community.",
      position: "Senior Software Engineer, Swiggy",
      dpImageURL: Images.MentorDp,
    },
  ];

  return (
    <div className="w-full py-[50px] bg-brand-grayNatural100 px-5 md:px-8  lg:px-12">
      <div className="w-full px-4  container mx-auto">
        <h4 className="font-sans text-center mb-[30px] font-semibold text-[24px] md:text-[28px] lg:text-[32px] leading-[120%] text-[rgba(17,48,37,1)]">
          Hear What Our Mentors Have to Say
        </h4>
        <div className="flex justify-between gap-[15px] flex-wrap w-full">
          {data.map((item, index) => (
            <MentorCard
              className="w-full md:w-[32%] md:min-w-[380px] shrink-0"
              key={index}
              videoURL={item.videURL}
              description={item.description}
              dpImageURL={item.dpImageURL}
              position={item.position}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorTestimonial;
