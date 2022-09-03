import { useState } from 'react';
import styles from "../css/Word.module.css";

export default function Word({ word: w}){

    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow(){
        setIsShow(!isShow);
    }

    function toggleDone(){
        fetch(`http://localhost:3001/words/${word.id}`,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone,
            }),
            }).then(res => {
                if (res.ok){
                    setIsDone(!isDone)
                }
            });
    }

    function del(){
        if (window.confirm("삭제 하시겠습니까?")){
            fetch(`http://localhost:3001/words/${word.id}`,{
                method: "DELETE",
            }).then(res =>{
                if(res.ok){
                    setWord({ id : 0});
                }
            });
        }
    }

    return (
        <tr className={isDone ? "off" : ""}>
            <td className={styles.wordTd}>
                <input type="checkbox" checked={isDone} onChange={toggleDone}/>
            </td>
            <td className={styles.wordEng}>{word.eng}</td>
            <td className={styles.wordKor}>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
                <button onClick={del}>삭제</button>                            
            </td>
        </tr>
    );
}

//npm i -g json-server
//json-server --watch ./src/db/data.json --port 3001

/*
    REST API

    Create : POST
    Read : GET
    Update : PUT
    Delete : DELETE
 */




