/*
//mouseout
let test = document.getElementById("test");
test.addEventListener("mouseleave",(event)=>{
    event.target.style.color = "purple";
    setTimeout(() => {
      event.target.style.color = "";
    }, 1000);
  },false,);

test.addEventListener(
  "mouseout",(event) => {
    event.target.style.color = "orange";
    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  },false,);
  */

/*
//keypress event
let log=document.getElementById("log");
let input=document.querySelector("input");

input.addEventListener("keypress", logKey);

function logKey(e) {
    log.textContent += ` ${e.code}`;
}
*/

/*
//green color button change on click
let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    this.style.backgroundColor="green"
})
*/

//qn-3
let ip=document.querySelector("input");
let h=document.querySelector("h2");
ip.addEventListener("keypress",fn);
function fn(e){
    if ((65 <= e.keyCode && e.keyCode<= 90) || (97 <= e.keyCode && e.keyCode<= 122)){
        h.innerText += ` ${e.key}`;
    }   
}




