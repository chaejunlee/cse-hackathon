import Head from "next/head";
import Header from "../components/header";
import Confetti from "react-dom-confetti";
import { useEffect, useState } from "react";

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 31,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "19px",
  height: "10px",
  perspective: "803px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

const Success = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => {
    setShowConfetti(true);
  }, []);

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

      <div className="mx-auto container flex flex-col items-center justify-center py-[30vh] gap-4 overflow-hidden">
        <Confetti active={showConfetti} config={config} />
        <h2 className="text-3xl font-bold md:text-5xl text-zinc-100">
          신청이 완료되었습니다!
        </h2>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-lg text-zinc-300">
            문의 사항이 있다면 해커톤 TF로 연락주세요.
          </p>
          <p className="text-lg text-zinc-300">학생회장 김도현 이메일 주소:</p>
          <p className="text-lg text-zinc-300">00dh.kim [at] gmail.com</p>
        </div>
        <a
          className="px-4 py-2 rounded-md text-zinc-black bg-zinc-300 "
          href="mailto:00dh.kim@gmail.com"
        >
          학생회장 김도현에게 메일 보내기
        </a>
      </div>
    </>
  );
};

export default Success;
