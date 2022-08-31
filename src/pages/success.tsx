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
        <title>2022 대구를 빛내는 SW 해커톤</title>
        <meta name="description" content="2022 대구를 빛내는 SW 해커톤" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="mx-auto container flex flex-col items-center justify-center py-[20vh] gap-4 overflow-hidden">
        <Confetti active={showConfetti} config={config} />
        <h2 className="text-3xl font-bold md:text-5xl text-zinc-100">
          신청이 완료되었습니다!
        </h2>
        <div className="flex flex-col items-center text-2xl justify-center gap-4">
          <p className="text-zinc-300 text-center">
            팀장님께서는 오픈톡방으로
            <br />
            입장해주세요.
          </p>
          <a
            className="px-4 py-2 rounded-md text-black font-bold bg-yellow-300 text-base"
            href="https://open.kakao.com/o/g0F7sPye"
            target="_blank"
            rel="noopener noreferrer"
          >
            해커톤 오픈톡방 입장하기
          </a>
        </div>
      </main>
    </>
  );
};

export default Success;
