import { useState, useEffect } from "react";


export default function Counterr(){
    let [count,setCount]=useState(0);

    let incCount=()=>{
        setCount((currCount)=>currCount+1)
    }

    useEffect(function printSomething(){
        console.log("this is side-effect");
    })

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={incCount}>+1</button>
        </div>
    )
}