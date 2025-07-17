import { useRef } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
// or any icon you prefer

interface FaqAccordionProps {
  className?: string;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

export default function FaqAccordion({
  title,
  children,
  className,
  isOpen,
  onClick,
}: FaqAccordionProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`${className} mb-[20px] rounded-[20px] p-[24px]  ${
        isOpen
          ? "border-[2px] border-[rgba(0,60,63,1)]"
          : "border border-[rgba(210,214,219,1)]"
      }  overflow-hidden `}
    >
      <button
        onClick={onClick}
        className={` text-left ${
          isOpen ? "mb-[12px]" : ""
        } w-full flex items-center justify-between   text-[20px] leading-[120%] font-semibold text-[rgba(0,60,63,1)] `}
      >
        {title}
        {isOpen ? (
          <BiMinus
            className={`transition-transform duration-300 `}
            fontSize={28}
          />
        ) : (
          <BiPlus
            className={`transition-transform duration-300 `}
            fontSize={28}
          />
        )}
      </button>

      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
        }}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}
