const express=require("express");
const app=express();
let port=3000;
app.listen(port,()=>{
    console.log(`port listening to ${port}`);
})

//nrml send req
// app.use((req,res)=>{
//     console.log("new incoming request");

//     //basic responses
//     //res.send("basic response");//basic response
//     res.send({
//         name:"apple",
//         color:"red"
//     })
// })

//routing using get
// app.get("/",(req,res)=>{
//     res.send("you are in home page");
// })
// app.get("/search",(req,res)=>{
//     res.send("u r in search page");
// })
// app.get("/help",(req,res)=>{
//     res.send("u r in help page");
// })
// app.get("*",(req,res)=>{
//     res.send("page not found");
// })
 
//path params    //search:http://localhost:3000/mvk/25
// app.get("/",(req,res)=>{
//     res.send("you are in home page");
// })
// app.get("/:username/:id",(req,res)=>{
//     let {username,id}=req.params;  //{username,id} stores the req variable,cannot acces directly
//     res.send(`welcome to the page @${username} and your id is ${id}`);
// })


//query strings   //search:http://localhost:3000/search?q=mvk
// app.get("/",(req,res)=>{
//     res.send("you are in home page");
// })
// app.get("/search",(req,res)=>{
//     let {q}=req.query;
//     if(!q){
//         res.send("you are not seaching!")
//     }
//     res.send(`search for: ${q}`);
// })