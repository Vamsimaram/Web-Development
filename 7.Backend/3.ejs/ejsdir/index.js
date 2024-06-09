const express=require("express");
const app=express();
const path=require("path");

let port=3000;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

//basic ejs 
app.get("/",(req,res)=>{
    res.render("home.ejs");
})

//parsing data to ejs
app.get("/dicenum",(req,res)=>{
    let value=Math.floor(Math.random()*6)+1;
    res.render("dice.ejs",{num:value});   //{num:value} is object parameter
})

//insta similar page
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params
    const followers=["prem","sriraj","dinesh"];
    res.render("instagram.ejs",{username,followers});   
})

app.listen(port,()=>{
    console.log(`listening to port: ${port}`);
})