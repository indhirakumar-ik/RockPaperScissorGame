console.log("Game ready guys let rock");
let yourNumber=0
let computerNumber=0;
let gameover=false;
function playgame(playerChoice){

    if(gameover){
        return;
    }

    if(playerChoice==="paper"){
        playerChoice=playerChoice+"📜";
    }else if(playerChoice==="scissor"){
        playerChoice=playerChoice+"✂️";
    }else{
        playerChoice=playerChoice+"🪨";
    }

    const a=Math.floor(Math.random()*3);
    let computerChoice;
    if(a===0){
        computerChoice="rock🪨";
    }else if(a===1){
        computerChoice="paper📜";
    }else{
        computerChoice="scissor✂️";
    }

    document.getElementById("youroption").textContent="Your option : "+playerChoice;
    document.getElementById("computeroption").textContent="computer option : "+computerChoice;

    let result;
    if(playerChoice===computerChoice){
        result="tie";
    }
    else if(playerChoice==="paper📜" && computerChoice==="rock🪨" || 
        playerChoice==="rock🪨" && computerChoice==="scissor✂️" ||
        playerChoice=="scissor✂️" && computerChoice==="paper📜"
    ){
        yourNumber++;
        result="You win🙂";
    }else{
        computerNumber++;
        result="computer wins💻";
    }

    if(yourNumber>=3){
        result="You won the match yahoo....✌🏻";
        gameover=true;
    }
    if(computerNumber>=3){
        result="Computer won the match bye bye🖐️💻";
        gameover=true;
    }

    document.getElementById("result").textContent=result;

    document.getElementById("yourscore").textContent="Your score : "+yourNumber;
    document.getElementById("computerscore").textContent="computer score : "+computerNumber;

}
function reset(){
    yourNumber=0;
    computerNumber=0;
    gameover=false;
    document.getElementById("youroption").textContent="Your option : ";
    document.getElementById("computeroption").textContent="computer option : ";

    document.getElementById("result").textContent="Result";

    document.getElementById("yourscore").textContent="Your score : ";
    document.getElementById("computerscore").textContent="computer score : ";
}