import styles from "./layout.module.css";
import Link from "next/link";

export default function Header({ children, home }) {
    return (
        <>
            <div className={styles.header}>헤더</div>
            <div className={styles.navbar}>
                <Link href="/recipe/list">
                    <span>레시피 리스트</span>
                </Link>
                <Link href="/member/login">
                    <span>로그인</span>
                </Link>
            </div>
        </>
    );
}
