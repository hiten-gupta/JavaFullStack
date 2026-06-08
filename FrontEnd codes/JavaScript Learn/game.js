let score =JSON.parse(localStorage.getItem('gameScore')) || {
    win :0,
    lose : 0,
    tie : 0
};
let roundMove = '';
let roundResult = '';
scoreElement();
function getMove(){
    const randomNumber = Math.random();
    if(randomNumber >= 0 && randomNumber < 1/3) return 'Rock'
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
function rock(){
    const computerMove = getMove();
    roundMove = `You Choose Rock - Computer Choose ${computerMove}`;
    
    if(computerMove === 'Rock'){
        roundResult = 'Tie! Better Luck Next Time Kiddo';
        score.tie += 1;
    }else if(computerMove === 'Paper'){
        roundResult = 'You Lose! Losser';
        score.lose += 1;
    }else{
        roundResult = 'You Win! Just a Fluke';
        score.win += 1;
    }
    saveGame();
    scoreElement();
}
function paper(){
    const computerMove = getMove();
    roundMove = `You Choose Paper - Computer Choose ${computerMove}`;
    if(computerMove === 'Rock'){
        roundResult = 'You Win! Just a Fluke';
        score.win += 1;
    }else if(computerMove === 'Paper'){
        roundResult = 'Tie! Better Luck Next Time Kiddo';
        score.tie += 1;
    }else{
        roundResult = 'You Lose! Losser';
        score.lose += 1;
    }
    saveGame();
    scoreElement();
}
function scissor(){
    const computerMove = getMove();
    roundMove = `You Choose Scissor - Computer Choose ${computerMove}`;
    if(computerMove === 'Rock'){
        roundResult = 'You Lose! Losser';
        score.lose += 1;
    }else if(computerMove === 'Paper'){
        roundResult = 'You Win! Just a Fluke';
        score.win += 1;
    }else{
        roundResult = 'Tie! Better Luck Next Time Kiddo';
        score.tie += 1;
    }
    saveGame();
    scoreElement();
}
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