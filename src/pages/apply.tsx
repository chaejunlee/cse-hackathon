import Head from "next/head";
import Header from "../components/header";
import { SubmitHandler, useForm, UseFormRegister } from "react-hook-form";
import { useState } from "react";
import clsx from "clsx";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import axios from "axios";
import { useRouter } from "next/router";
import { phone_numberReg, student_numberReg } from "../utils/utils";

interface memberProps {
  name: string;
  student_number: string;
  phone_number?: string;
  github?: string;
}

interface formProps {
  teamName: string;
  leader: memberProps;
  member1?: memberProps;
  member2?: memberProps;
  member3?: memberProps;
  member4?: memberProps;
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
      <div className="flex flex-col gap-4 px-3 py-3 rounded-md bg-white/70 backdrop-blur-sm">
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
              {...register("member1.name", { required: true })}
            />
          )}
          {numOfTeammates === 2 && (
            <input
              placeholder="팀원의 이름을 입력하세요."
              className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
              {...register("member2.name", { required: true })}
            />
          )}
          {numOfTeammates === 3 && (
            <input
              placeholder="팀원의 이름을 입력하세요."
              className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
              {...register("member3.name", { required: true })}
            />
          )}
          {numOfTeammates === 4 && (
            <input
              placeholder="팀원의 이름을 입력하세요."
              className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
              {...register("member4.name", { required: true })}
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
              {...register("member1.student_number", {
                required: true,
                pattern: student_numberReg,
              })}
            />
          )}
          {numOfTeammates === 2 && (
            <input
              placeholder="팀장의 학번을 입력하세요."
              className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
              {...register("member2.student_number", {
                required: true,
                pattern: student_numberReg,
              })}
            />
          )}
          {numOfTeammates === 3 && (
            <input
              placeholder="팀장의 학번을 입력하세요."
              className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
              {...register("member3.student_number", {
                required: true,
                pattern: student_numberReg,
              })}
            />
          )}
          {numOfTeammates === 4 && (
            <input
              placeholder="팀장의 학번을 입력하세요."
              className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
              {...register("member4.student_number", {
                required: true,
                pattern: student_numberReg,
              })}
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
  const router = useRouter();
  const onSubmit: SubmitHandler<formProps> = (data) => {
    const formattedData = {
      team: data.teamName,
      member: [
        {
          name: data.leader.name,
          student_number: data.leader.student_number,
          phone_number: data.leader.phone_number,
          github: data.leader.github,
        },
        { ...data?.member1 },
        { ...data?.member2 },
        { ...data?.member3 },
        { ...data?.member4 },
      ].filter((_, index) => index <= numOfTeammates - 1),
    };
    axios
      .post("/api/apply", formattedData)
      .then(() => router.push("/success"))
      .catch(() => router.push("/error"));
  };
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

      <main className="container flex flex-col items-center justify-center max-w-2xl px-2 pt-12 pb-8 mx-auto">
        <form
          className="flex flex-col w-full max-w-lg gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2 px-3 py-3 rounded-md bg-white/70 backdrop-blur-sm">
            <label htmlFor="teamName">
              <h3 className="flex items-center gap-1 text-xl font-semibold text-zinc-800">
                팀명<span className="text-sm text-red-500">*</span>
              </h3>
            </label>
            <input
              placeholder="팀의 이름을 입력하세요."
              className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
              {...register("teamName", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-2 px-3 py-3 rounded-md bg-white/70 backdrop-blur-sm">
            <label
              htmlFor="teamName"
              className="text-xl font-semibold text-zinc-800"
            >
              참가 인원 수 <b>{numOfTeammates}명</b>
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
              max="4"
            />
            <datalist id="numberOfTeam">
              <option value="1" label="1명"></option>
              <option value="2" label="2명"></option>
              <option value="3" label="3명"></option>
              <option value="4" label="4명"></option>
            </datalist>
            <div className="flex justify-between text-sm">
              <p className={clsx(numOfTeammates === 1 && "font-bold ")}>1명</p>
              <p className={clsx(numOfTeammates === 2 && "font-bold ")}>2명</p>
              <p className={clsx(numOfTeammates === 3 && "font-bold ")}>3명</p>
              <p className={clsx(numOfTeammates === 4 && "font-bold ")}>4명</p>
            </div>
            <p className="text-xl"></p>
          </div>

          <div className="flex flex-col gap-4 px-3 py-3 rounded-md bg-white/70 backdrop-blur-sm">
            <div>
              <h3 className="flex items-center gap-1 text-xl font-semibold text-zinc-800">
                팀장<span className="text-sm text-red-500">*</span>
              </h3>
              <p className="text-sm text-zinc-600">
                팀장은 반드시 컴퓨터학부 또는 연계/융합 전공 재학생이어야
                합니다.
              </p>
            </div>
            <div>
              <label htmlFor="teamName" className="text-zinc-800">
                이름<span className="text-red-500">*</span>
              </label>
              <input
                placeholder="팀장의 이름을 입력하세요."
                className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
                {...register("leader.name", { required: true })}
              />
            </div>

            <div>
              <label htmlFor="teamName" className="text-zinc-800">
                학번<span className="text-red-500">*</span>
              </label>
              <input
                placeholder="학번 10자리를 입력하세요."
                className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
                {...register("leader.student_number", {
                  required: true,
                  pattern: student_numberReg,
                })}
              />
            </div>

            <div>
              <label htmlFor="teamName" className="text-zinc-800">
                전화번호<span className="text-red-500">*</span>{" "}
                <span className="text-sm italic text-zinc-600">
                  (&quot;-&quot; 를 포함해서 적어주세요.)
                </span>
              </label>
              <input
                placeholder="예시) 010-1234-5678"
                className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
                {...register("leader.phone_number", {
                  required: true,
                  pattern: phone_numberReg,
                })}
              />
            </div>

            <div>
              <label htmlFor="teamName" className="text-zinc-800">
                깃헙 아이디<span className="text-red-500">*</span>{" "}
                <span className="text-sm italic text-zinc-600">
                  (링크가 아닌 아이디만 입력하세요)
                </span>
              </label>
              <input
                placeholder="예시) knu_cse_student"
                className="block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm"
                {...register("leader.github", { required: true })}
              />
            </div>
          </div>
          {animateRef && numOfTeammates > 2 ? (
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
          <button className="flex justify-center w-full max-w-4xl py-4 text-xl font-bold text-black transition-colors duration-300 ease-in-out bg-yellow-400 rounded-md shadow-2xl cursor-pointer md:py-4 md:text-3xl hover:bg-yellow-600 hover:text-zinc-800">
            지원하기
          </button>
        </form>
      </main>
    </>
  );
};

export default Apply;
