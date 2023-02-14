import { Card, Col } from 'antd';
import styles from "./mypage.module.css";

const { Meta } = Card;
export default function MyIngredient(props) {
    // 아이콘 텍스트 분리 후 커스텀 필요
    return (
        <>
            <Col span={8}>
                <Card hoverable
                        style={{
                        width: '70px',
                        height: '70px',
                        fontSize: '14px',
                        padding: 0
                        }}
                    cover={<img alt={props.name} src={props.imgUrl}/>}
                >
                    <Meta description={props.name}
                            style={{
                            fontSize: '14px',
                            width: '70px',
                            }}/>
                </Card>
            </Col>
        </>
    )
}