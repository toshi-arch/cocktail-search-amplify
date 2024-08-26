export default async function Page() {
    /*
        no-store(SSR)で現在時刻などのdata取得
    */
    const res = await fetch('https://worldtimeapi.org/api/timezone/Asia/Tokyo', { cache: "no-store" })
    const {datetime} = (await res.json()) as { datetime: string };

    return (
        <>
            <h1>現在時刻: {datetime}</h1>
        </>
    )
}
