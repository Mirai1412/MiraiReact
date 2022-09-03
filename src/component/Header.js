import styles from "../css/Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
    <div className={styles.header}>
        <h2 className={styles.headerHone}><Link to="/">단어짱!</Link></h2>
        <div className={styles.btnHeader}>
            <button className={styles.headerBtn}>
                <Link to="/create_word" className="link">
                    단어추가
                </Link>
            </button>
            <button className={styles.headerBtn}>
                <Link to="/create_day" className="link">
                    Day 추가
                </Link>
            </button>            
        </div>
    </div>
    );
}