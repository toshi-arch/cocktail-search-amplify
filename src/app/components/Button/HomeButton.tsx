import Link from "next/link";

export function HomeButton() {
    return (
        <Link href={"/"}>
            <button className="bg-green-500 text-white rounded p-2 border border-black w-full">Home</button>
        </Link>
    );
}