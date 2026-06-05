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
    console.log(`You choose : Rock, Computer choose : ${computerMove}`);
    if(computerMove === 'Rock'){
        console.log('Tie! Better Luck Next Time Kiddo');
        score.tie += 1;
    }else if(computerMove === 'Paper'){
        console.log('You Lose! Losser');
        score.lose += 1;
    }else{
        console.log('You Win! Just a Fluke');
        score.win += 1;
    }
    saveGame();
    scoreElement();
}
function paper(){
    const computerMove = getMove();
    roundMove = `You Choose Paper - Computer Choose ${computerMove}`;
    console.log(`You choose : paper, Computer choose : ${computerMove}`);
    if(computerMove === 'Rock'){
        console.log('You Win! Just a Fluke');
        score.win += 1;
    }else if(computerMove === 'Paper'){
        console.log('Tie! Better Luck Next Time Kiddo');
        score.tie += 1;
    }else{
        console.log('You Lose! Losser');
        score.lose += 1;
    }
    saveGame();
    scoreElement();
}
function scissor(){
    const computerMove = getMove();
    roundMove = `You Choose Scissor - Computer Choose ${computerMove}`;
    console.log(`You choose : scissor, Computer choose : ${computerMove}`);
    if(computerMove === 'Rock'){
        console.log('You Lose! Losser');
        score.lose += 1;
    }else if(computerMove === 'Paper'){
        console.log('You Win! Just a Fluke');
        score.win += 1;
    }else{
        console.log('Tie! Better Luck Next Time Kiddo');
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