import {Layout, Table} from 'antd';
import { useEffect, useState } from 'react';
import CustomLayout from "../../components/common/layout";
import Head from "next/head";
const columns = [
    {
        title: 'ID',
        dataIndex: '_id',
        //orter: true,
        // render: (name) => `${name.first} ${name.last}`,
        width: '20%',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        width: '20%',
    },
    {
        title: 'Trips',
        dataIndex: 'trips',
    },
];

export default function App() {
    const [data, setData] = useState();
    const [totalPages, setTotalPages] = useState();
    const [loading, setLoading] = useState(false);

    const fetchData = (page) => {
        setLoading(true);
        //fetch(`/api/bo/recipeData?page=${page}&size=10`)
        fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`)
            .then((res) => res.json())
            .then((results) => {
                setData(results.data)
                setTotalPages(results.totalPages)
                setLoading(false);
                console.log(results)
            })
    };

    useEffect(() => {
        fetchData(1);
    }, []);

    return (
        <CustomLayout>
            <Head>
                    <title>타이틀</title>
            </Head>
            <Table
                loading={loading}
                columns={columns}
                dataSource={data}
                pagination={
                    {
                        pageSize: 10,
                        total: totalPages,
                        onChange:(page)=>{
                            fetchData(page);
                        }
                    }
                }
            />
        </CustomLayout>
    );
};