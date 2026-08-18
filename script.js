console.log("Game ready guys let rock");
let yourNumber=0
let computerNumber=0;
function playgame(playerChoice){
    const a=Math.floor(Math.random()*3);
    let computerChoice;
    if(a===0){
        computerChoice="rock";
    }else if(a===1){
        computerChoice="paper";
    }else{
        computerChoice="scissor";
    }

    document.getElementById("youroption").textContent="Your option : "+playerChoice;
    document.getElementById("computeroption").textContent="computer option : "+computerChoice;

    let result;
    if(playerChoice===computerChoice){
        result="tie";
    }
    else if(playerChoice==="rock" && computerChoice==="paper" || 
        playerChoice==="paper" && computerChoice==="rock" ||
        playerChoice=="scissor" && computerChoice==="paper"
    ){
        yourNumber++;
        result="You win";
    }else{
        computerNumber++;
        result="computer wins";
    }


    document.getElementById("result").textContent=result;

    document.getElementById("yourscore").textContent="Your score : "+yourNumber;
    document.getElementById("computerscore").textContent="computer score : "+computerNumber;
}