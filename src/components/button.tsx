import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement> | undefined;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ handleClick, children }) => {
  return (
    <div className="fixed flex justify-center left-4 right-4 bottom-4">
      <button
        onClick={handleClick}
        className="flex justify-center w-full max-w-4xl py-4 text-xl font-bold text-black transition-colors duration-300 ease-out bg-yellow-400 rounded-md shadow-2xl cursor-pointer md:py-4 md:text-3xl hover:bg-yellow-600 hover:text-zinc-800"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
