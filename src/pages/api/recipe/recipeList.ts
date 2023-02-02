export default function handler(req: any, res: any) {
    res.status(200).json([
        {
            name: "불고기",
            description: "맛있음",
        },
        {
            name: "순대국밥",
            description: "좋음",
        },
    ]);
}
