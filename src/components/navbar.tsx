import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <nav>
      <ul className="py-2 flex flex-row w-full text-base font-semibold text-white md:text-lg">
        <li>
          <Link href="/apply">
            <a
              className={`transition-all duration-300 ease-out border-white  py-4 px-4 ${
                pathname === "/apply"
                  ? "font-bold border-b-4"
                  : "hover:border-b-4 border-gray-400 hover:text-gray-400"
              }`}
            >
              지원하기
            </a>
          </Link>
        </li>
        <li>
          <Link href="/team">
            <a
              className={`transition-all duration-300 ease-out border-white py-4 px-4 ${
                pathname === "/team"
                  ? "font-font-bold border-b-4"
                  : "hover:border-b-4 border-gray-400 hover:text-gray-400"
              }`}
            >
              지원 팀 명단
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
