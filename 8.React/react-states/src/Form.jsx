import { useState } from "react";

export default function Form(){
    let [formData,setFormData]=useState({
        fullName:"",
        username:"",
        password:"",
    });

    let handleInputChange=(event)=>{
        // let fieldName=event.target.name;
        // let newValue=event.target.value;
        //console.log(newValue)
        //setFullName(event.target.value)
        setFormData((currData)=>{
            //currData[fieldName]=newValue;
            return {...currData,[event.target.name]:event.target.value};
        });
    };

    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData)
        setFormData({
            fullName:"",
            username:"",
            password:"",
        });
    };


    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
            <input 
            placeholder="enter full name" 
            type="text"
            value={formData.fullName}
            onChange={handleInputChange}
            id="fullName"
            name="fullName"
            />
            <br></br>
            <br></br>
        <label htmlFor="username">Username</label>
            <input 
            placeholder="enter username" 
            type="text"
            value={formData.username}
            onChange={handleInputChange}
            id="username"
            name="username"
            />
            <br></br>
            <br></br>
        <label htmlFor="password">Password</label>
            <input 
            placeholder="enter password" 
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            id="password"
            name="password"
            />
            <button>Submit</button>
        </form>
    )
}

