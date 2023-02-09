import Image from "next/image"
import imgLine from "./img/line.png"
import styles from "./member.module.css";

export default function MemberLine(props) {
    return (
        <div>
            <Image src={imgLine} className={styles.img_line}></Image>
            <span className={styles.line_text}>{props.text}</span>
            <Image src={imgLine} className={styles.img_line}></Image>
        </div>  
    )
}