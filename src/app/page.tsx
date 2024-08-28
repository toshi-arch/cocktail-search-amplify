import { SearchButton } from "./components/Button/SearchButton";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-white min-h-screen ${inter.className}">
      <div className="text-6xl text-black text-center p-24 ">
        <h1>カクテルレシピ検索サイト</h1>
      </div>
      <div className="flex flex-row text-2xl justify-evenly px-44">
        <Link href={"/ingredients"}>
          <SearchButton content="材料から探す" />
        </Link>
        <Link href={"/cocktails"}>
          <SearchButton content="カクテルを探す" />
        </Link>
      </div>
    </main>
  );
}