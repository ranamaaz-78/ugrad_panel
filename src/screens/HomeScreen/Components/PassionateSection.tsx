import { CustomButton } from "../../../CommonComponents";
import { Images } from "../../../constants/images";

const PassionateSection = () => {
  const bulletPointArray = [
    "Teach what you know",
    "Mentor Where it Matters",
    "Make a Real Impact",
  ];
  return (
    <div className="flex flex-col-reverse lg:flex-row m-10 justify-between bg-brand-creamWhite p-6 rounded-lg gap-4">
      <div className="flex-1 flex flex-col justify-center items-start gap-4">
        <h1 className="font-sans font-semibold text-primary-darkGreen text-4xl md:text-5xl">
          Are you passionate about teaching or mentorship?
        </h1>
        <h3 className="md:text-lg font-normal text-brand-grayNatural500 text-base w-full  md:max-w-[550px]">
          Be a part of UGRAD’s mission to shape future-ready professionals.
          Share your expertise, guide passionate learners, and make a lasting
          impact – By joining us as an Instructor or Mentor?
        </h3>
        <div>
          {bulletPointArray.map((point, index) => (
            <div key={index} className="flex items-center mb-2">
              <img
                src={Images.BulletPointIcon}
                alt="Check Icon"
                className="w-4 h-4 mr-2"
              />
              <p className="md:text-lg font-normal text-brand-grayNatural500 text-base w-full ">
                {point}
              </p>
            </div>
          ))}
        </div>
        <CustomButton
          label="Apply as Instructor/Mentor"
          background="#113025"
          labelClassName="text-base font-sans"
          onClick={() => alert("Button Clicked!")}
          className="text-white h-12 rounded-md border border-r-8 p-3"
          borderWidth="1"
        />
      </div>

      <div className="flex-1 flex justify-center items-center lg:items-start">
        <img
          src={Images.Passionate}
          alt="Passionate Section Image"
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default PassionateSection;
