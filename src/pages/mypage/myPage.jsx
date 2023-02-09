import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/common/layout";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

export default function join() {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <Layout>
           <Avatar size={64} icon={<UserOutlined />} />
        </Layout>
    );
}
