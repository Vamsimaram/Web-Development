/*
//random cat facts
let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    let res=await getfacts();

    let p=document.querySelector("#op")
    p.innerText=res;
})



let url="https://catfact.ninja/fact";

async function getfacts(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }catch(e){
        return "Error";
    }
}
*/
/*
//dog images
let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    let link=await getImage();

    let img=document.querySelector("#op")
    img.setAttribute("src",link);
})



let url="https://dog.ceo/api/breeds/image/random";

async function getImage(){
    try{
        let res=await axios.get(url);
        return res.data.message;
    }catch(e){
        return "Error";
    }
}
*/

/*
//sending headers in api's
const url="https://icanhazdadjoke.com"

async function getjokes(){
    try{
        const config={headers:{Accept:"application/json"}}
        let res=await axios.get(url,config);
        console.log(res.data);
    }catch{
        console.log("error!");
    }
}
getjokes();
*/

//activity using Query strings
//get names of univ based on names we search
let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;

    let colArr=await getCollege(country);
    show(colArr);
})

function show(colArr){
    let list=document.querySelector("#list");
    for(col of colArr){
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li)
    }
}

async function getCollege(country){
    try{
        let res=await axios.get(url+country);
        return res.data;
    }catch(e){
        return "Error";
    }
}