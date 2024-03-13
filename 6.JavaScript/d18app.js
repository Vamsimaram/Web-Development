const max=prompt("Enter max number");
const rand=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess a number");

while(true){
    if(guess=="quit"){
        console.log("User quit, end the game");
        break;
    }

    if(guess==rand){
        console.log("You are correct, the random number is",rand);
        break;
    }
    else if(guess<rand){
        guess=prompt("hint:your guess is too small, please try again");
    }
    else{
        guess=prompt("hint:your guess is too large, please try again");
    }
}