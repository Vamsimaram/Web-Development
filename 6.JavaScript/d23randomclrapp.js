let btn=document.querySelector("button")
let h3=document.querySelector("h3")
let div=document.querySelector("div")

btn.addEventListener("click",function(){
    let randomColor=RandomColor(); //fn call
    h3.innerText=randomColor; //to update heading of page
    div.style.backgroundColor=randomColor; //to update the div box color
});


//function to generate random color values 
function RandomColor(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let color=`rgb(${r},${g},${b})`;
    return color;
}