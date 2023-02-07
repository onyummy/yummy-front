import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/common/layout";
import utilStyles from "../../assets/utils.module.css";
import Head from "next/head";
import MemberInput from "../../components/member/MemberInput";
import MemberBtn from "../../components/member/MemberBtn";
import MemberLine from "../../components/member/MemberLine";
import NaverBtn from "../../components/member/NaverBtn";
import KakaoBtn from "../../components/member/KakaoBtn";

export default function join() {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <Layout>
            <KakaoBtn text='카카오 로그인'/>
            <NaverBtn text='네이버로 시작하기'/>
            <MemberLine text='또는'/>
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
