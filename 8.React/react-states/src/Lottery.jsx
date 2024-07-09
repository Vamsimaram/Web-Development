import { useState } from "react";
import "./Lottery.css";
import { getTicket,sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n=3,winCondition}){
    const [ticket,setTicket]=useState(getTicket(n));
    let isWinning=winCondition(ticket);

    let buyTicket=()=>{
        setTicket(getTicket(3));
    }

    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning&&"Congrats, you won!"}</h3>
        </div>
    );
}