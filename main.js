"use strict";
let player_score = 0;
let computer_score = 0;

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
    };

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

const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player: ${player_score} Computer: ${computer_score}`)
    }
};

game();
