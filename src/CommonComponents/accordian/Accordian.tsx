import { useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
// or any icon you prefer

interface AccordionProps {
  className?: string;
  title: string;
  children: React.ReactNode;
}

export default function Accordion({
  title,
  children,
  className,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`${className} mb-[20px] border border-[rgba(210,214,219,1)] rounded-md overflow-hidden `}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" text-left w-full flex items-center justify-between px-4 py-3 text-[16px] leading-[22px] font-medium text-[rgba(0,60,63,1)] hover:bg-gray-50"
      >
        {title}
        <BiChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
        }}
      >
        <div className="px-4 py-3 text-sm text-gray-600 border-t bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
