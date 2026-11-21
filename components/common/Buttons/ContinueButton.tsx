import { ReactNode } from "react";

type ContinueButtonProps = {
    text: string;
    onClick: () => void;
    icon?: ReactNode;
    className?: string;
}

const ContinueButton = ({ text, onClick, icon, className }: ContinueButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`card w-full bg-sun py-3 font-fredoka text-2xl font-semibold flex justify-center items-center gap-2 cursor-pointer ${className ?? ''}`}
    >
      <span>{text}</span>
      {icon}
    </button>
  );
};

export default ContinueButton;
