import { Button } from "antd";
import styles from "./member.module.css";
export default function MemberBtn(props) {
    return (
        <>
            <Button type="primary" className={styles.btn_member}>
                {props.name}
            </Button>
        </>  
    )
}