export default function handler(req: any, res: any) {

        res.status(200).json({
            data : [
                {
                    _id: "1",
                    name: "보쌈",
                    trips: "한식",
                },
                {
                    _id: "2",
                    name: "순대국밥",
                    trips: "한식",
                },
                {
                    _id: "3",
                    name: "파스타",
                    trips: "양식",
                }
            ],
            totalPages : 2
        });

}
