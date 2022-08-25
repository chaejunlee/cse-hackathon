import Link from "next/link";
import { ReactNode } from "react";

function Button({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className="fixed flex justify-center left-10 right-10 bottom-10">
      <Link href="/apply">
        <a className="flex justify-center w-full max-w-4xl py-4 text-xl font-bold text-black transition-colors duration-300 ease-in-out bg-yellow-400 rounded-md shadow-2xl cursor-pointer md:py-4 md:text-3xl hover:bg-yellow-600 hover:text-zinc-800 animate-bounce">
          {children}
        </a>
      </Link>
    </div>
  );
}

export default Button;
