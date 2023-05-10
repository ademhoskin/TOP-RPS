"use strict";

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
    };

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper beats rock.";
        } else {
            return "You win! Rock beats scissors.";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You lose! Scissors beats paper.";
        } else {
            return "You win! Paper beats rock.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats scissors.";
        } else {
            return "You win! Scissors beats paper.";
        }
    }
};

const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
};

game();
