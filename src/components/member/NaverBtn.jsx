import Image from "next/image";
import { Button } from "antd";
import styles from "./member.module.css";
import naverImg from "./img/btn_naver.png";
export default function NaverBtn(props) {
    // 아이콘 텍스트 분리 후 커스텀 필요
    return (
        <Button type="primary" className={styles.btn_naver}>
            <Image src={naverImg} className={styles.img_naver}/>
            {props.text}
        </Button>
    )
}