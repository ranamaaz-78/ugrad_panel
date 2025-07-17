import ProjectCardItem from "../../../../../CommonComponents/card/ProjectCardItem";

const ProjectCards = () => {
  const data = [
    {
      difficulty: "Intermadiate",
      title: "Amazone Clone using React",
      description:
        "Nowadays the first thing that someone does when they create a new business for trading goods is to convert their commerce to e-commerce. Many businesses even prefer to have e-commerce as their only mode of doing business. The potential of e-commerce is nearly limitless, reason for which we'll be going on a ride to create an e-commerce solution of our own!",
      requisites: ["HTML", "CSS", "JavaScript"],
      skills: ["React", "Frebase", "Stripe"],
    },
    {
      difficulty: "Intermadiate",
      title: "Amazone Clone using React",
      description:
        "Nowadays the first thing that someone does when they create a new business for trading goods is to convert their commerce to e-commerce. Many businesses even prefer to have e-commerce as their only mode of doing business. The potential of e-commerce is nearly limitless, reason for which we'll be going on a ride to create an e-commerce solution of our own!",
      requisites: ["HTML", "CSS", "JavaScript"],
      skills: ["React", "Frebase", "Stripe"],
    },
    {
      difficulty: "Intermadiate",
      title: "Amazone Clone using React",
      description:
        "Nowadays the first thing that someone does when they create a new business for trading goods is to convert their commerce to e-commerce. Many businesses even prefer to have e-commerce as their only mode of doing business. The potential of e-commerce is nearly limitless, reason for which we'll be going on a ride to create an e-commerce solution of our own!",
      requisites: ["HTML", "CSS", "JavaScript"],
      skills: ["React", "Frebase", "Stripe"],
    },
    {
      difficulty: "Intermadiate",
      title: "Amazone Clone using React",
      description:
        "Nowadays the first thing that someone does when they create a new business for trading goods is to convert their commerce to e-commerce. Many businesses even prefer to have e-commerce as their only mode of doing business. The potential of e-commerce is nearly limitless, reason for which we'll be going on a ride to create an e-commerce solution of our own!",
      requisites: ["HTML", "CSS", "JavaScript"],
      skills: ["React", "Frebase", "Stripe"],
    },
  ];
  return (
    <div className="w-full">
      <div className="w-full mb-[30px]">
        <h4 className="font-sans mb-[8px] font-semibold text-[24px] md:text-[28px] lg:text-[32px] leading-[120%] text-[rgba(17,48,37,1)]">
          Projects you’ll build along the way
        </h4>
        <p className=" font-sans font-normal text-[18px] leading-[24px] text-[rgba(108,115,127,1)]">
          Gain hands-on experience by building real-world projects as you
          progress through the course. These projects aren’t just for practice —
          they’re portfolio-ready and reflect the challenges you'll face in
          actual tech roles.
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row flex-wrap gap-5 justify-center items-center">
        {data.map((project, index) => (
          <ProjectCardItem
            key={index}
            className="mb-[20px]"
            technologies={project.skills}
            requisites={project.requisites}
            difficulty={project.difficulty}
            description={project.description}
            title={project.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
