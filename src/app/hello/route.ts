import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch('https://worldtimeapi.org/api/timezone/Asia/Tokyo', { cache: "no-store" })
    const data = (await res.json()) as { datetime: string };

    return NextResponse.json({
        messages: [
            'test',
            'これはダミーデータです',
            '/helloというエンドポイントをサンプルとして作成',
            `現在時刻: ${data.datetime}`,
        ]
    })
}