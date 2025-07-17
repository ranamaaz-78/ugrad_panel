import { useState } from "react";
import { CustomButton } from "../../../CommonComponents";
import ThankYouPopUp from "../../../CommonComponents/popUp/ThankYouPopUp";
import { database } from "../../../firebase/firebaseConfig";
import { push, ref } from "firebase/database";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface FormProps {
  className?: string;
}

const Form = (props: FormProps) => {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const handlePopUpClose = () => setOpenPopUp(false);

  const validateForm = (): boolean => {
    if (!data.name.trim()) {
      alert("Name is required");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      alert("Please enter a valid email");
      return false;
    }
    if (!/^\+?[\d\s-]{10,}$/.test(data.phone)) {
      alert("Please enter a valid phone number");
      return false;
    }
    return true;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const formRef = ref(database, "formSubmissions");
      await push(formRef, {
        ...data,
        timestamp: new Date().toISOString(), // Better for querying
      });
      setData({ name: "", email: "", phone: "" });
      setOpenPopUp(true);
    } catch (error) {
      console.error("Firebase submission error:", error);
      alert("Submission failed. Please try again.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <div
        className={`${props.className} rounded-[20px] border-[1px] p-[16px]  border-[rgba(210,214,219,1)]`}
      >
        <h4 className="font-sans font-semibold text-[18px] leading-[24px] text-[rgba(17,48,37,1)] mb-[5px]">
          Join Now
        </h4>
        <p className="text-[14px] font-normal leading-[20px] font-sans text-[rgba(108,115,127,1)] mb-[16px]">
          This program is under development, join the waitlist to get notify
          when everything is ready
        </p>
        <form onSubmit={onSubmit}>
          <div className="mb-[16px] w-full">
            <label className="block mb-[8px] font-sans text-[14px] text-[rgba(17,25,39,1)] leading-[20px]">
              Full Name
            </label>
            <input
              name="name"
              value={data.name}
              onChange={handleInputChange}
              type="text"
              className="w-full p-[16px] border placeholder:text-[14px] placeholder:text-[rgba(157,164,174,1)] border-[rgba(210,214,219,1)] rounded-[8px]"
              placeholder="Ex. Jone Alex"
            />
          </div>
          <div className="mb-[16px] w-full">
            <label className="block mb-[8px] font-sans text-[14px] text-[rgba(17,25,39,1)] leading-[20px]">
              Email address
            </label>
            <input
              name="email"
              onChange={handleInputChange}
              value={data.email}
              type="email"
              className="w-full p-[16px] border placeholder:text-[14px] placeholder:text-[rgba(157,164,174,1)] border-[rgba(210,214,219,1)] rounded-[8px]"
              placeholder="Ex. jone@example.com"
            />
          </div>
          <div className="mb-[16px] w-full">
            <label className="block mb-[8px] font-sans text-[14px] text-[rgba(17,25,39,1)] leading-[20px]">
              Phone Number (WhatsApp)
            </label>
            <input
              name="phone"
              onChange={handleInputChange}
              value={data.phone}
              type="number"
              className="w-full p-[16px] border placeholder:text-[14px] placeholder:text-[rgba(157,164,174,1)] border-[rgba(210,214,219,1)] rounded-[8px]"
              placeholder="+92 1234567897"
            />
          </div>
          <CustomButton
            type="submit"
            label="Submit"
            background="#113025"
            labelClassName="text-base font-sans"
            className="text-white h-12 rounded-md border border-r-8 p-2"
            borderWidth="1"
          />
        </form>
      </div>
      {openPopUp && <ThankYouPopUp handleClose={handlePopUpClose} />}
    </>
  );
};

export default Form;
