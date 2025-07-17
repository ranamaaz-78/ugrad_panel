import { CustomButton } from "../../../CommonComponents";
import { Images } from "../../../constants/images";

const ProgramSection = () => {
  return (
    <section className={"py-8 px-4 md:px-8 lg:px-16 relative overflow-hidden"}>
      {/* Left Background Pattern with reduced opacity */}
      <div
        className="hidden lg:block absolute inset-0 w-full h-full z-0 opacity-10"
        style={{
          backgroundImage: `url(${Images.ProgramHomePatternLeft})`,
          backgroundSize: "cover",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Right Background Pattern with reduced opacity */}
      <div
        className=" hidden lg:block absolute inset-0 w-full h-full z-0 opacity-10"
        style={{
          backgroundImage: `url(${Images.ProgramHomePatternRight})`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="text-center mb-12 flex flex-col justify-center items-center gap-3">
        <p className="font-sans text-2xl md:text-5xl font-semibold text-primary-darkGreen">
          Our approach to career first
        </p>
        <p className="font-sans text-base md:text-lg font-normal text-brand-grayNatural500 w-[75%] md:w-1/2 ">
          A guided path built to help you learn smarter, faster, and grow
          stronger — with support every step of the way.
        </p>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative">
          {/* Vertical Timeline Line - Centered */}
          <div className="absolute left-1/2 transform -translate-x-0.5 top-20 bottom-0 w-0.5 bg-primary-darkGreen hidden lg:block"></div>

          {/* Timeline Items */}
          <div className="space-y-3 lg:space-y-20">
            {/* Item 1 - Mobile App (Content on Left, Timeline in Center) */}
            <div className="relative">
              <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-4 p-2 lg:p-0">
                {/* Content on Left */}
                <div className="space-y-4 w-full lg:w-1/3">
                  <h3 className="text-2xl font-normal font-sans text-primary-darkGreen">
                    Learn instantly & interactively
                  </h3>
                  <p className="text-lg font-sans font-normal text-brand-grayNatural500">
                    Access your courses anywhere with our mobile app. Share
                    progress, connect with peers, and continue learning on the
                    go with seamless synchronization across all devices.
                  </p>
                </div>
                <div>
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={Images.HomeProgramImage1}
                      alt={"Home Image 1"}
                      className="w-auto w-max[460px] h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Timeline Number - Centered */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary-darkGreen text-white rounded-full  items-center justify-center text-xl font-bold z-10 hidden lg:flex">
                01
              </div>
              {/* Mobile Timeline Number */}
              <div className="flex justify-center mt-8 lg:hidden">
                <div className="w-16 h-16 bg-primary-darkGreen text-white rounded-full hidden lg:flex items-center justify-center text-xl font-bold">
                  01
                </div>
              </div>
            </div>

            {/* Item 2 - AI Chatbot (Content on Right, Timeline in Center) */}
            <div className="relative">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-4 p-2 lg:p-0">
                <div>
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={Images.HomeProgramImage2}
                      alt={"Home Image 1"}
                      className="w-auto w-max[460px] h-full object-cover"
                    />
                  </div>
                </div>
                {/* Content on Left */}
                <div className="space-y-4 w-full lg:w-1/3">
                  <h3 className="text-2xl font-normal font-sans text-primary-darkGreen">
                    Ask with Mentra (AI Chatbot)
                  </h3>
                  <p className="text-lg font-sans font-normal text-brand-grayNatural500">
                    Meet your 24/7 personal AI mentor — ready to help you dig
                    deeper into complex topics, answer questions instantly, and
                    clear doubts while you're learning
                  </p>
                </div>
              </div>

              {/* Timeline Number - Centered */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary-darkGreen text-white rounded-full  items-center justify-center text-xl font-bold z-10 hidden lg:flex">
                02
              </div>
              {/* Mobile Timeline Number */}
              <div className="flex justify-center mt-8 lg:hidden">
                <div className="w-16 h-16 bg-primary-darkGreen text-white rounded-full hidden lg:flex items-center justify-center text-xl font-bold">
                  02
                </div>
              </div>
            </div>

            {/* Item 3 - Community (Content on Left, Timeline in Center) */}
            <div className="relative">
              <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-4 p-2 lg:p-0">
                {/* Content on Left */}
                <div className="space-y-4 w-full lg:w-1/3">
                  <h3 className="text-2xl font-normal font-sans text-primary-darkGreen">
                    Grow Together
                  </h3>
                  <p className="text-lg font-sans font-normal text-brand-grayNatural500">
                    Join a thriving community of mentors, peers, and working
                    professionals. Ask questions, expand your network, and
                    unlock real career opportunities — all in one place.
                  </p>
                  <CustomButton
                    label="Join the Community"
                    background="#113025"
                    labelClassName="text-base font-sans"
                    onClick={() => alert("Button Clicked!")}
                    className="text-white h-12 rounded-md border border-r-8 p-2"
                    borderWidth="1"
                  />
                </div>
                <div>
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={Images.HomeProgramImage3}
                      alt={"Home Image 1"}
                      className="w-auto w-max[460px] h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Timeline Number - Centered */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary-darkGreen text-white rounded-full  items-center justify-center text-xl font-bold z-10 hidden lg:flex">
                03
              </div>
              {/* Mobile Timeline Number */}
              <div className="flex justify-center mt-8 lg:hidden">
                <div className="w-16 h-16 bg-primary-darkGreen text-white rounded-full lg:flex items-center justify-center text-xl font-bold hidden">
                  03
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
