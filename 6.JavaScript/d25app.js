/*
//breakpoints example
function one(){
    return 1;
}

function two(){
    return one()+one();
}

function three(){
    let ans=two()+one();
    console.log(ans);
}

three();
*/

/*
//single threadred
setTimeout(function(){
    console.log("Hello World!");
},2000)
setTimeout(function(){
    console.log("Hello World!");
},2000)

console.log("Good Day");
*/

/*
//callback hell
h1=document.querySelector("h1");

function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextColorChange) nextColorChange();
    },delay);
}

changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
        changeColor("green",1000);
    });
})
*/

/*
//promises example
function savetoDb(data,success,failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4) success();
    else failure();
}

savetoDb("Hello world!",()=>{
    console.log("success, data 1 inserted");
    savetoDb("World cup month",()=>{
        console.log("success, data2 inserted");
    },()=>{
        console.log("data 2 not inserted, weak connection");
    })
},()=>{
    console.log("weak connection, data 1 not inserted");})
*/

//now above code is updated using promises
/*   
function savetoDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4) resolve("success, data inserted");
        else reject("failed, weak connection");
    })
}
*/
//then and catch methods
/*
let result=savetoDb("sample data");
result
     .then(()=>{
        console.log("promise resolved");
     })
     .catch(()=>{
        console.log("promise rejected");
     })
*/
/*
//promises chaining

savetoDb("sample data")
     .then(()=>{
        console.log("data 1 added");
        return savetoDb("data 2");
     })
     .then(()=>{
        console.log("data 2 added");
     })
     .catch(()=>{
        console.log("promise failed");
     })
*/
/*
//result and error in promises
savetoDb("sample data")
     .then((result)=>{
        console.log("data 1 added");
        console.log(result)
        return savetoDb("data 2");
     })
     .then((result)=>{
        console.log("data 2 added");
        console.log(result)
     })
     .catch((error)=>{
        console.log("promise failed");
        console.log(error)
     })
*/

//change color using promises
h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed");
        },delay);
    })
}

changeColor("red",1000)
    .then(()=>{
        console.log("red updated!");
        return changeColor("orange",1000);
    })
    .then(()=>{
        console.log("orange updated!");
        return changeColor("yellow",1000);
    })
    .then(()=>{
        console.log("green updated!");
        
    })