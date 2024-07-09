import { useState } from "react";


export default function Counter(){
    let [count,setCount]=useState(0);
    console.log("Component is rendered");

    let incCount=()=>{

        setCount((currCount)=>{
            return currCount+1;
        })
        setCount((currCount)=>{
            return currCount+1;
        })

       //setCount(count+1)
       
        console.log(`inside incCount, count is ${count}`)
    };

    return(
        <div>
            <h3>Count: {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}