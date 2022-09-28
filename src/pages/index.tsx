import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import Button from "../components/button";
import Image from "next/image";
import Modal from "../components/modal";
import { lazy, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

interface teamDataProps {
  team: number;
  applicant: number;
}

const AnimatingNumber = lazy(() => import("../components/animatingnumber"));

function CurrentlyEnrolledTeam({ team }: { team: number }): JSX.Element {
  return (
    <div className="flex flex-row items-end gap-1 text-2xl">
      <p className="self-center text-lg">현재</p>
      <AnimatingNumber number={team} speed={14} />
      <p className="self-center text-lg">팀</p>
    </div>
  );
}

function CurrentlyEnrolledPeople({
  applicant,
}: {
  applicant: number;
}): JSX.Element {
  return (
    <div className="flex flex-row items-end gap-1 text-2xl">
      <p className="self-center text-lg">총</p>
      <AnimatingNumber number={applicant} speed={12} />
      <p className="self-center text-lg">명</p>
    </div>
  );
}

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { isLoading, data } = useQuery<teamDataProps>(["getData"], () =>
    axios.get("api/status").then((res) => {
      return res.data;
    })
  );

  return (
    <>
      <Head>
        <title>2022 대구를 빛내는 SW 해커톤</title>
        <meta name="description" content="2022 대구를 빛내는 SW 해커톤" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-col items-center justify-center max-w-2xl gap-4 px-2 pt-4 mx-auto overflow-hidden">
        <section className="mx-auto overflow-hidden border-2 rounded-xl border-zinc-300">
          <Image
            src="/poster.jpeg"
            alt="hackathon poster"
            width="3840"
            height="2592"
          />
        </section>
        <section className="flex flex-col w-full gap-4 mx-2">
          <div className="flex flex-row gap-4 md:flex-row">
            <div className="flex flex-col items-center justify-center w-full gap-1 py-4 mx-auto rounded-md bg-white/70 backdrop-blur-sm text-zinc-500">
              <div className="flex flex-col gap-2 mx-auto md:flex-row">
                <div className="flex flex-col items-center gap-4 text-xl font-medium text-zinc-800">
                  <CurrentlyEnrolledTeam
                    team={isLoading ? -1 : data?.team || 0}
                  />
                </div>
              </div>
              <h2 className="flex justify-center text-xl font-semibold">
                <span className="w-fit text-zinc-600">지원 완료</span>
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-1 py-4 mx-auto rounded-md bg-white/70 backdrop-blur-sm text-zinc-500">
              <div className="flex flex-col gap-2 px-4 mx-auto md:flex-row">
                <div className="flex flex-col items-center gap-4 text-xl font-medium text-zinc-800">
                  <CurrentlyEnrolledPeople
                    applicant={isLoading ? -1 : data?.applicant || 0}
                  />
                </div>
              </div>
              <h2 className="flex justify-center px-4 text-xl font-semibold">
                <span className="w-fit text-zinc-600">지원 완료</span>
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-center w-full gap-4 mx-auto rounded-md text-zinc-500">
            <div className="flex flex-col items-center justify-center w-full gap-2 py-4 rounded-md bg-white/70 backdrop-blur-sm">
              <h2 className="flex justify-center text-xl font-semibold">
                <span className="w-fit text-zinc-800">실시간 기대 상금</span>
              </h2>
              <div className="flex flex-row gap-1 text-2xl font-medium text-zinc-800">
                <p className="self-center text-xl">₩</p>
                <AnimatingNumber
                  number={Math.floor(
                    isLoading
                      ? -1
                      : typeof data === "undefined"
                      ? 1
                      : 10000000 / data.team
                  )}
                  speed={3}
                />
              </div>
              <div className="flex flex-col items-center justify-center text-sm italic md:flex-row text-zinc-500">
                <p className="block md:inline w-fit">기대 상금 공식</p>
                <p className="block md:inline w-fit font-extralight">
                  (전체 상금, 1천만원) / (지원 팀 수)
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="container flex flex-col items-center justify-center gap-4 pt-12 mx-auto pb-44">
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

      <Button
        handleClick={() => {
          setShowModal(true);
          document.body.style.overflow = "hidden";
        }}
      >
        지원이 마감되었습니다.
      </Button>
      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );
};

export default Home;
