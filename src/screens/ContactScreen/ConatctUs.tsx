import { Images } from "../../constants/images";
import { GrLinkNext } from "react-icons/gr";
import Form from "./components/Form";
import { useState } from "react";
const ConatctUs = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const onSubmit = () => {};

  const onChange = (field: string, value: string) => {
    setData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <div className="w-full">
      {/* Contact Us Image */}
      <div className="w-full py-[45px] md:py-[60px] bg-primary-darkGreen relative px-4 md:px-12">
        <div
          className=" absolute w-full md:w-[70%] h-full z-20 right-0 top-0 left-0"
          style={{
            backgroundImage: `url(${Images.Lines})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="container mx-auto px-4">
          <div className=" w-full flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-[50%]   md:mb-0 mb-[30px]">
              <h2 className="font-sans font-semibold text-[30px] sm:text-[36px] md:text-[48px] text-left text-white">
                Learn. Grow. Lead. <br /> With UGRAD.
              </h2>
            </div>
            <div className="w-full md:w-[50%] flex justify-end">
              <div className="w-full lg:w-[400px] h-auto text-right rounded-[20px] border-[2px] border-white overflow-hidden">
                <img
                  className="w-full obeject-cover "
                  src={Images.ConatctUsImage}
                  alt="About Us Banner Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Us Form */}
      <div className="container mx-auto px-4 md:px-12 py-[50px] md:py-[80px]">
        <div className="w-full flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:max-w-[442px] mr-0 lg:mr-[10px]">
            <h2 className="font-sans font-semibold text-[30px] sm:text-[36px] md:text-[40px] lg:text-[48px] text-left text-[#113025] mb-[30px]">
              Get in Touch
            </h2>
            <p className="font-sans text-[16px] sm:text-[18px] leading-[22px] sm:leading-[24px]   text-justify text-[rgba(108,115,127,1)]  font-normal">
              Our dedicated team is here to help and ensure your experience with
              Ugrad is smooth and satisfying.
            </p>
            <a
              href={"mailto:someone@example.com"}
              style={{ textDecoration: "none" }}
              className="mt-[30px] bg-[rgba(249,250,251,1)] py-[16px] px-[24px] flex justify-between rounded-[12px]"
            >
              <div>
                <p className=" font-sans font-normal text-[12px] leading-[18px] text-[rgba(108,115,127,1)]">
                  You can email us here
                </p>
                <p className="font-sans text-[16px] font-normal leading-[22px] text-[rgba(17,48,37,1)]">
                  support@ugrad.com
                </p>
              </div>
              <GrLinkNext className="text-[rgba(17,48,37,1)] text-[24px] self-center -rotate-45" />
            </a>
            <a
              href={"tel:310-437-2766"}
              style={{ textDecoration: "none" }}
              className="mt-[30px] bg-[rgba(249,250,251,1)] py-[16px] px-[24px] flex justify-between rounded-[12px]"
            >
              <div>
                <p className=" font-sans font-normal text-[12px] leading-[18px] text-[rgba(108,115,127,1)]">
                  Or just call us
                </p>
                <p className="font-sans text-[16px] font-normal leading-[22px] text-[rgba(17,48,37,1)]">
                  310-437-2766
                </p>
              </div>
              <GrLinkNext className="text-[rgba(17,48,37,1)] text-[24px] self-center -rotate-45" />
            </a>
          </div>
          <div className="lg:max-w-[680px] w-full lg:mt-0 mt-[30px]">
            <Form data={data} onChange={onChange} onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConatctUs;
