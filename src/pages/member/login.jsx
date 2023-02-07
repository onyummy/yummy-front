import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/common/layout";
import utilStyles from "../../assets/utils.module.css";
import Head from "next/head";
import MemberInput from "../../components/member/MemberInput";
import MemberBtn from "../../components/member/MemberBtn";
import MemberLine from "../../components/member/MemberLine";
import KakaoBtn from "../../components/member/KakaoBtn";
import NaverBtn from "../../components/member/NaverBtn";

export default function login() {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <Layout>
            <KakaoBtn text='카카오 로그인'/>
            <NaverBtn text='네이버 로그인'/>
            <MemberLine text='또는'/>
            <form>
                <MemberInput placeholder='이메일' name='eMail' /><br />
                <MemberInput placeholder='비밀번호' name='passWord' /><br />
                <MemberBtn name='로그인' /><br />
            </form>
        </Layout>
    );
}
