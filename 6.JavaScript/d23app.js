/*
let btns=document.querySelectorAll("button");

for(btn of btns){
    // btn.onclick =likePost;
    // btn.onmouseenter=enterMouse;

    btn.addEventListener("click",sayHello);     //syntax:addEventListener(event,callback)
    btn.addEventListener("click",sayHi);
    btn.addEventListener("dblclick",dblClicked);
}

function likePost(){
    console.log("Liked the post");

}

function enterMouse(){
    console.log("Mouse is on like post btn");
}


function sayHello(){
    alert("Hello using addEventListener");

}

function sayHi(){
    alert("Hiiii using addEventListener");

}

function dblClicked(){
    console.log("Button is clicked two times");

}
*/
/*
//this function example
let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");
let p=document.querySelector("p");

function callThis(){
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
}

btn.addEventListener("click",callThis);
h1.addEventListener("click",callThis);
h3.addEventListener("click",callThis);
p.addEventListener("click",callThis);

*/

/*
//keyboard events
let ip=document.querySelector("input");

ip.addEventListener("keydown",function(event){
    console.log("code= ",event.code); //ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)
    if(event.code=="ArrowUp") console.log("character moves forward");
    if(event.code=="ArrowDown") console.log("character moves backward");
    if(event.code=="ArrowLeft") console.log("character moves left");
    if(event.code=="ArrowRight") console.log("character moves right");
})
*/

/*
//form event
let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    alert("form submitted")
})
*/

/*
//extracting data from form

let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();

    let user=document.querySelector("#name");     //document.querySelector("#name")==form.element[0]
    let pass=document.querySelector("#pass");     //document.querySelector("#pass")==form.element[1] and for button it is form.element[2]
    console.log("username: ",user.value);
    console.log("password: ",pass.value);

})
*/

//change and input events
/*let form=document.querySelector("form");
form.addEventListener("change",function(event){
    event.preventDefault();

    let user=document.querySelector("#name");
    console.log("value is changed");
    console.log("username: ",user.value);
}); */

let form=document.querySelector("form");
form.addEventListener("input",function(event){
    event.preventDefault();

    let user=document.querySelector("#name");
    console.log("input value is changed");
    console.log("username: ",user.value);
});