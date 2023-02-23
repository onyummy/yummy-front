import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/common/layout";
import utilStyles from "../../assets/utils.module.css";
import Head from "next/head";
import { Card, Col, Row } from "antd";
import { Image } from "antd";

export default function List() {
    const router = useRouter();
    const [thisWeekMealPlannerList, setThisWeekMealPlannerList] = useState([]);
    const [lastWeekMealPlannerList, setLastWeekMealPlannerList] = useState([]);
    const [beforeLastWeekMealPlannerList, setBeforeLastWeekMealPlannerList] =
        useState([]);

    useEffect(() => {
        const getThisWeekMealPlannerList = async () => {
            const res = await fetch(
                "/api/mealPlanner/mealPlannerList?day=0&pageIdx=1&limit=7"
            );
            const data = await res.json();

            setThisWeekMealPlannerList(data.result);
        };

        getThisWeekMealPlannerList();
    }, []);

    useEffect(() => {
        const getLastWeekMealPlannerList = async () => {
            const res = await fetch(
                "/api/mealPlanner/mealPlannerList?day=1&pageIdx=1&limit=7"
            );
            const data = await res.json();

            setLastWeekMealPlannerList(data.result);
        };

        getLastWeekMealPlannerList();
    }, []);

    useEffect(() => {
        const getBeforeLastWeekMealPlannerList = async () => {
            const res = await fetch(
                "/api/mealPlanner/mealPlannerList?day=2&pageIdx=1&limit=7"
            );
            const data = await res.json();

            setBeforeLastWeekMealPlannerList(data.result);
        };

        getBeforeLastWeekMealPlannerList();
    }, []);

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    function renderMealPlannerList(mealPlannerList) {
        return mealPlannerList.map((mealPlanner, index) => (
            <Col span={8} key={index}>
                <Image src={mealPlanner.image} alt={mealPlanner.description} />
                <Card title={mealPlanner.name} bordered={false}>
                    {mealPlanner.description}
                </Card>
            </Col>
        ));
    }

    const thisWeekMealPlannersComponent = renderMealPlannerList(
        thisWeekMealPlannerList
    );
    const lastWeekMealPlannersComponent = renderMealPlannerList(
        lastWeekMealPlannerList
    );
    const beforeLastWeekMealPlannersComponent = renderMealPlannerList(
        beforeLastWeekMealPlannerList
    );

    const thisWeekMealPlannersWrapper = (
        <>
            <h2 className={utilStyles.plannerWrapperTitle}>이번주 식단</h2>
            <Row gutter={16} className={utilStyles.mealRow} wrap={false}>
                {thisWeekMealPlannersComponent}
            </Row>
        </>
    );

    const lastWeekMealPlannersWrapper = (
        <>
            <h2 className={utilStyles.plannerWrapperTitle}>지난주 식단</h2>
            <Row gutter={16} className={utilStyles.mealRow} wrap={false}>
                {lastWeekMealPlannersComponent}
            </Row>
        </>
    );

    const beforeLastWeekMealPlannersWrapper = (
        <>
            <h2 className={utilStyles.plannerWrapperTitle}>지지난주 식단</h2>
            <Row gutter={16} className={utilStyles.mealRow} wrap={false}>
                {beforeLastWeekMealPlannersComponent}
            </Row>
        </>
    );

    return (
        <Layout>
            <Head>
                <title>식단표 목록</title>
            </Head>
            <div>{thisWeekMealPlannersWrapper}</div>
            <div>{lastWeekMealPlannersWrapper}</div>
            <div>{beforeLastWeekMealPlannersWrapper}</div>
        </Layout>
    );
}
