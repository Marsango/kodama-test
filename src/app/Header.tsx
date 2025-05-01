import Link from "next/link";
import SearchBar from "./SearchBar";

type HeaderProps = {
  setSearchText: React.Dispatch<React.SetStateAction<string>> | null;
  isAnimePage: boolean;
};

export default function Header({ setSearchText, isAnimePage }: HeaderProps) {
  return (
    <div className="w-full max-h-[60px] min-h-[60px] flex flex-row items-center justify-between px-5 border-b-1 border-white overflow-hidden">
      <div className="text-purple-50 text-xl font-semibold tracking-wide">
        Animes Kodama
      </div>
      {isAnimePage ? (
        <></>
      ) : (
        <SearchBar setSearchText={setSearchText}></SearchBar>
      )}
      <div>
        {isAnimePage ? (
          <Link href={"/"}>
            <button className="ml-4 px-4 py-2 rounded-lg bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition cursor-pointer">
              Home
            </button>
          </Link>
        ) : (
          <></>
        )}
        <Link href={"/login"}>
        <button className="ml-4 px-4 py-2 rounded-lg bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition cursor-pointer">
          Login
        </button>
        </Link>
      </div>
    </div>
  );
}
