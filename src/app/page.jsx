import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Header from "../components/common/header.js";
import Footer from "../components/common/footer.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className={styles.main}>
            <Header></Header>
            <div>메인 내용</div>
            <Footer></Footer>
        </main>
    );
}
