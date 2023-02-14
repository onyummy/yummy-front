export default function handler(req: any, res: any) {
    res.status(200).json([
        {
            name: "계란",
            imgUrl: "",
        },
        {
            name: "오이",
            imgUrl: "",
        },
        {
            name: "당근",
            imgUrl: "",
        },
        {
            name: "양파",
            imgUrl: "",
        },
        {
            name: "마늘",
            imgUrl: "",
        },
    ]);
}
