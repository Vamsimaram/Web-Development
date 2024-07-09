//to display all the TicketNum components, we use map fn


import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ticket}){
    return (
        <div className="Ticket">
            <p>Ticket</p>
            {ticket.map((num,idx)=>(
                    <TicketNum num={num}/>
            ))}
        </div>
    )
}