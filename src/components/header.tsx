import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="flex flex-row max-w-4xl px-4 pt-4 mx-auto md:pt-10 md:items-end md:flex-row">
        <h1 className="text-2xl font-bold sm:text-4xl grow">
          <div className="bg-gradient-to-br text-transparent w-fit bg-clip-text from-yellow-400 via-[rgb(218,108,128)] to-[rgb(162,87,152)]">
            2022 경북대학교
            <br />
            컴퓨터학부 해커톤
          </div>
        </h1>
        <div className="flex flex-col self-end gap-2 w-fit">
          <i className="text-xs text-gray-400 md:text-base">Sponsored by</i>
          <Link href="https://ejn.gg/kr/">
            <a className="self-end w-16 md:w-24">
              <Image src="/ejn.png" alt="ejn logo" width="96px" height="25px" />
            </a>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
