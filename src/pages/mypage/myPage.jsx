import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/common/layout";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space, Card } from 'antd';
import MyIngredient from "../../components/mypage/MyIngredient";
import { Row } from "antd";
import MyLoveRecipe from "../../components/mypage/MyLoveRecipe";

export default function MyPage() {
    const [ingredienrList, setIngredienrList] = useState([]);
    
    useEffect(() => {
        const getIngredienrList = async () => {
            const res = await fetch("/api/mypage/ingredient");
            const data = await res.json();

            setIngredienrList(data);
        };

        getIngredienrList();
       
    },[])
    const ingredienr = ingredienrList.map((ingredienr, index) => (
        <MyIngredient key={ingredienr.name} {...ingredienr} />
    ));
    
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    
    return (
        <Layout>
            <div>
                <h3>내정보</h3>
                <Avatar size={64} icon={<UserOutlined />} />
            </div>
            <div style={{margin: '20px 0'}}>
                <h3 style={{margin: '15px 0px 5px 0px'}}>최근 본 레시피</h3>
                <Card
                    bordered={true}
                    style={{width: '100%'}}
                >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
            <div style={{margin: '20px 0'}}>
                <h3 style={{margin: '15px 0px 5px 0px'}}>찜한 레시피</h3>
                <Card
                    bordered={true}
                    style={{width: '100%'}}
                    bodyStyle={{padding: '10px'}}
                >
                      <Row wrap="ture">
                        {/* <MyLoveRecipe/> */}
                    </Row>
                </Card>
            </div>
            <div style={{margin: '20px 0'}}>
                <h3 style={{margin: '15px 0px 5px 0px'}}>내 재료</h3>
                <Card
                    bordered={true}
                    style={{width: '100%'}}
                    bodyStyle={{padding: '10px'}}
                >
                    <Row wrap="ture">
                        {ingredienr}
                    </Row>
                </Card>
            </div>
        </Layout>
    );
}
