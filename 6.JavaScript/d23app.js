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
