import { useRef } from "react";
import useFetch from "../hooks/useFatch"
import { useNavigate } from "react-router-dom";


export default function CreateWord(){
    
    const days = useFetch(`http://localhost:3001/days`);
    const navigate = useNavigate();

    function onSubmit(e){
        e.preventDefault();

        fetch(`http://localhost:3001/words`,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                day : dayRef.current.value, 
                eng : engRef.current.value, 
                kor : korRef.current.value,
                isDone : false 
            }),
        }).then(res =>{
            if(res.ok){
                alert("생성이 완료 되었습니다.");
                navigate.push(`/day/${dayRef.current.value}`);
            }
        });

    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <div>
            <form>
                <div>
                    <label>Eng</label>
                    <input type="text" placeholder="ex) computer" ref={engRef}/>
                </div>
                <div>
                    <label>Kor</label>
                    <input type="text" placeholder="ex) 컴퓨터" ref={korRef}/>
                </div>      
                <div>
                    <label>Day</label>
                    <select ref={dayRef}>
                        {days.map(day => ( 
                            <option key={day.id} value={day.day}>
                                {day.day}
                            </option>
                        ))}
                    </select>                                
                </div>
                <button onClick={onSubmit}>등록</button>                                
            </form>
        </div>
    )
}