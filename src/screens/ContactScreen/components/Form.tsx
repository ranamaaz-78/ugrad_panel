interface FormProps {
  data?: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  };
  onSubmit?: () => void;
  onChange?: (field: string, value: string) => void;
}

const Form = (props: FormProps) => {
  return (
    <div className="rounded-[20px] border-[1px] p-[16px] md:p-[32px] border-[rgba(210,214,219,1)]">
      <h4 className="font-sans font-semibold text-[18px] leading-[24px] text-[rgba(17,48,37,1)] mb-[16px] md:mb-[32px]">
        Contact Us
      </h4>
      <form>
        <div className="mb-[16px] w-full">
          <label className="block mb-[8px] font-sans text-[14px] text-[rgba(17,25,39,1)] leading-[20px]">
            Full Name
          </label>
          <input
            value={props.data?.name || ""}
            onChange={(e) => props.onChange?.("name", e.target.value)}
            type="text"
            className="w-full p-[16px] border placeholder:text-[14px] placeholder:text-[rgba(157,164,174,1)] border-[rgba(210,214,219,1)] rounded-[8px]"
            placeholder="Ex. Jone Alex"
          />
        </div>
        <div className="mb-[16px] w-full">
          <label className="block mb-[8px] font-sans text-[14px] text-[rgba(17,25,39,1)] leading-[20px]">
            Email
          </label>
          <input
            onChange={(e) => props.onChange?.("email", e.target.value)}
            value={props.data?.email || ""}
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
            onChange={(e) => props.onChange?.("phone", e.target.value)}
            value={props.data?.phone || ""}
            type="number"
            className="w-full p-[16px] border placeholder:text-[14px] placeholder:text-[rgba(157,164,174,1)] border-[rgba(210,214,219,1)] rounded-[8px]"
            placeholder="+92 1234567897"
          />
        </div>
        <div className="mb-[16px] w-full">
          <label className="block mb-[8px] font-sans text-[14px] text-[rgba(17,48,37,1)]">
            Message
          </label>
          <textarea
            onChange={(e) => props.onChange?.("message", e.target.value)}
            value={props.data?.message || ""}
            className="w-full p-[16px] border placeholder:text-[14px] placeholder:text-[rgba(157,164,174,1)] border-[rgba(210,214,219,1)] rounded-[8px]"
            rows={4}
            placeholder="Enter message"
          ></textarea>
        </div>
        <button
          onClick={props.onSubmit}
          type="submit"
          className="bg-primary-darkGreen text-white py-[12px] px-[24px] rounded-[8px] hover:bg-primary-dark-green-hover transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
