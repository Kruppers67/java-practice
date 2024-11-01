

function pcChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}



function theGame(_myChoice, _pcChoice) {


    if (_myChoice === _pcChoice) {
        return "Its a tie, you both picked the same item.";
    } else if (_myChoice === "rock" && _pcChoice === "scissors") {
        humanScore++
        return "You win! rock beats scissors.";
    } else if (_myChoice === "paper" && _pcChoice === "rock") {
        humanScore++
        return "You win! paper beats rock."; 
    } else if (_myChoice === "scissors" && _pcChoice === "paper") {
        humanScore++
        return "You win! scissors beats paper.";
    } else if (_myChoice === "scissors" && _pcChoice === "rock") {
        pcScore++
        return "You lose! rock beats scissors.";
    } else if (_myChoice === "rock" && _pcChoice === "paper") {
        pcScore++
        return "You lose! paper beats rock.";
    } else if (_myChoice === "paper" && _pcChoice === "scissors") {
        pcScore++
        return "You lose! scissors beats paper.";
 
    
    }

}
const _myChoice = prompt("Choose rock, paper, or scissors to start the game!").toLowerCase();
const _pcChoice = pcChoice();
let humanScore = 0;
let pcScore = 0;

function game() {
    for (let i=0; i<5; i++) {
        theGame(_myChoice, _pcChoice)
    }
    if(humanScore > pcScore) {
        return "You are smarter than a PC, congrats..."
    } else if (humanScore < pcScore) {
            return "You lose. Hah you doopid"
    } else if (humanScore == pcScore) {
            return "Welp, its a tie."
    
    
    }
}
console.log(game());