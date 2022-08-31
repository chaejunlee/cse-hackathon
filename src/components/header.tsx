import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="flex flex-row max-w-4xl px-4 pt-4 mx-auto md:pt-10 md:items-end md:flex-row">
        <h1 className="text-2xl font-bold sm:text-4xl grow">
          <Link href={"/"}>
            <a>
              <h1 className="bg-clip-text text-transparent bg-gradient-to-br w-fit from-yellow-400 via-[rgb(218,108,128)] to-[rgb(162,87,152)] cursor-pointer hover:scale-105 transition-all duration-300 ease-out hover:drop-shadow-xl">
                <p>2022</p>
                <p>대구를 빛내는</p>
                <p>SW 해커톤</p>
              </h1>
            </a>
          </Link>
        </h1>
        <div className="flex flex-col justify-end gap-2 w-fit">
          <i className="self-end text-xs text-gray-400 md:text-base">
            Sponsored by
          </i>
          <Link href="https://twip.kr/">
            <a className="w-24 md:w-40">
              <div className="transition-all duration-300 ease-out hover:scale-105 hover:drop-shadow-xl">
                <Image
                  src="/twip.png"
                  alt="twip logo"
                  width="170px"
                  height="50px"
                />
              </div>
            </a>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
