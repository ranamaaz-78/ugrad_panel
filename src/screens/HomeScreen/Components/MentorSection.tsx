import MediaCard from "../../../CommonComponents/card/MediaCard";
import { Images } from "../../../constants/images";

const MentorSection = () => {
  const data = [
    {
      id: 1,
      textContent:
        "UGRAD gives aspiring professionals more than just knowledge—it gives them a roadmap. I’ve seen students go from unsure to unstoppable with the right guidance and community.",
      authorName: "Nancy A.",
      authorProfessional: "Senior Software Engineer, Swiggy",
      avatarImage: Images.MentorDp,
    },
    {
      id: 2,
      authorName: "Nancy A.",
      authorProfessional: "Senior Software Engineer, Swiggy",
      videoUrl: Images.AboutUsVideo,
      thumbnail: Images.MentorDp,
      avatarImage: Images.MentorDp,
    },
    {
      id: 3,
      textContent:
        "UGRAD gives aspiring professionals more than just knowledge—it gives them a roadmap. I’ve seen students go from unsure to unstoppable with the right guidance and community.",
      authorName: "Nancy A.",
      authorProfessional: "Senior Software Engineer, Swiggy",
      avatarImage: Images.MentorDp,
    },
    {
      id: 4,
      authorName: "Nancy A.",
      authorProfessional: "Senior Software Engineer, Swiggy",
      videoUrl: Images.AboutUsVideo,
      thumbnail: Images.MentorDp,
      avatarImage: Images.MentorDp,
    },
    {
      id: 5,
      textContent:
        "UGRAD gives aspiring professionals more than just knowledge—it gives them a roadmap. I’ve seen students go from unsure to unstoppable with the right guidance and community.",
      authorName: "Nancy A.",
      authorProfessional: "Senior Software Engineer, Swiggy",
      avatarImage: Images.MentorDp,
    },
    {
      id: 6,
      authorName: "Nancy A.",
      authorProfessional: "Senior Software Engineer, Swiggy",
      videoUrl: Images.AboutUsVideo,
      thumbnail: Images.MentorDp,
      avatarImage: Images.MentorDp,
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-auto bg-brand-grayNatural100 px-10 py-8 gap-5">
        <h1 className="font-sans font-semibold text-2xl md:text-5xl text-primary-darkGreen text-center">
          Instructors' & Mentors' Feedback
        </h1>
        <p className="font-sans font-normal text-base md:text-lg text-brand-grayNatural500 text-center w-[75%] lg:w-1/2">
          Here’s what our instructors and mentors have to say about building the
          next generation of professionals
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center ">
          {data.map((item) => (
            <MediaCard
              key={item.id}
              id={item.id}
              authorName={item.authorName || "Default Name"}
              textContent={item.id % 2 !== 0 ? item.textContent : undefined}
              videoUrl={item.id % 2 === 0 ? item.videoUrl : undefined}
              thumbnail={item.id % 2 === 0 ? item.thumbnail : undefined}
              authorProfession={item.authorProfessional || "Professional"}
              avatarImage={item.avatarImage}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MentorSection;
