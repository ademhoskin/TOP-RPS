"use strict";
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const result = document.getElementById("result");
const score = document.getElementById("score");

let player_score = 0;
let computer_score = 0;
// pl
const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
    };

//play a round
const playRound = (playerSelection, computerSelection) => {

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computer_score++;
            return "You lose! Paper beats rock.";
        } else {
            player_score++;
            return "You win! Rock beats scissors.";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computer_score++;
            return "You lose! Scissors beats paper.";
        } else {
            player_score++;
            return "You win! Paper beats rock.";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computer_score++;
            return "You lose! Rock beats scissors.";
        } else {
            player_score++;
            return "You win! Scissors beats paper.";
        }
    }
    else {
        return "Invalid input. Try again.";
    }
};

//game play
const game = (playerSelection) => {
        const computerSelection = getComputerChoice();
        result.textContent = playRound(playerSelection, computerSelection)
        score.textContent = `Player: ${player_score} Computer: ${computer_score}`
        if (player_score === 5) {
            result.textContent = "You win!";
            player_score = 0;
            computer_score = 0;
        }
        else if (computer_score === 5) {
            result.textContent = "Computer wins!";
            player_score = 0;
            computer_score = 0;
        }
};

// button event listeners
rockBtn.addEventListener("click", () => {
    game("rock");
}
);

paperBtn.addEventListener("click", () => {
    game("paper");
}
);

scissorsBtn.addEventListener("click", () => {
    game("scissors");
}
);
