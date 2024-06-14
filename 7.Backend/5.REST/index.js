const express=require("express");
const app=express();
const port=3000;
const path=require("path");
const {v4:uuidv4}=require('uuid');
const methodOverride=require("method-override");

app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

//INDEX route
let posts=[
    {
        id:uuidv4(),
        username:"vamsi",
        content:"This is vamsi",
    },
    {
        id:uuidv4(),
        username:"sriraj",
        content:"This is sriraj",
    },
    {
        id:uuidv4(),
        username:"Gp",
        content:"This is Gp",
    }
];
//For index route
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

//for create route
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    //res.send("post is working")
    res.redirect("/posts");
})

//for show route
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p) => id===p.id);
    res.render("show.ejs",{post})
})

//update route
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=>id===p.id);
    post.content=newContent;
    res.redirect("/posts");
})

//edit route
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post});

})

//destroy route
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=>id!==p.id);
    res.redirect("/posts");
})

app.listen(port,()=>{
    console.log(`listening to port: ${port}`);

})