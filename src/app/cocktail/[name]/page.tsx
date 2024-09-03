import { GetServerSideProps } from 'next';
import { Inter } from 'next/font/google';
import { HomeButton } from '../../components/Button/HomeButton';
import { SearchButton } from '../../components/Button/SearchButton';
import Link from 'next/link';
import { Cocktail, fetchCocktailByName } from '../../api/fetchCocktailByName'

const inter = Inter({ subsets: ["latin"] });

enum Unit {
    ml = 1,
    tsp,
    dash,
    sheet,
    piece,
    properQuontity,
    fullUp
}

const getUnitLabel = (unit: Unit) => {
    switch (unit) {
        case Unit.ml:
            return 'ml';
        case Unit.tsp:
            return 'tsp';
        case Unit.dash:
            return 'dash';
        case Unit.sheet:
            return '枚';
        case Unit.piece:
            return '個';
        case Unit.properQuontity:
            return '適量';
        case Unit.fullUp:
            return 'フルアップ';
        default:
            return '';
    }
};

export default async function getCocktailDetail({ params }: { params: { name: string } }) {
    const cocktailByName: Cocktail = await fetchCocktailByName(params.name);
    return (
        <main className={`bg-white min-h-screen ${inter.className}`}>
            <div className="grid grid-cols-12 p-6">
                <div className="grid-item col-span-9" />
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
            <div className='grid grid-cols-12'>
                <div className="grid-item col-span-3" />
                <div className='grid-item col-span-6'>
                    <h2 className='text-3xl border-b border-black mb-10'>{cocktailByName.Name}</h2>
                    <div className='flex flex-col gap-6'>
                        <table>
                            <thead>
                                <tr>
                                    <th className='border-b border-dotted px-2 py-0.5 align-top text-xl text-gray-400 text-left'>材料</th>
                                    <th className='border-b border-dotted px-2 py-0.5 align-top text-xl text-gray-400 text-right'>分量</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cocktailByName.Ingredients.map((ingredient, index) => (
                                    <tr key={index}>
                                        <td className='border-b border-dotted px-2 py-0.5 align-top text-xl text-left'>{ingredient.Name}</td>
                                        <td className='border-b border-dotted px-2 py-0.5 align-top text-xl text-right'>
                                            {ingredient.Unit === Unit.properQuontity || ingredient.Unit === Unit.fullUp ? '' : ingredient.Amount} {getUnitLabel(ingredient.Unit)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <table>
                            <thead>
                                <th className='border-b border-dotted px-2 py-0.5 align-top text-xl text-gray-400 text-left'>レシピ</th>
                                <tr>
                                    <td className='px-2 py-0.5 align-top text-xl text-left'>{cocktailByName.Recipe}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="grid-item col-span-3" />
            </div>
        </main>
    );
};
