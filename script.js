function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'It\'s a tie!';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function playerChoice(player) {
    const computer = computerChoice();
    const result = determineWinner(player, computer);
    document.getElementById('result').innerText = `Computer chose ${computer}. ${result}`;
}

let scores = {
    wins: 0,
    losses: 0,
    draws: 0
};

function updateScore(result) {
    if (result === 'You win!') {
        scores.wins++;
    } else if (result === 'You lose!') {
        scores.losses++;
    } else {
        scores.draws++;
    }

    const scoreDisplay = `Wins: ${scores.wins}, Losses: ${scores.losses}, Draws: ${scores.draws}`;
    document.getElementById('score').innerText = scoreDisplay;
}

function playerChoice(player) {
    const computer = computerChoice();
    const result = determineWinner(player, computer);
    updateScore(result);
    document.getElementById('result').innerText = `Computer chose ${computer}. ${result}`;
}
