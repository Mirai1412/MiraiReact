// import data from "../db/data.json"
import Word from "./Word";
import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
import useFetch from "../hooks/useFatch";


export default function Day(){

    const { day } = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`);
    // const wordList = data.words.filter(word => word.day === Number(day)); 


    return (
        <div>
            <h1>Day {day}</h1>
            {words.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                    {words.map(word => ( 
                        <Word word={word} key={word.id}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}