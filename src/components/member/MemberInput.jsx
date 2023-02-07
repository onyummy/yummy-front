import { Input } from "antd"
import styles from "./member.module.css";
export default function MemberInput(props) {
    return (
        <>
            <Input placeholder={props.placeholder} name={props.name} className={styles.input_member}/>
        </>  
    )
}