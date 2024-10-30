function pcChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function theGame(_myChoice, _pcChoice) {
    if (_myChoice === _pcChoice) {
        return "Its a tie, you both picked the same item.";
    } else if (_myChoice === "rock" && _pcChoice === "scissors") {
        return "You win! rock beats scissors.";
    } else if (_myChoice === "paper" && _pcChoice === "rock") {
        return "You win! paper beats rock.";
    } else if (_myChoice === "scissors" && _pcChoice === "paper") {
        return "You win! scissors beats paper.";
    } else if (_myChoice === "scissors" && _pcChoice === "rock") {
        return "You lose! rock beats scissors.";
    } else if (_myChoice === "rock" && _pcChoice === "paper") {
        return "You lose! paper beats rock.";
    } else if (_myChoice === "paper" && _pcChoice === "scissors") {
        return "You lose! scissors beats paper.";
 
    
    }

}
const _myChoice = prompt("Choose rock, paper, or scissors to start the game!").toLowerCase();
const _pcChoice = pcChoice();
console.log(theGame(_myChoice, _pcChoice))
