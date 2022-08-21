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

function AnimatingNumber({ number }: { number: number }): JSX.Element {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => {
        let increment = 0;
        if (prev < number) {
          increment = Math.ceil((number - prev) / 2);
        }
        return prev + increment;
      });
    }, 50);
  }, [number, count]);

  return (
    <div
      className={clsx(
        "font-mono transition-all duration-500 ease-out flex text-white justify-end",
        count === 0 ? "translate-y-6 opacity-0" : "translate-y-0 opacity-100"
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
    <div className="flex flex-row items-end gap-2">
      <div className="text-6xl md:text-9xl">
        <AnimatingNumber number={enrolled} />
      </div>
      <p className="pb-2 text-zinc-400">팀 지원 완료</p>
    </div>
  );
}

function CurrentlyEnrolledPeople(): JSX.Element {
  const enrolled = useRef(121);

  return (
    <div className="flex flex-row items-end gap-2">
      <div className="text-6xl md:text-9xl">
        <AnimatingNumber number={enrolled.current} />
      </div>
      <p className="pb-2 text-zinc-400">명 지원 완료</p>
    </div>
  );
}

function ApplyButton(): JSX.Element {
  return (
    <div className="fixed flex justify-center left-10 right-10 bottom-10">
      <Link href="https://naver.com">
        <a className="flex justify-center w-full max-w-4xl py-6 text-3xl font-bold text-white transition-colors duration-300 ease-in-out shadow-2xl cursor-pointer bg-amber-400 rounded-xl hover:bg-amber-600 hover:text-zinc-300">
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

      <header className="flex flex-col max-w-4xl px-4 pt-4 md:pt-10 mx-auto md:items-end md:flex-row">
        <h1 className="text-2xl font-bold text-blue-400 drop-shadow-md sm:text-4xl grow underline underline-offset-2">
          2022 <span className="block">경북대학교 컴퓨터학부</span>
          <span className="block font-mono">HACKERTHON</span>
        </h1>
        <div className="flex flex-col self-end gap-2 w-fit">
          <i className="text-gray-300">Sponsored by</i>
          <Link href="https://ejn.gg/kr/">
            <a className="w-16 md:w-24 self-end">
              <Image src="/ejn.png" alt="ejn logo" width="96px" height="25px" />
            </a>
          </Link>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center max-w-2xl mx-auto pb-36 md:pb-0">
        <section className="w-full pt-4 md:pt-12">
          <h2 className="px-4 mx-auto text-3xl font-semibold">
            <span className="p-2 italic text-zinc-400">#실시간 지원 정보</span>
          </h2>
          <div className="flex flex-col gap-4 px-4 pt-8 mx-auto md:pt-4 md:flex-row">
            <div className="flex flex-col items-center gap-4 text-xl font-medium text-zinc-200 grow">
              <CurrentlyEnrolledTeam />
              <CurrentlyEnrolledPeople />
            </div>
          </div>
          <div className="pt-8 mx-auto w-fit text-zinc-200 flex flex-col justify-center items-center gap-2">
            <div className="text-3xl w-fit flex flex-col md:flex-row gap-2 items-center justify-center">
              <p className="block md:inline w-fit">지금 지원하면</p>
              <p className="block md:inline w-fit">기대 상금</p>
              <div className="flex flex-row gap-2">
                <AnimatingNumber number={Math.floor((24 / team) * 10000000)} />{" "}
                원!!!
              </div>
            </div>
            <div className="text-zinc-700 flex flex-col md:flex-row gap-2 items-center justify-center">
              <p className="block md:inline w-fit">기대 상금 공식</p>
              <p className="block md:inline w-fit">
                (시상 팀 수) / (지원 팀 수) * (전체 상금)
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
