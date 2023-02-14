import { Button } from "antd";
import styles from "./member.module.css";
import Image from "next/image";
import kakaoImg from "./img/btn_kakao.png"
export default function KakaoBtn(props) {
    // 아이콘 텍스트 분리 후 커스텀 필요
    return (
        <Button type="text" className={styles.btn_kakao}>
            <Image src={kakaoImg} alt={props.text} className={styles.img_member_btn}/>
            {props.text}
        </Button>
    )
}