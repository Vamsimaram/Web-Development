import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import Lottery from './Lottery'
import TicketNum from './TicketNum'
import Ticket from './Ticket'
import {sum} from './helper'
import Form from './Form'
import CommentForm from './CommentForm'
import Counterr from './Counterr'
import Joker from './Joker'

function App() {

  

  return (
    <>
        <Joker/>
    </>
  );
}

export default App

//Lottery n={3} winCondition={winCondition}
//let winCondition=(ticket)=>{
//return sum(ticket)===15;
  //return ticket.every((num)=>num===ticket[0]);   //(some other lottery win condi)
//}