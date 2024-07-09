
/*we use two states, one state is to get value of todo(todos),
other state to update the array(newTodo)
updateTodoValue fn is used to get data entered by user using event.target.value
addNewTask fn is used to update the todos array
to print all the tasks, we use map fn.
to delete elmts in arr, we use filter fn
*/

import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
     let [todos,setTodos]=useState([{task:"sample task",id:uuidv4(),isDone:false}]);
     let [newTodo,setNewTodo]=useState("");

     let addNewTask=()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos,{task:newTodo,id:uuidv4(),isDone:false}]
        });
     };

     let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
     };

     let deleteTodo=(id)=>{
        setTodos((prevTodos)=> todos.filter((prevTodos)=>prevTodos.id!=id))
     }

     let markAsDoneAll=()=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
            return {
                ...todo,
                isDone:true,
            };
        })
        );
     };

     let markAsDone=(id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
            if(todo.id==id){
                return {
                    ...todo,
                    isDone:true,
                };
            }else{
                return todo;
            }
        })
        );
     }

    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>
            <h4>Todo List</h4>
            <ul>
                {
                    todos.map((todo)=>(
                    <li key={todo.id}>
                        <span style={todo.isDone? {textDecorationLine:"line-through"}:{}}>
                        {todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                        <button onClick={()=>markAsDone(todo.id)}>Mark As Done</button>
                    </li>
                ))}
            </ul>
            <br></br>
            <button onClick={markAsDoneAll}>Mark As Done All</button>
        </div>
    )
}