import ButtonList from '../components/Button/ButtonList';
import { HomeButton } from "../components/Button/HomeButton";
import { SearchButton } from "../components/Button/SearchButton";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Cocktail, fetchCocktails } from '../api/fetchCocktails';

const inter = Inter({ subsets: ["latin"] });

export default async function Cocktails() {
    const cocktails: Cocktail[] = await fetchCocktails();

    const filteredAlcohol = cocktails.filter(function (item) {
        return item.cocktail_alcohol !== 0
    });

    const filteredNonAlcohol = cocktails.filter(function (item) {
        return item.cocktail_alcohol === 0;
    });

    return (
        <main className={`bg-white min-h-screen ${inter.className}`}>
            <div className="grid grid-cols-12 p-6">
                <div className="grid-item col-span-3" />
                <div className="grid-item text-center col-span-6">
                    <div className="text-6xl text-black p-12">
                        <h1>カクテルを探す</h1>
                    </div>
                </div>
                <div className="grid-item col-span-3">
                    <div className="flex flex-col p-24">
                        <HomeButton />
                        <div className="p-0.5" />
                        <Link href={"/ingredients"}>
                            <SearchButton content="材料から探す" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 p-1">
                <div className="grid-item col-span-3"></div>
                <div className="grid-item col-span-6">
                    <div className="p-5">
                        <h2 className="text-2xl underline">カクテル</h2>
                        <ButtonList entity='cocktail' items={filteredAlcohol.map(function (item) { return item.cocktail_name; })} />
                    </div>
                    <div className="p-5">
                        <h2 className="text-2xl underline">ノンアルコール</h2>
                        <ButtonList entity='cocktail' items={filteredNonAlcohol.map(function (item) { return item.cocktail_name; })} />
                    </div>
                </div>
                <div className="grid-item col-span-3"></div>
            </div>
        </main>
    );
}