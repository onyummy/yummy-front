export default function handler(req: any, res: any) {
    res.status(200).json([
        {
            emain: "test",
            password: "test",
        },
        {
            emain: "test2",
            password: "test2",
        },
    ]);
}
