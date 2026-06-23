let score =JSON.parse(localStorage.getItem('gameScore')) || {
    win :0,
    lose : 0,
    tie : 0
};
let roundMove = '';
let roundResult = '';

const emojiMap = {
    'Rock' : '<img src = "rock-emoji.png" class = "emoji-inline">',
    'Paper' : '<img src = "paper-emoji.png" class = "emoji-inline">',
    'Scissor' : '<img src = "scissors-emoji.png" class = "emoji-inline">',
};
scoreElement();
function getMove(){
    const randomNumber = Math.random();
    if(randomNumber >= 0 && randomNumber < 1/3) return 'Rock';
    else if(randomNumber>=1/3 && randomNumber <2/3) return'Paper';
    else return 'Scissor';
}
function scoreElement(){
    document.getElementById('score').innerHTML = `Win: ${score.win}, Lose = ${score.lose}, Tie = ${score.tie}`;
    document.getElementById('move').innerHTML = roundMove;
    document.getElementById('result').innerHTML = roundResult;
}
function saveGame(){
    localStorage.setItem('gameScore', JSON.stringify(score));
}
function updateGame(playerMove){
    const computerMove = getMove();
    if(playerMove === computerMove){
        roundResult ='Tie! Better Luck Next Time Kiddo';
        score.tie += 1;
    }
    else if((playerMove === 'Rock' && computerMove === 'Scissor')
        || (playerMove === 'Paper' && computerMove === 'Rock')
        || (playerMove === 'Scissor' && computerMove ==='Paper')){
        roundResult = 'You Win! Just a Fluke';
        score.win +=1;
    }else{
        roundResult = 'You Lose! Losser';
        score.lose += 1;
    }
    roundMove = `You choose ${emojiMap[playerMove]} Computer Choose ${emojiMap[computerMove]}`;
    saveGame();
    scoreElement();
}
function rock(){updateGame('Rock');}
function paper(){updateGame('Paper');}
function scissor(){updateGame('Scissor');}
function reset(){
    score.win = 0;
    score.tie = 0;
    score.lose = 0;
    scoreElement();
    roundMove = '';
    roundResult = '';
    localStorage.removeItem('gameScore');
    scoreElement();
    console.log('Score has been reset! Enjoy');
}