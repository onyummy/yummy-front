import { Card, Col } from 'antd';
import styles from "./mypage.module.css";

const { Meta } = Card;
export default function MyIngredient(props) {
    // 아이콘 텍스트 분리 후 커스텀 필요
    return (
        <>
            <Col span={8} style={{width: '100%', padding: '5px'}}>
                <Card hoverable style={{width: '100%'}} cover={<img alt={props.name} src={props.imgUrl}/>} bodyStyle={{padding:'10px'}}>
                    <Meta style={{'text-align': 'center'}} description={props.name}/>
                </Card>
            </Col>
        </>
    )
}