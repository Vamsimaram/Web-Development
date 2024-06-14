const {faker}=require("@faker-js/faker");
const mysql=require("mysql2");
const express=require("express");
const app=express();
const path=require("path")
const methodOverride=require("method-override");
const { v4: uuidv4 } = require("uuid");


app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


//create connection with db
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'sample',
    password:'Vamsi@7007'
})

let getRandomUser=()=>{
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password()
    ];
};

//home route
app.get("/",(req,res)=>{
    let q=`select count(*) from user2`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let count=result[0]["count(*)"];
            res.render("home.ejs",{count});
        });
    }catch(err){
        res.send("error");
    }
    
    //res.send("welcome to home page")
})

//show route
app.get("/user",(req,res)=>{
    let q=`select * from user2`;
    try{
        connection.query(q,(err,users)=>{
            if(err) throw err;
            res.render("showusers.ejs",{users });
        });
    }catch(err){
        res.send("error");
    }
})

//edit route
app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    let q=`select * from user2 where id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user=result[0];
            res.render("edit.ejs",{user});
        });
    }catch(err){
        res.send("error");
    }

})

//update route
app.patch("/user/:id",(req,res)=>{
    let {id}=req.params;
    let {password:formPass,username:newUsername}=req.body;
    let q=`select * from user2 where id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user=result[0];
            //check pw
            if(formPass != user.password){
                res.send("wrong password");
            }else{
                //update username
                let q2=`update user2 set username='${newUsername}' where id='${id}'`;
                connection.query(q2,(err,result)=>{
                    if(err) throw err;
                    res.redirect("/user");
                })
            }
        });
    }catch(err){
        res.send("error");
    }
})

//add new user
app.get("/user/new", (req, res) => {
    res.render("new.ejs");
  });
  
app.post("/user/new", (req, res) => {
    let { username, email, password } = req.body;
    let id = uuidv4();
    //Query to Insert New User
    let q = `INSERT INTO user2 (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}') `;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        console.log("added new user");
        res.redirect("/user");
      });
    } catch (err) {
      res.send("some error occurred");
    }
  });
  
  app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user2 WHERE id='${id}'`;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0];
        res.render("delete.ejs", { user });
      });
    } catch (err) {
      res.send("some error with DB");
    }
  });
  
  //delete user
  app.delete("/user/:id/", (req, res) => {
    let { id } = req.params;
    let { password } = req.body;
    let q = `SELECT * FROM user2 WHERE id='${id}'`;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0];
  
        if (user.password != password) {
          res.send("WRONG Password entered!");
        } else {
          let q2 = `DELETE FROM user2 WHERE id='${id}'`; //Query to Delete
          connection.query(q2, (err, result) => {
            if (err) throw err;
            else {
              console.log(result);
              console.log("deleted!");
              res.redirect("/user");
            }
          });
        }
      });
    } catch (err) {
      res.send("some error with DB");
    }
  });

app.listen("3000",()=>{
    console.log("server listening to port 3000")
})

//inserting new data
//let q="insert into user2 (id,username,email,password)values ?";
// let users=[
//     ["123a","a1","ab@gmail.com","ab"],
//     ["123b","b1","abc@gmail.com","abc"]
// ]

//generate larger sample data
// let data=[];
// for(let i=1;i<=100;i++){
//     data.push(getRandomUser());
// }

//query
//let q="SHOW TABLES";
// try{
//     connection.query(q,[data],(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//     });
// }catch(err){
//     console.log(err);
// }

//close connection
//connection.end();
//to run this sql, in cmd we need to run :/usr/local/mysql/bin/mysql -u root -p


//generate random data using faker
// let getRandomUser=()=>{
//     return {
//         id:faker.datatype.uuid(),
//         username:faker.internet.userName(),
//         email:faker.internet.email(),
//         password:faker.internet.password()
//     };
// };
//console.log(getRandomUser());