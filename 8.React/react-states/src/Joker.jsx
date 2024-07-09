import { useState,useEffect } from "react"

export default function Joker(){

    
    const URL="https://official-joke-api.appspot.com/random_joke";

    const getNewJoke=async()=>{
        let response=await fetch(URL);
        let jsonResponse= await response.json();
        setJoke({setup:jsonResponse.setup, punchline:jsonResponse.punchline});
    };
    let [joke,setJoke]=useState(getNewJoke);

    useEffect(()=>{
        async function getFirstJoke(){
            let response=await fetch(URL);
            let jsonResponse= await response.json();
            console.log(jsonResponse);
            setJoke({setup:jsonResponse.setup, punchline:jsonResponse.punchline});
        }
        getFirstJoke()
    },[]);

    return (
        <div>
            <h3>Joker!</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    )
}