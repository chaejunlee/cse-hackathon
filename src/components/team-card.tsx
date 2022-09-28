import Image from "next/image";
import Link from "next/link";
import { TeamCardType } from "../pages/team";

const TeamCard = ({ props }: { props: TeamCardType[] }) => {
  return (
    <ol className="grid w-full gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-1">
      {props.map((item) => {
        const profile_pic = item.github.split("/")[3];
        return (
          <li
            key={item.id}
            className="w-full overflow-hidden transition-transform ease-out border-4 border-zinc-800 md:hover:scale-105 rounded-xl"
          >
            <div className="relative flex flex-col h-full bg-white/70 backdrop-blur-sm lg:flex-row">
              <div className="absolute z-20 px-2 py-3 font-bold bg-yellow-400 left-4 rounded-b-md">
                {item.id}
              </div>
              <div className="relative object-cover w-full border-b-4 bg-zinc-300 border-zinc-800 md:aspect-square lg:border-r-4 lg:border-b-0 aspect-video lg:w-64 shrink-0">
                <Image
                  src={`https://github.com/${profile_pic}.png`}
                  alt={`${item.github.split("/")[3]}_profile`}
                  layout="fill"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col w-full gap-4 p-6 grow lg:w-fit">
                <h2 className="text-2xl font-bold">{item.team}</h2>
                <span className="flex gap-2 text-base grow">{item.title}</span>
                <Link href={item.github}>
                  <a target="_blank" className="w-fit">
                    <div className="px-4 py-2 font-bold text-black transition-colors duration-300 ease-out bg-yellow-400 rounded shadow-2xl cursor-pointer w-fit hover:bg-yellow-600 hover:text-zinc-800">
                      리포 방문하기
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default TeamCard;
