//1.press any key to start the game, 2.btn flash and level 1, 3.btn press, check if userseq eql to gameseq then level up else game over

let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];


let started=false;
let level=0;
 
let h3=document.querySelector("h3")

document.addEventListener("keypress",function(){ //press any key to start the game
    if(started==false){
        console.log("game is started")
        started=true;

        levelUp(); //once button is clicked, level up is called
    }
})

//fn to flash the color
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random() * 3); //rand idx number
    let randColor=btns[randIdx]; //rand color
    let randBtn=document.querySelector(`.${randColor}`) //to pass the color as argu
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn); 

    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn); //flash the particular idx btn
}

function checkAns(idx){ //check indx of both arrrays for colors
    //console.log("curr level:",level);
    //let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        h3.innerHTML =`Game over! Your score was <b>${level}<b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn); 

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}