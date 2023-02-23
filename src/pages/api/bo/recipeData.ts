export default function handler(req: any, res: any) {

        res.status(200).json({
            data : [
                {
                    _id: "1",
                    name: "보쌈",
                    trips: "맛있음",
                },
                {
                    _id: "2",
                    name: "순대국밥",
                    trips: "좋음",
                }
            ],
            totalPages : 2
        });

}
