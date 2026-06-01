const score = {
    wins: 0,
    losses: 0,
    tie: 0
}
function getMove(){
    const randomNumber = Math.random();
    if(randomNumber >= 0 && randomNumber <1/3) return 'Rock';
    else if(randomNumber >= 1/3 && randomNumber <2/3) return 'Paper';
    else return 'Scissors';
}
function scoreElement(){
    document.getElementById('score').innerHTML= `Wins: ${score.wins}, Losses: ${score.losses}, Tie!: ${score.tie}`; 
}
function rock(){
    const computerMove = getMove();
    console.log(`You chose: Rock. Computer chose: ${computerMove}.`);
    if(computerMove === 'Rock'){ 
        score.tie +=1;
        console.log('Tie!');
    }
    else if(computerMove === 'Paper'){ 
        score.losses +=1;
        console.log('You Lose! LooserL');
    }
    else {
        score.wins +=1;
        console.log('You win! Just a beginner luck');
    }
    scoreElement();
}
function paper(){
    const computerMove = getMove();
    console.log(`You chose: Paper. Computer chose: ${computerMove}.`);
    if(computerMove === 'Rock'){
        score.wins +=1;
        console.log('You win! Just a beginner luck');
    }
    else if(computerMove === 'Paper') {
        score.tie +=1;
        console.log('Tie!');
}
    else {
        score.losses +=1;
        console.log('You Lose! LooserL');
    }
    scoreElement();
}
function scissor(){
    const computerMove = getMove();
    console.log(`You chose: Scissors. Computer chose: ${computerMove}.`);
    if(computerMove === 'Rock') {
        score.losses +=1;
        console.log('You Lose! LooserL');
    }
    else if(computerMove === 'Paper') {
        score.wins +=1;
        console.log('You win! Just a beginner luck');
    }
    else{
        score.tie +=1;
        console.log('Tie!');
    }
    scoreElement();
}
function reset() {
    score.wins = 0;
    score.losses = 0;
    score.tie = 0;
    scoreElement(); // Update the screen to show 0s
    console.log('Score has been reset.');
}


