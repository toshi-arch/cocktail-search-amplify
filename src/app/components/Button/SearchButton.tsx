export function SearchButton(props: {content: string}) {
  return (
        <button className="bg-teal-200 rounded p-2 border border-black w-full">{props.content}</button>
  );
}