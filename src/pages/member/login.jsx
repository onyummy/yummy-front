import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/common/layout";
import utilStyles from "../../assets/utils.module.css";
import Head from "next/head";

export default function login() {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <Layout>
        </Layout>
    );
}
