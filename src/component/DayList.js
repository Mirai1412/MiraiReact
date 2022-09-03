import styles from "../css/DayList.module.css";
// import data from "../db/data.json"
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
import useFetch from "../hooks/useFatch";

export default function DayList(){
    const days = useFetch("http://localhost:3001/days");

    return (
    <div className={styles.listBox}>
        <ul className={styles.listUl}>
            {days.map(day=>(
                <li key={day.id} className={styles.listLi}>
                    <Link to ={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
    </div>
    );
}