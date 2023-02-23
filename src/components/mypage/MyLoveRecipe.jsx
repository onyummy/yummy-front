import { Card, Col } from 'antd';
import Image from 'next/image';
const { Meta } = Card;

export default function MyLoveRecipe() {

    return (
        <>
            <Col span={8} style={{width: '100%', padding: '5px'}}>
                <Card
                    hoverable
                    style={{
                    width: '100%',
                    }}
                    cover={
                    <img
                        alt="찜한 레시피 이미지"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                    }
                >
                    <Meta title="돼지고기고괴로 만든 구내식당 제육볶음만 나오는 신기한 레시피"/>
                    <Image
                        style={{
                            width: '8%',
                        }}
                        alt='별점'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDl8d9OEA-kKEwWVx-tVPROFry3I3tBddUg&usqp=CAU"
                    />
                </Card>
            </Col>
        </>
    );

    

}