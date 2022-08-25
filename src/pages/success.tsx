import Head from "next/head";
import Header from "../components/header";

const Success = () => {
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
        신청이 완료되었습니다!
      </div>
    </>
  );
};

export default Success;
