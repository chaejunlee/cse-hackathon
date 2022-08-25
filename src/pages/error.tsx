import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";

const Error = () => {
  return (
    <>
      <Head>
        <title>2022 경북대학교 컴퓨터학부 해커톤</title>
        <meta
          name="description"
          content="2022년 경북대학교 컴퓨터학부 해커톤"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="mx-auto container flex items-center justify-center text-3xl md:text-5xl grow text-zinc-100 pt-[30%] animate-bounce font-bold">
        문제가 발생하였습니다!
      </div>

      <div className="fixed flex justify-center left-10 right-10 bottom-10">
        <Link href="/apply">
          <a className="flex justify-center w-full max-w-4xl py-4 text-xl font-bold text-black transition-colors duration-300 ease-in-out bg-yellow-400 rounded-md shadow-2xl cursor-pointer md:py-4 md:text-3xl hover:bg-yellow-600 hover:text-zinc-800">
            뒤로 돌아가기
          </a>
        </Link>
      </div>
    </>
  );
};

export default Error;
