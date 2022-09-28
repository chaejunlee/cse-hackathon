import Image from "next/image";
import Link from "next/link";
import { TeamCardType } from "../pages/team";

const TeamCard = ({ props }: { props: TeamCardType[] }) => {
  return (
    <ol className="mx-auto gap-4 w-full grid sm:grid-cols-2 lg:grid-cols-1">
      {props.map((item) => {
        const profile_pic = item.github.split("/")[3];
        return (
          <li key={item.id} className="w-full">
            <div className="relative bg-white rounded-xl overflow-hidden flex lg:flex-row h-full md:hover:scale-105 transition-transform ease-out flex-col">
              <div className="absolute px-2 py-3 font-bold bg-yellow-400 left-4 rounded-b-md">
                {item.id}
              </div>
              <div className="w-full md:aspect-square lg:border-r-4 lg:border-b-0 border-b-4 border-gray-200 aspect-video object-cover lg:w-64 shrink-0">
                <Image
                  src={`https://github.com/${profile_pic}.png`}
                  alt={`${item.github.split("/")[3]}_profile`}
                  width="600px"
                  height="600px"
                  layout="responsive"
                />
              </div>
              <div className="flex flex-col p-6 grow gap-4 w-full lg:w-fit">
                <h2 className="text-2xl font-bold">{item.team}</h2>
                <span className="flex gap-2 grow text-base">{item.title}</span>
                <Link href={item.github}>
                  <a target="_blank" className="w-fit">
                    <div className="py-2 w-fit px-4 font-bold text-black transition-colors duration-300 ease-out bg-yellow-400 rounded shadow-2xl cursor-pointer hover:bg-yellow-600 hover:text-zinc-800">
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
