import { Button } from "antd";
import styles from "./member.module.css";
export default function KakaoBtn(props) {
    // 아이콘 텍스트 분리 후 커스텀 필요
    return (
        <Button type="primary" className={styles.btn_kakao}>{props.text}</Button>
    )
}