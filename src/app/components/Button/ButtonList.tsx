import Link from 'next/link';

interface ButtonListProps {
    entity : string;
    items: string[];
}

export default function ButtonList({ entity,items }: ButtonListProps) {
    if (items.length == 0) {
        return (
            <div>
                <p>該当するものは存在しません</p>
            </div>
        )
    }
    return (
        <div className="flex flex-wrap gap-2.5">
            {items.map((item, index) => (
                <div key={index}>
                    <Link href={`/${entity}/${item}`}>
                        <button className="text-base p-2.5 border border-black rounded">
                            {item}
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    );
};