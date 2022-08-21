import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { clsx } from "clsx";

const TeamContext = createContext<{
  team: number;
  setTeam: React.Dispatch<React.SetStateAction<number>>;
}>({
  team: 0,
  setTeam: () => {
    return;
  },
});

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
        "font-mono transition-all duration-500 ease-out flex text-zinc-800 underline justify-end",
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

function CurrentlyEnrolledTeam(): JSX.Element {
  const { team: enrolled }: { team: number } = useContext<{
    team: number;
    setTeam: Dispatch<SetStateAction<number>>;
  }>(TeamContext);

  return (
    <div className="flex flex-row items-end gap-2 text-5xl">
      <div className="underline">
        <AnimatingNumber number={enrolled} speed={10} />
      </div>
      <p className="text-3xl self-center text-zinc-400">팀</p>
    </div>
  );
}

function CurrentlyEnrolledPeople(): JSX.Element {
  const enrolled = useRef(121);

  return (
    <div className="flex flex-row items-end gap-2 text-5xl">
      <div className=" underline">
        <AnimatingNumber number={enrolled.current} speed={8} />
      </div>
      <p className="text-3xl self-center text-zinc-400">명</p>
    </div>
  );
}

function ApplyButton(): JSX.Element {
  return (
    <div className="fixed flex justify-center left-10 right-10 bottom-10">
      <Link href="https://cse.knu.ac.kr">
        <a className="flex justify-center w-full max-w-4xl py-6 text-3xl font-bold text-zinc-800 transition-colors duration-300 ease-in-out shadow-2xl cursor-pointer bg-yellow-400 rounded-xl hover:bg-yellow-600 hover:text-zinc-300 animate-bounce">
          지원하기
        </a>
      </Link>
    </div>
  );
}

const Home: NextPage = () => {
  const [team, setTeam] = useState(62);

  return (
    <TeamContext.Provider value={{ team, setTeam }}>
      <Head>
        <title>2022 경북대학교 컴퓨터학부 해커톤</title>
        <meta
          name="description"
          content="2022년 경북대학교 컴퓨터학부 해커톤"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex flex-row max-w-4xl px-4 pt-4 md:pt-10 mx-auto md:items-end md:flex-row">
        <h1 className="text-2xl font-bold text-yellow-400 sm:text-4xl grow">
          <span className="block">2022 경북대학교</span>
          <span className="block">컴퓨터학부 해커톤</span>
        </h1>
        <div className="flex flex-col self-end gap-2 w-fit">
          <i className="text-gray-400 text-xs md:text-base">Sponsored by</i>
          <Link href="https://ejn.gg/kr/">
            <a className="w-16 md:w-24 self-end">
              <Image src="/ejn.png" alt="ejn logo" width="96px" height="25px" />
            </a>
          </Link>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center max-w-2xl mx-auto pb-36 md:pb-0">
        <section className="w-fit mx-auto pt-12 md:pt-20">
          <div className="mx-auto w-fit text-zinc-500 flex flex-col justify-center items-center gap-4">
            <h2 className="px-4 text-4xl font-semibold flex justify-center">
              <span className="w-fit text-zinc-700">실시간 지원 정보</span>
            </h2>
            <div className="flex flex-col px-4 mx-auto gap-2 md:flex-row">
              <div className="flex flex-col items-center gap-4 text-xl font-medium text-zinc-400 grow">
                <CurrentlyEnrolledTeam />
                <CurrentlyEnrolledPeople />
              </div>
            </div>
          </div>
          <div className="pt-12 mx-auto w-fit text-zinc-500 flex flex-col justify-center items-center gap-4">
            <h2 className="px-4 text-4xl font-semibold flex justify-center">
              <span className="w-fit text-zinc-700">실시간 기대 상금</span>
            </h2>
            <div className="text-xl w-fit flex flex-col md:flex-col gap-1 text-zinc-400 items-center justify-center">
              <p className="block md:inline w-fit">지금 지원하면</p>
              <p className="block md:inline w-fit">기대 상금</p>
              <div className="flex flex-row gap-1 text-5xl text-zinc-800">
                <p className="text-3xl self-center">₩</p>
                <AnimatingNumber
                  number={Math.floor((24 / team) * 10000000)}
                  speed={2}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-1 text-zinc-400 items-center justify-center italic">
              <p className="block md:inline w-fit">기대 상금 공식</p>
              <p className="block md:inline w-fit font-extralight">
                (시상 팀 수 - 24팀) / (지원 팀 수) * (전체 상금 - 1천만원)
              </p>
            </div>
          </div>
        </section>
      </main>
      <ApplyButton />
    </TeamContext.Provider>
  );
};

export default Home;
