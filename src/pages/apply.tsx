import Head from "next/head";
import Header from "../components/header";
import { SubmitHandler, useForm, UseFormRegister } from "react-hook-form";
import { useState } from "react";
import clsx from "clsx";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface memberProps {
  name: string;
  student_number: string;
  phone_number?: string;
  github?: string;
}

interface formProps {
  teamName: string;
  leader: memberProps;
  member1: memberProps;
  member2: memberProps;
  member3: memberProps;
  member4: memberProps;
}

const TeammateForm = ({
  numOfTeammates,
  register,
}: {
  numOfTeammates: number;
  register: UseFormRegister<formProps>;
}): JSX.Element => {
  return (
    <>
      <div className="flex flex-col gap-4 px-3 py-3 rounded-md bg-white/50 backdrop-blur-sm">
        <div>
          <h3 className="flex items-center gap-1 text-xl font-semibold text-zinc-800">
            팀원 {numOfTeammates}
          </h3>
        </div>
        <div>
          <label htmlFor="teamName" className="text-zinc-800">
            이름<span className="text-red-500">*</span>
          </label>
          {numOfTeammates === 1 && (
            <input
              placeholder="팀원의 이름을 입력하세요."
              className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
              {...register("member1.name")}
            />
          )}
          {numOfTeammates === 2 && (
            <input
              placeholder="팀원의 이름을 입력하세요."
              className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
              {...register("member2.name")}
            />
          )}
          {numOfTeammates === 3 && (
            <input
              placeholder="팀원의 이름을 입력하세요."
              className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
              {...register("member3.name")}
            />
          )}
          {numOfTeammates === 4 && (
            <input
              placeholder="팀원의 이름을 입력하세요."
              className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
              {...register("member4.name")}
            />
          )}
        </div>

        <div>
          <label htmlFor="teamName" className="text-zinc-800">
            학번<span className="text-red-500">*</span>
          </label>
          {numOfTeammates === 1 && (
            <input
              placeholder="팀장의 학번을 입력하세요."
              className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
              {...register("member1.student_number")}
            />
          )}
          {numOfTeammates === 2 && (
            <input
              placeholder="팀장의 학번을 입력하세요."
              className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
              {...register("member2.student_number")}
            />
          )}
          {numOfTeammates === 3 && (
            <input
              placeholder="팀장의 학번을 입력하세요."
              className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
              {...register("member3.student_number")}
            />
          )}
          {numOfTeammates === 4 && (
            <input
              placeholder="팀장의 학번을 입력하세요."
              className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
              {...register("member4.student_number")}
            />
          )}
        </div>
      </div>
    </>
  );
};

const Apply = () => {
  const { register, handleSubmit } = useForm<formProps>({ mode: "onSubmit" });
  const [numOfTeammates, setNumOfTeammates] = useState<number>(1);
  const [animateRef] = useAutoAnimate<HTMLDivElement>();
  const onSubmit: SubmitHandler<formProps> = (data) => console.log(data);
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

      <main className="container flex flex-col items-center justify-center max-w-2xl px-2 pt-12 mx-auto pb-36">
        <form
          className="flex flex-col w-full max-w-lg gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-4 px-3 py-3 rounded-md bg-white/50 backdrop-blur-sm">
            <div>
              <label htmlFor="teamName">
                <h3 className="flex items-center gap-1 text-xl font-semibold text-zinc-800">
                  팀명<span className="text-sm text-red-500">*</span>
                </h3>
              </label>
              <input
                placeholder="팀의 이름을 입력하세요."
                className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
                {...register("teamName")}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 px-3 py-3 rounded-md bg-white/50 backdrop-blur-sm">
            <div>
              <label
                htmlFor="teamName"
                className="text-xl font-semibold text-zinc-800"
              >
                참가 인원 수<span className="text-red-500">*</span>:{" "}
                <b>{numOfTeammates}명</b>
              </label>
              <input
                onChange={(e) => {
                  setNumOfTeammates(Number(e.target.value));
                }}
                list="numberOfTeam"
                className="w-full"
                type={"range"}
                value={numOfTeammates}
                min="1"
                max="5"
              />
              <datalist id="numberOfTeam">
                <option value="1" label="1명"></option>
                <option value="2" label="2명"></option>
                <option value="3" label="3명"></option>
                <option value="4" label="4명"></option>
                <option value="5" label="5명"></option>
              </datalist>
              <div className="flex justify-between text-sm">
                <p className={clsx(numOfTeammates === 1 && "font-bold ")}>
                  1명
                </p>
                <p>2명</p>
                <p>3명</p>
                <p>4명</p>
                <p>5명</p>
              </div>
              <p className="text-xl"></p>
            </div>{" "}
          </div>

          <div className="flex flex-col gap-4 px-3 py-3 rounded-md bg-white/50 backdrop-blur-sm">
            <div>
              <h3 className="flex items-center gap-1 text-xl font-semibold text-zinc-800">
                팀장<span className="text-sm text-red-500">(필수)</span>
              </h3>
            </div>
            <div>
              <label htmlFor="teamName" className="text-zinc-800">
                이름<span className="text-red-500">*</span>
              </label>
              <input
                placeholder="팀장의 이름을 입력하세요. (컴퓨터학부 또는 연계/융합 전공 재학생이어야 함)"
                className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
                {...register("leader.name")}
              />
            </div>

            <div>
              <label htmlFor="teamName" className="text-zinc-800">
                학번<span className="text-red-500">*</span>
              </label>
              <input
                placeholder="팀장의 학번을 입력하세요."
                className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
                {...register("leader.student_number")}
              />
            </div>

            <div>
              <label htmlFor="teamName" className="text-zinc-800">
                전화번호<span className="text-red-500">*</span>
              </label>
              <input
                placeholder="팀장의 전화번호를 입력하세요."
                className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
                {...register("leader.phone_number")}
              />
            </div>

            <div>
              <label htmlFor="teamName" className="text-zinc-800">
                깃헙 링크<span className="text-red-500">*</span>
              </label>
              <input
                placeholder="팀장의 깃헙 링크를 입력하세요."
                className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
                {...register("leader.github")}
              />
            </div>
          </div>
          {animateRef ? (
            <div ref={animateRef} className="flex flex-col gap-4">
              {Array.from(Array(numOfTeammates)).map((_, index) => {
                return (
                  <>
                    {index > 0 && (
                      <TeammateForm
                        key={"teammate_" + index}
                        numOfTeammates={index}
                        register={register}
                      />
                    )}
                  </>
                );
              })}
            </div>
          ) : (
            Array.from(Array(numOfTeammates)).map((_, index) => {
              return (
                <>
                  {index > 0 && (
                    <TeammateForm
                      key={"teammate_" + index}
                      numOfTeammates={index}
                      register={register}
                    />
                  )}
                </>
              );
            })
          )}
          <button className="flex justify-center w-full max-w-4xl py-4 text-xl font-bold text-white transition-colors duration-300 ease-in-out bg-yellow-400 rounded-md shadow-2xl cursor-pointer md:py-4 md:text-3xl hover:bg-yellow-600 hover:text-zinc-300">
            지원하기
          </button>
        </form>
      </main>
    </>
  );
};

export default Apply;
