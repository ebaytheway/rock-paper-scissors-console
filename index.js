const elements = ["Rock","Paper","Scissors"]
let computerChoice;
let playerChoice;
const startbtn = document.querySelector(".start");
const typer = document.querySelector(".typer");

startbtn.onclick = () => pick();

function pick(){
    let choice = Math.floor(Math.random() * 3)
    computerChoice = elements[choice]
    playerChoice = typer.textContent;

    winner(playerChoice,computerChoice);
}

function winner(player,computer){
    if(player == computer){
        console.log("Draw")
    }
    else(
        console.log("tutmadı knk")
    )
}