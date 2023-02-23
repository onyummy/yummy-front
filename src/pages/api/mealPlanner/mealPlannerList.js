export default function handler(req, res) {
    let allResultJson = [
        {
            mpCd: 1,
            name: "불고기",
            description: "맛있음",
            image: "/images/among.png",
            day: 0,
        },
        {
            mpCd: 2,
            name: "LA갈비",
            description: "베리굿",
            image: "/images/among.png",
            day: 0,
        },
        {
            mpCd: 3,
            name: "콩나물김치국",
            description: "좋음",
            image: "/images/among.png",
            day: 0,
        },
        {
            mpCd: 4,
            name: "토마호크 스테이크",
            description: "좋음",
            image: "/images/among.png",
            day: 1,
        },
        {
            mpCd: 5,
            name: "토마토 카프레제",
            description: "좋음",
            image: "/images/among.png",
            day: 2,
        },
        {
            mpCd: 6,
            name: "연어 스테이크",
            description: "좋음",
            image: "/images/among.png",
            day: 0,
        },
        {
            mpCd: 7,
            name: "햄버거",
            description: "좋음",
            image: "/images/among.png",
            day: 1,
        },
        {
            mpCd: 8,
            name: "순대국밥",
            description: "좋음",
            image: "/images/among.png",
            day: 1,
        },
        {
            mpCd: 9,
            name: "된장찌개",
            description: "구수하지",
            image: "/images/among.png",
            day: 1,
        },
        {
            mpCd: 10,
            name: "교촌 순살 치킨",
            description: "좋음",
            image: "/images/among.png",
            day: 2,
        },
        {
            mpCd: 11,
            name: "양배추 샐러드",
            description: "좋음",
            image: "/images/among.png",
            day: 0,
        },
        {
            mpCd: 12,
            name: "스팸 짜글이",
            description: "좋음",
            image: "/images/among.png",
            day: 1,
        },
        {
            mpCd: 13,
            name: "짜장면",
            description: "좋음",
            image: "/images/among.png",
            day: 2,
        },
        {
            mpCd: 14,
            name: "짬뽕",
            description: "좋음",
            image: "/images/among.png",
            day: 0,
        },
        {
            mpCd: 15,
            name: "원할머니 보쌈",
            description: "별로",
            image: "/images/among.png",
            day: 2,
        },
        {
            mpCd: 16,
            name: "김치찌개",
            description: "칼칼쓰",
            image: "/images/among.png",
            day: 2,
        },
        {
            mpCd: 17,
            name: "탕수육",
            description: "좋음",
            image: "/images/among.png",
            day: 1,
        },
        {
            mpCd: 18,
            name: "랍스터 찜",
            description: "좋음",
            image: "/images/among.png",
            day: 2,
        },
        {
            mpCd: 19,
            name: "소세지 야채볶음",
            description: "좋음",
            image: "/images/among.png",
            day: 0,
        },
        {
            mpCd: 20,
            name: "오뎅탕",
            description: "좋음",
            image: "/images/among.png",
            day: 1,
        },
        {
            mpCd: 21,
            name: "닭볶음탕",
            description: "좋음",
            image: "/images/among.png",
            day: 2,
        },
    ];

    const day = req.query.day;
    const name = req.query.name;
    const pageIdx = req.query.pageIdx;
    const limit = req.query.limit;

    let paramKey = {};
    if (day || day == 0) paramKey.day = day;
    if (name) paramKey.name = name;
    if (pageIdx) paramKey.pageIdx = pageIdx;
    if (limit) paramKey.limit = limit;

    let conditionsKey = {
        day: 0,
        name: "",
        pageIdx: 1,
        limit: 10,
    };

    Object.assign(conditionsKey, paramKey);
    console.log(conditionsKey);
    const conditions = (mealPlanner) => {
        let result = true;
        // console.log(mealPlanner.day, conditionsKey.day);
        // console.log(
        //     typeof Number(conditionsKey.day) === "number" &&
        //         mealPlanner.day != conditionsKey.day
        // );
        // console.log(mealPlanner.day);
        // console.log(
        //     typeof conditionsKey.name === "string" &&
        //         conditionsKey.name != "" &&
        //         mealPlanner.name != conditionsKey.name
        // );
        //console.log(mealPlanner.name, conditionsKey.name);
        if (
            typeof Number(conditionsKey.day) === "number" &&
            mealPlanner.day != conditionsKey.day
        )
            return false;
        if (
            typeof conditionsKey.name === "string" &&
            conditionsKey.name != "" &&
            mealPlanner.name != conditionsKey.name
        )
            return false;

        return result;
    };

    let resultJson = allResultJson.filter((mp) => conditions(mp));

    //페이징처리
    const pageIdxNum = Number(conditionsKey.pageIdx) - 1;
    const limitNum = Number(conditionsKey.limit);
    resultJson = resultJson.slice(
        pageIdxNum * limitNum,
        pageIdxNum * limitNum + limitNum
    );

    //조회결과갯수
    const totalCnt = resultJson.length;

    //페이징처리전 마지막 식단의 mpCd 구하기
    const lastMpCd = allResultJson.findLast((mp) => conditions(mp))?.mpCd;

    console.log(conditionsKey, paramKey);
    console.log(resultJson);
    res.status(200).json({
        result: resultJson,
        totalCnt: totalCnt,
        lastMpCd: lastMpCd,
    });
}
