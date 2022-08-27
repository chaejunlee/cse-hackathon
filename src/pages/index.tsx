import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { clsx } from "clsx";
import Header from "../components/header";
import { useQuery } from "react-query";
import axios from "axios";
import Button from "../components/button";

interface teamDataProps {
  team: number;
  applicant: number;
}

function AnimatingNumber({
  number,
  speed,
}: {
  number: number;
  speed: number;
}): JSX.Element {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => {
        let increment = 0;
        if (prev < number) {
          increment = Math.ceil((number - prev) / speed);
        }
        return prev + increment;
      });
    }, 50);
  }, [number, count, speed]);

  return (
    <div
      className={clsx(
        "font-mono transition-all duration-500 ease-out flex justify-end",
        count === 0
          ? "opacity-50 scale-50"
          : count === number
          ? "opacity-100 scale-100"
          : "opacity-100 scale-100"
      )}
    >
      {count.toLocaleString()}
    </div>
  );
}

function CurrentlyEnrolledTeam({ team }: { team: number }): JSX.Element {
  return (
    <div className="flex flex-row items-end gap-2 text-5xl">
      <AnimatingNumber number={team} speed={10} />
      <p className="self-center text-3xl text-zinc-500">팀</p>
    </div>
  );
}

function CurrentlyEnrolledPeople({
  applicant,
}: {
  applicant: number;
}): JSX.Element {
  return (
    <div className="flex flex-row items-end gap-2 text-5xl">
      <AnimatingNumber number={applicant} speed={8} />
      <p className="self-center text-3xl text-zinc-500">명</p>
    </div>
  );
}

const Home: NextPage = () => {
  const { isLoading, data } = useQuery<teamDataProps>(["getData"], () =>
    axios.get("api/status").then((res) => {
      return res.data;
    })
  );

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

      <main className="flex flex-col items-center justify-center max-w-2xl gap-4 mx-auto">
        <section className="flex flex-col w-full gap-4 px-2 pt-4 md:pt-12 md:flex-row">
          <div className="flex flex-col items-center justify-center w-full gap-4 py-6 mx-auto rounded-md md:py-12 bg-white/70 backdrop-blur-sm text-zinc-500">
            <h2 className="flex justify-center px-4 text-2xl font-semibold">
              <span className="w-fit text-zinc-800">실시간 지원 완료 팀</span>
            </h2>
            <div className="flex flex-col gap-2 px-4 mx-auto md:flex-row">
              <div className="flex flex-col items-center gap-4 text-xl font-medium text-zinc-800">
                <CurrentlyEnrolledTeam
                  team={isLoading ? -1 : data?.team || 0}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-4 py-6 mx-auto rounded-md md:py-12 bg-white/70 backdrop-blur-sm text-zinc-500">
            <h2 className="flex justify-center px-4 text-2xl font-semibold">
              <span className="w-fit text-zinc-800">실시간 지원 완료 인원</span>
            </h2>
            <div className="flex flex-col gap-2 px-4 mx-auto md:flex-row">
              <div className="flex flex-col items-center gap-4 text-xl font-medium text-zinc-800">
                <CurrentlyEnrolledPeople
                  applicant={isLoading ? -1 : data?.applicant || 0}
                />
              </div>
            </div>
          </div>
        </section>
        <div className="flex items-center justify-center w-full gap-4 px-2 mx-auto rounded-md text-zinc-500">
          <div className="flex flex-col items-center justify-center w-full gap-4 py-6 rounded-md md:py-12 bg-white/70 backdrop-blur-sm">
            <h2 className="flex justify-center text-2xl font-semibold">
              <span className="w-fit text-zinc-800">실시간 기대 상금</span>
            </h2>
            <div className="flex flex-col items-center justify-center gap-1 text-xl w-fit md:flex-col text-zinc-500">
              <p className="block md:inline w-fit">지금 지원하면</p>
              <p className="block md:inline w-fit">기대 상금</p>
            </div>
            <div className="flex flex-row gap-1 text-5xl font-medium text-zinc-800">
              <p className="self-center text-3xl">₩</p>
              <AnimatingNumber
                number={Math.floor(
                  isLoading
                    ? -1
                    : typeof data === "undefined"
                    ? 1
                    : 10000000 / data.team
                )}
                speed={2}
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-1 italic md:flex-row text-zinc-500">
              <p className="block md:inline w-fit">기대 상금 공식</p>
              <p className="block md:inline w-fit font-extralight">
                (전체 상금, 1천만원) / (지원 팀 수)
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="container flex flex-col items-center justify-center gap-4 pt-12 mx-auto pb-44 md:pb-0">
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
      </footer>

      <Button>지원하기</Button>
    </>
  );
};

export default Home;
