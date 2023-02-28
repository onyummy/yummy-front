import {Button, message, Upload, Form, Select} from 'antd';
import React, { useState } from 'react';
import Contents from "./Contents";
import CustomLayout from "../../components/common/layout";
import { Input } from 'antd';
import Head from "next/head";


export default function App () {
    const [countList, setCountList] = useState([0]);

    const makeContents = () => {
        let countArr = [...countList]
        let counter = countArr.slice(-1)[0]
        counter += 1
        countArr.push(counter)	// index 사용 X
        // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용
        setCountList(countArr)
    }

    return (
        <CustomLayout>
            <Head>
                <title>타이틀</title>
            </Head>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                style={{
                    maxWidth: 1000,
                }}
            >
                <Form.Item label="레시피명">
                    <Input />
                </Form.Item>
                <Form.Item label="종류">
                    <Select
                        showSearch
                        style={{
                            width: 200,
                        }}
                        placeholder=""
                        optionFilterProp="children"
                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={[
                            {
                                value: '1',
                                label: '중식',
                            },
                            {
                                value: '2',
                                label: '양식',
                            },
                            {
                                value: '3',
                                label: '한식',
                            }
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label="재료"
                    style={{
                        marginBottom: 0,
                    }}
                >
                    <Form.Item
                        name="year"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        style={{
                            display: 'inline-block',
                            width: 'calc(50% - 8px)',
                        }}
                    >
                        <Input placeholder="재료명" />
                    </Form.Item>
                    <Form.Item
                        name="month"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        style={{
                            display: 'inline-block',
                            width: 'calc(50% - 8px)',
                            margin: '0 8px',
                        }}
                    >
                        <Input placeholder="수량" />
                    </Form.Item>
                </Form.Item>
                <Form.Item label="레시피">
                    <Button onClick={makeContents} type="primary" style={{width: '100%'}} ghost>
                        +
                    </Button>
                </Form.Item>
                <Contents countList={countList} setCountList={setCountList}>
                </Contents>
            </Form>
        </CustomLayout>
    );
};


