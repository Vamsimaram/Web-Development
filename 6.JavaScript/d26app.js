/*
//aysnc function
async function greet(){
    //throw "404, page not found"; //this line is for catch block execution
    return "Hello World!";
}

greet()
    .then((res)=>{
        console.log("Promise resolved");
        console.log(res);
    })
    .catch((err)=>{
        console.log("error: ",err);
    })
*/
/*
//await keyword
let h1=document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed");
        },delay);
    })
}

async function demo(){
    await changeColor("red",1000);
    await changeColor("orange",1000);
    await changeColor("blue",1000);
    await changeColor("green",1000);
}
demo();
*/

/*
//handling rejections
let h1=document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*5)+1;
            if(num>3) reject("promise rejected");
            h1.style.color=color;
            resolve("color changed");
        },delay);
    })
}

async function demo(){
    try{
        await changeColor("red",1000);
        await changeColor("orange",1000);
        await changeColor("blue",1000);
        await changeColor("green",1000);
    } catch(err){
        console.log("error: ",err);
    }
    let a=25;
    console.log(a);
}
demo();
*/

/*
//first api req
let url="https://catfact.ninja/fact";
fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log("data1: ",data.fact);
        return fetch(url);
    })
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log("data2: ",data.fact);
    })
    .catch((err)=>{
        console.log("error: ",err);
    })
*/

//api req using async nd await
let url="https://catfact.ninja/fact";
async function getfacts(){
    try{
        let res1=await fetch(url);
        let data1=await res1.json();
        console.log("data1: ",data1.fact);

        let res2=await fetch(url);
        let data2=await res2.json();
        console.log("data2: ",data2.fact);
    }catch(e){
        console.log("error: ",e);
    }
}

getfacts();