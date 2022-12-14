import Head from "next/head";
import Header from "../components/header";
import {
  DeepRequired,
  FieldErrorsImpl,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { phone_numberReg, student_numberReg } from "../utils/utils";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const leaderSchema = z.object({
  name: z.string().min(1, { message: "이름을 입력해주세요" }),
  student_number: z.string().regex(student_numberReg, {
    message: "학번 10자리를 정확하게 입력해주세요",
  }),
  phone_number: z.string().regex(phone_numberReg, {
    message: "전화번호 11자리를 정확하게 입력해주세요",
  }),
  github: z.string().min(1, { message: "github 아이디를 입력해주세요" }),
});

const memberSchema = z.object({
  name: z.string().min(1, { message: "이름을 입력해주세요" }),
  student_number: z.string().regex(student_numberReg, {
    message: "학번 10자리를 정확하게 입력해주세요",
  }),
  department: z.string().min(1, { message: "학과를 입력해주세요" }),
});

const schema = z.object({
  teamName: z.string().min(1, { message: "팀명을 입력해주세요" }),
  leader: leaderSchema,
  member1: memberSchema.optional(),
  member2: memberSchema.optional(),
  member3: memberSchema.optional(),
});

type formProps = z.infer<typeof schema>;

const TeammateForm = ({
  numOfTeammates,
  register,

  errors,
}: {
  numOfTeammates: number;
  register: UseFormRegister<formProps>;
  // * 'formProps' needs to be Required
  // * and the whole type should be "partail-ed"
  errors: Partial<FieldErrorsImpl<DeepRequired<formProps>>>;
}): JSX.Element => {
  // useEffect(() => {}, [numOfTeammates]);
  return (
    <>
      <div className="flex flex-col gap-4 px-3 py-3 rounded-md bg-white/70 backdrop-blur-sm">
        <div>
          <h3 className="flex items-center gap-1 text-xl font-semibold text-zinc-800">
            팀원 {numOfTeammates}
          </h3>
        </div>
        <div>
          <label htmlFor="teamName" className="font-semibold text-zinc-800">
            이름<span className="text-red-500">*</span>
          </label>
          {numOfTeammates === 1 && (
            <>
              <input
                placeholder="팀원의 이름을 입력하세요."
                className={
                  "block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm" +
                  (errors.member1?.name?.message
                    ? " focus:ring-red-600 focus:border-red-600 ring-red-600 ring-2"
                    : "")
                }
                {...register("member1.name", { required: true })}
              />
              {errors.member1?.name?.message && (
                <p className="pt-1 text-red-600">
                  {errors.member1?.name?.message}
                </p>
              )}
            </>
          )}
          {numOfTeammates === 2 && (
            <>
              <input
                placeholder="팀원의 이름을 입력하세요."
                className={
                  "block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm" +
                  (errors.member2?.name?.message
                    ? " focus:ring-red-600 focus:border-red-600 ring-red-600 ring-2"
                    : "")
                }
                {...register("member2.name", { required: true })}
              />
              {errors.member2?.name?.message && (
                <p className="pt-1 text-red-600">
                  {errors.member2?.name?.message}
                </p>
              )}
            </>
          )}
          {numOfTeammates === 3 && (
            <>
              <input
                placeholder="팀원의 이름을 입력하세요."
                className={
                  "block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm" +
                  (errors.member3?.name?.message
                    ? " focus:ring-red-600 focus:border-red-600 ring-red-600 ring-2"
                    : "")
                }
                {...register("member3.name", { required: true })}
              />
              {errors.member3?.name?.message && (
                <p className="pt-1 text-red-600">
                  {errors.member3?.name?.message}
                </p>
              )}
            </>
          )}
        </div>
        <div>
          <label htmlFor="teamName" className="font-semibold text-zinc-800">
            학번<span className="text-red-500">*</span>
          </label>
          {numOfTeammates === 1 && (
            <>
              <input
                placeholder="팀원의 학번을 입력하세요."
                className={
                  "block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm" +
                  (errors.member1?.student_number?.message
                    ? " focus:ring-red-600 focus:border-red-600 ring-red-600 ring-2"
                    : "")
                }
                {...register("member1.student_number", {
                  required: true,
                  pattern: student_numberReg,
                })}
              />
              {errors.member1?.student_number?.message && (
                <p className="pt-1 text-red-600">
                  {errors.member1?.student_number?.message}
                </p>
              )}
            </>
          )}
          {numOfTeammates === 2 && (
            <>
              <input
                placeholder="팀원의 학번을 입력하세요."
                className={
                  "block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm" +
                  (errors.member2?.student_number?.message
                    ? " focus:ring-red-600 focus:border-red-600 ring-red-600 ring-2"
                    : "")
                }
                {...register("member2.student_number", {
                  required: true,
                  pattern: student_numberReg,
                })}
              />
              {errors.member2?.student_number?.message && (
                <p className="pt-1 text-red-600">
                  {errors.member2?.student_number?.message}
                </p>
              )}
            </>
          )}
          {numOfTeammates === 3 && (
            <>
              <input
                placeholder="팀원의 학번을 입력하세요."
                className={
                  "block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm" +
                  (errors.member3?.student_number?.message
                    ? " focus:ring-red-600 focus:border-red-600 ring-red-600 ring-2"
                    : "")
                }
                {...register("member3.student_number", {
                  required: true,
                  pattern: student_numberReg,
                })}
              />
              {errors.member3?.student_number?.message && (
                <p className="pt-1 text-red-600">
                  {errors.member3?.student_number?.message}
                </p>
              )}
            </>
          )}
        </div>
        <div>
          <label htmlFor="teamName" className="font-semibold text-zinc-800">
            학과/부<span className="text-red-500">*</span>
          </label>
          {numOfTeammates === 1 && (
            <>
              <input
                placeholder="팀원의 학과/부를 입력하세요."
                className={
                  "block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm" +
                  (errors.member1?.department?.message
                    ? " focus:ring-red-600 focus:border-red-600 ring-red-600 ring-2"
                    : "")
                }
                {...register("member1.department", {
                  required: true,
                })}
              />
              {errors.member1?.department?.message && (
                <p className="pt-1 text-red-600">
                  {errors.member1?.department?.message}
                </p>
              )}
            </>
          )}
          {numOfTeammates === 2 && (
            <>
              <input
                placeholder="팀원의 학과/부를 입력하세요."
                className={
                  "block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm" +
                  (errors.member2?.department?.message
                    ? " focus:ring-red-600 focus:border-red-600 ring-red-600 ring-2"
                    : "")
                }
                {...register("member2.department", {
                  required: true,
                })}
              />
              {errors.member2?.department?.message && (
                <p className="pt-1 text-red-600">
                  {errors.member2?.department?.message}
                </p>
              )}
            </>
          )}
          {numOfTeammates === 3 && (
            <>
              <input
                placeholder="팀원의 학과/부를 입력하세요."
                className={
                  "block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm" +
                  (errors.member3?.department?.message
                    ? " focus:ring-red-600 focus:border-red-600 ring-red-600 ring-2"
                    : "")
                }
                {...register("member3.department", {
                  required: true,
                })}
              />
              {errors.member3?.department?.message && (
                <p className="pt-1 text-red-600">
                  {errors.member3?.department?.message}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

const Apply = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    resetField,
  } = useForm<formProps>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
  });
  const [numOfTeammates, setNumOfTeammates] = useState<number>(1);
  // console.log("numOfTeammates >> ", numOfTeammates);
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
      ].filter((_, index) => index <= numOfTeammates - 1),
    };
    // console.log("formattedData >> ", formattedData);

    /*
    axios
      .post("/api/apply", formattedData)
      .then(() => router.push("/success"))
      .catch(() => router.push("/error"));
      */
    router.push("/success");
  };

  const onSubmitInvalid: SubmitErrorHandler<formProps> = (errors) => {
    // console.error("errors >> ", errors);
  };

  useEffect(() => {
    // console.log("cleared");
    clearErrors();
    for (let i = 0; i < 3 - (numOfTeammates - 1); i++) {
      resetField(`member${3 - i}` as any);
    }
  }, [numOfTeammates, resetField, clearErrors]);

  return (
    <>
      <Head>
        <title>2022 대구를 빛내는 SW 해커톤</title>
        <meta name="description" content="2022 대구를 빛내는 SW 해커톤" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container flex flex-col items-center justify-center max-w-2xl gap-4 px-2 pt-8 pb-8 mx-auto">
        <form
          className="flex flex-col w-full max-w-lg gap-4"
          onSubmit={handleSubmit(onSubmit, onSubmitInvalid)}
        >
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
          </div>
          <div className="flex flex-col gap-2 px-3 py-3 rounded-md bg-white/70 backdrop-blur-sm">
            <label htmlFor="teamName">
              <h3 className="flex items-center gap-1 text-xl font-semibold text-zinc-800">
                팀명
                <span className="text-sm text-red-500">*</span>
              </h3>
            </label>
            <div>
              <input
                placeholder="팀의 이름을 입력하세요."
                className={
                  "block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm" +
                  (errors.teamName?.message
                    ? " focus:ring-red-600 focus:border-red-600 ring-red-600 ring-2"
                    : "")
                }
                {...register("teamName", { required: true })}
              />
              {errors.teamName?.message && (
                <p className="pt-1 text-red-600">{errors.teamName?.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4 px-3 py-3 rounded-md bg-white/70 backdrop-blur-sm">
            <div>
              <h3 className="flex items-center gap-1 text-xl font-semibold text-zinc-800">
                팀장
                <span className="text-sm text-red-500">*</span>
              </h3>
              <p className="text-sm text-zinc-600">
                팀원 중 한 명 이상은 반드시 컴퓨터학부 또는 연계/융합 전공
                재학생이어야 합니다.
              </p>
            </div>
            <div>
              <label htmlFor="teamName" className="font-semibold text-zinc-800">
                이름<span className="text-red-500">*</span>
              </label>
              <input
                placeholder="팀장의 이름을 입력하세요."
                className={
                  "block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm" +
                  (errors.leader?.name?.message
                    ? " focus:ring-red-600 focus:border-red-600 ring-red-600 ring-2"
                    : "")
                }
                {...register("leader.name", { required: true })}
              />
              {errors.leader?.name?.message && (
                <p className="pt-1 text-red-600">
                  {errors.leader?.name?.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="teamName" className="font-semibold text-zinc-800">
                학번<span className="text-red-500">*</span>
              </label>
              <input
                placeholder="학번 10자리를 입력하세요."
                className={
                  "block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm" +
                  (errors.leader?.student_number?.message
                    ? " focus:ring-red-600 focus:border-red-600 ring-red-600 ring-2"
                    : "")
                }
                {...register("leader.student_number", {
                  required: true,
                  pattern: student_numberReg,
                })}
              />
              {errors.leader?.student_number?.message && (
                <p className="pt-1 text-red-600">
                  {errors.leader?.student_number?.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="teamName" className="font-semibold text-zinc-800">
                전화번호<span className="text-red-500">*</span>{" "}
                <span className="text-sm italic text-zinc-600">
                  (&quot;-&quot; 를 포함해서 적어주세요.)
                </span>
              </label>
              <input
                placeholder="예시) 010-1234-5678"
                className={
                  "block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm" +
                  (errors.leader?.phone_number?.message
                    ? " focus:ring-red-600 focus:border-red-600 ring-red-600 ring-2"
                    : "")
                }
                {...register("leader.phone_number", {
                  required: true,
                  pattern: phone_numberReg,
                })}
              />
              {errors.leader?.phone_number?.message && (
                <p className="pt-1 text-red-600">
                  {errors.leader?.phone_number?.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="teamName" className="font-semibold text-zinc-800">
                결과물 제출용 깃헙 링크<span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-zinc-700">
                아래로 제출된 링크를 통해 결과물을 심사할 예정입니다.
              </p>
              <ol className="px-5 text-sm list-decimal text-zinc-700">
                <li>
                  팀장 계정으로 Github Repository를 public으로 생성하세요. (이름
                  상관 없음)
                </li>
                <li>해당 repository의 URL을 아래 입력창으로 제출하세요.</li>
                <li>
                  리포에 첨부해야 할 요소들은 주제 공개와 동시에 공지할
                  예정입니다.
                </li>
              </ol>
              <input
                placeholder="예시) https://github.com/knu_cse/2022-hackathon"
                className={
                  "block w-full p-2 mt-1 border rounded-md shadow-md placeholder:text-zinc-500 outline-0 border-zinc-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 sm:text-sm" +
                  (errors.leader?.github?.message
                    ? " focus:ring-red-600 focus:border-red-600 ring-red-600 ring-2"
                    : "")
                }
                {...register("leader.github", {
                  required: true,
                })}
              />
              {errors.leader?.github?.message && (
                <p className="pt-1 text-red-600">
                  {errors.leader?.github?.message}
                </p>
              )}
            </div>
          </div>
          {Array.from(Array(numOfTeammates)).map((_, index) => {
            return (
              index > 0 && (
                <TeammateForm
                  key={"teammate_" + index}
                  numOfTeammates={index}
                  register={register}
                  errors={errors}
                />
              )
            );
          })}
          <button className="flex justify-center w-full max-w-4xl py-4 text-xl font-bold text-black transition-colors duration-300 ease-in-out bg-yellow-400 rounded-md shadow-2xl cursor-pointer md:py-4 md:text-3xl hover:bg-yellow-600 hover:text-zinc-800">
            유효성 검사하기
          </button>
        </form>
      </main>
    </>
  );
};

export default Apply;
