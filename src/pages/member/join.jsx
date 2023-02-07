import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/common/layout";
import utilStyles from "../../assets/utils.module.css";
import Head from "next/head";
import MemberInput from "../../components/member/MemberInput";
import MemberBtn from "../../components/member/MemberBtn";
import MemberLine from "../../components/member/MemberLine";
import NaverBtn from "../../components/member/NaverBtn";

export default function join() {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <Layout>
            <MemberLine text='또는'/>
            <NaverBtn />
            <form>
                <MemberInput placeholder='이메일' name='eMail' /><br />
                <MemberInput placeholder='성명' name='name' /><br />
                <MemberInput placeholder='전화번호' name='phone' /><br />
                <MemberInput placeholder='비밀번호' name='passWord' /><br />
                <MemberBtn name='가입' />
            </form>
        </Layout>
    );
}
