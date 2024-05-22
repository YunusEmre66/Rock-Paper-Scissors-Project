const choices = ['Rock', 'Paper', 'Scissors'];
// DOM elements
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const secim = document.getElementById("secim")
const secim1 = document.getElementById("secim1")
const scoreElement = document.getElementById("score")
const newGameButton = document.getElementById("newgame")
let userChoices=0;
let pcChoises=0;
let tieChoises=0;
let score = 10;
// Add event listeners to the choice buttons
rockButton.addEventListener('click', () => playGame('Rock'));
paperButton.addEventListener('click', () => playGame('Paper'));
scissorsButton.addEventListener('click', () => playGame('Scissors'));
function playGame(userChoice) {
    // Randomly select a choice for the computer
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // Display the choices
    secim.textContent=(`You Chose: ${userChoice}`) 
    secim1.textContent=(`Computer Chose: ${computerChoice}`);
    // Determine the winner
    const result = determineWinner(userChoice, computerChoice);
    // Display the result
    if (score > 0){
        if (result === 'user') {
            score -- 
            scoreElement.textContent=(`Heart points = ${score}`)
            sonuc.textContent=('You win!');
            userChoices ++
        } else if (result === 'computer') {
            score -- 
            scoreElement.textContent=(`Heart points = ${score}`)
            sonuc.textContent=('Computer wins!');
            pcChoises++
        } else {
            score -- 
            scoreElement.textContent=(`Heart points = ${score}`)
            sonuc.textContent=("It's a tie!");
            tieChoises++
        }
    }else if (score <= 1) {
        secim.textContent=(`Game Over... `);
        secim1.textContent=(`Gamer Score = ${userChoices}`)
        sonuc.textContent=(`PC Score = ${pcChoises}`)
        scoreElement.textContent=(`Tie Score = ${tieChoises}`);
        return "Game OVer"} 
}
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) { return 'tie';}
    if (
        (userChoice === 'Rock' && computerChoice === 'Scissors') ||
        (userChoice === 'Paper' && computerChoice === 'Rock') ||
        (userChoice === 'Scissors' && computerChoice === 'Paper')) 
    {return 'user';}
    return 'computer';
}
newGameButton.addEventListener("click", () => {
    score = 10;
    scoreElement.textContent=('');
    sonuc.textContent=('');
    secim.textContent=('');
    secim1.textContent=('')
    userChoices=0;
    pcChoises=0; 
    tieChoises=0;
})