import ButtonList from '../components/Button/ButtonList';
import { HomeButton } from "../components/Button/HomeButton";
import { SearchButton } from "../components/Button/SearchButton";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Ingredient, fetchIngredients } from '../api/fetchIngredients';

const inter = Inter({ subsets: ["latin"] });

export default async function Ingredients() {
  const ingredients: Ingredient[] = await fetchIngredients();

  const filteredLiquor = ingredients.filter(function (item) {
    return item.ingredient_alcohol !== 0
  });

  const filteredNonAlcohol = ingredients.filter(function (item) {
    return item.ingredient_alcohol === 0;
  });

  return (
    <main className={`bg-white min-h-screen ${inter.className}`}>
      <div className="grid grid-cols-12 p-6">
        <div className="grid-item col-span-3" />
        <div className="grid-item text-center col-span-6">
          <div className="text-6xl text-black p-12">
            <h1>材料から探す</h1>
          </div>
        </div>
        <div className="grid-item col-span-3">
          <div className="flex flex-col p-24">
            <HomeButton />
            <div className="p-0.5" />
            <Link href="/cocktails">
              <SearchButton content="カクテルを探す" />
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 p-1">
        <div className="grid-item col-span-3"></div>
        <div className="grid-item col-span-6">
          <div className="p-5">
            <h2 className="text-2xl underline">リキュール</h2>
            <ButtonList entity='cocktails' items={filteredLiquor.map(function (item) { return item.ingredient_name; })} />
          </div>
          <div className="p-5">
            <h2 className="text-2xl underline">ノンアルコール</h2>
            <ButtonList entity='cocktails' items={filteredNonAlcohol.map(function (item) { return item.ingredient_name; })} />
          </div>
        </div>
        <div className="grid-item col-span-3"></div>
      </div>
    </main>
  );
}
