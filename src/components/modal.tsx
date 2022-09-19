import Link from "next/link";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";

const XIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

interface ModalProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const Model: React.FC<ModalProps> = ({ setShowModal }) => {
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="relative flex flex-col items-center justify-center w-full max-w-2xl px-6 pt-12 pb-6 mx-4 overflow-hidden bg-white rounded-md shadow-2xl">
          <div
            className="absolute p-2 transition-colors duration-300 ease-out rounded-full cursor-pointer right-6 top-6 w-fit h-fit hover:bg-gray-300"
            onClick={() => {
              setShowModal(false);
              document.body.style.overflow = "unset";
            }}
          >
            <XIcon />
          </div>
          <div className="flex flex-col justify-center w-full h-full p-4 overflow-hidden">
            <h2 className="text-2xl font-bold">
              해커톤 지원이 마감되었습니다.
            </h2>
            <p className="mt-4">
              [2022 대구를 빛내는 SW 해커톤]에 대한 지원은 2022년 9월 19일
              18:00까지 입니다.
            </p>
            <Link href="/apply">
              <a
                className="p-4 mt-12 text-lg font-semibold text-center text-black transition-colors duration-300 ease-out bg-yellow-400 rounded-lg hover:bg-yellow-600"
                onClick={() => {
                  document.body.style.overflow = "unset";
                }}
              >
                그래도 지원 페이지 보러 가기
              </a>
            </Link>
            <div className="flex flex-row gap-2 mt-2">
              <Link
                href="/success"
                // onClick={() => console.error(errors)}
              >
                <a
                  className="flex justify-center w-full max-w-4xl py-4 text-lg font-bold text-black transition-colors duration-300 ease-in-out bg-yellow-400 rounded-md cursor-pointer md:py-4 hover:bg-yellow-600 hover:text-zinc-800"
                  onClick={() => {
                    document.body.style.overflow = "unset";
                  }}
                >
                  지원 성공 페이지 가기
                </a>
              </Link>
              <Link
                href="/error"
                // onClick={() => console.error(errors)}
              >
                <a
                  className="flex justify-center w-full max-w-4xl py-4 text-lg font-bold text-black transition-colors duration-300 ease-in-out bg-yellow-400 rounded-md cursor-pointer md:py-4 hover:bg-yellow-600 hover:text-zinc-800"
                  onClick={() => {
                    document.body.style.overflow = "unset";
                  }}
                >
                  지원 실패 페이지 가기
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Model;
