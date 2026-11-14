import { ReactNode } from "react";

type ContinueButtonProps = {
    text: string;
    onClick: () => void;
    icon?: ReactNode;
}

const ContinueButton = ({ text, onClick, icon }: ContinueButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='card w-full bg-sun py-3 font-fredoka text-2xl font-semibold flex justify-center items-center gap-2 cursor-pointer'
    >
      <span>{text}</span>
      {icon}
    </button>
  );
};

export default ContinueButton;
