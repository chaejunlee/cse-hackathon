import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/header";

const Error = () => {
  const router = useRouter();
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

      <div className="mx-auto container flex flex-col items-center justify-center pt-[30vh] gap-4">
        <h2 className="text-3xl font-bold md:text-5xl text-zinc-100">
          문제가 발생하였습니다!
        </h2>
        <p className="text-lg text-zinc-300">
          문제가 지속되는 경우에는 해커톤 TF로 연락주세요.
        </p>
        <p className="text-lg text-zinc-300">
          학생회장 김도현 이메일 주소: 00dh.kim [at] gmail.com
        </p>
        <a
          className="px-4 py-2 rounded-md text-zinc-black bg-zinc-300 "
          href="mailto:00dh.kim@gmail.com"
        >
          학생회장 김도현에게 메일 보내기
        </a>
      </div>

      <div className="fixed flex justify-center left-10 right-10 bottom-10">
        <button
          onClick={() => router.back()}
          className="flex justify-center w-full max-w-4xl py-4 text-xl font-bold text-black transition-colors duration-300 ease-in-out bg-yellow-400 rounded-md shadow-2xl cursor-pointer md:py-4 md:text-3xl hover:bg-yellow-600 hover:text-zinc-800"
        >
          뒤로 돌아가기
        </button>
      </div>
    </>
  );
};

export default Error;
