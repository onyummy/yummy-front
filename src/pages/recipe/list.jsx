import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/common/layout";
import utilStyles from "../../assets/utils.module.css";
import Head from "next/head";

export async function getServerSideProps() {
    let recipeData = {};

    const getText = async () => {
        const res = await fetch("/api/recipe/recipeList");
        const data = await res.json();

        recipeData = data;
    };
    getText();
    return {
        props: {
            recipeData,
        },
    };
}

export default function List({ recipeData: {} }) {
    const router = useRouter();
    const [recipeList, setRecipeList] = useState([]);
    useEffect(() => {
        const getText = async () => {
            const res = await fetch("/api/recipe/recipeList");
            const data = await res.json();

            setRecipeList(data);
        };

        getText();
    }, []);

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    const Recipe = (props) => {
        return (
            <div className={utilStyles.recipeItem}>
                <h1 className={utilStyles.headingXl}>{props.name}</h1>
                <div className={utilStyles.lightText}>{props.description}</div>
            </div>
        );
    };

    const recipes = recipeList.map((recipe, index) => (
        <Recipe key={recipe.name} {...recipe} />
    ));

    return (
        <Layout>
            <Head>
                <title>{recipes.name}</title>
            </Head>
            <article>{recipes}</article>
        </Layout>
    );
}
