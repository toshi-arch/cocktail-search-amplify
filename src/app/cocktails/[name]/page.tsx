import { HomeButton } from '../../components/Button/HomeButton';
import { SearchButton } from '../../components/Button/SearchButton';
import ButtonList from '../../components/Button/ButtonList';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { CocktailByIngredient, fetchCocktailByIngredient } from '../../api/fetchCocktailByIngredient'

const inter = Inter({ subsets: ["latin"] });

export default async function getCocktailByIngredient({ params }: { params: { name: string } }) {
    const ingredientName: string = decodeURIComponent(params.name)

    let cocktailByIngredient: CocktailByIngredient | null = null;
    let errorMessage: string | null = null;
    try {
        cocktailByIngredient = await fetchCocktailByIngredient(ingredientName);
    } catch (error: any) {
        errorMessage = error.message
    }
    return (
        <main className={`bg-white min-h-screen ${inter.className}`}>
            <div className="grid grid-cols-12 p-6">
                <div className="grid-item col-span-3" />
                <div className="grid-item text-center col-span-6">
                    <div className="text-6xl text-black p-12">
                        <h1>カクテル一覧</h1>
                    </div>
                </div>
                <div className="grid-item col-span-3">
                    <div className="flex flex-col p-24">
                        <HomeButton />
                        <div className="p-0.5" />
                        <Link href="/ingredients">
                            <SearchButton content="材料から探す" />
                        </Link>
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
                    <div className='p-5'>
                        <h2 className='text-xl underline'>&quot;{ingredientName}&quot;を使用したカクテル一覧</h2>
                        {cocktailByIngredient ?
                            (<ButtonList entity='cocktail' items={cocktailByIngredient.CocktailName.map(function (item) { return item.Name; })} />) :
                            (<p>{errorMessage}</p>)
                        }
                    </div>
                </div>
                <div className="grid-item col-span-3"></div>
            </div>
        </main >
    );
};
