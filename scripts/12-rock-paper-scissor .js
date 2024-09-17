let score=  JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0
 };
 document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    
/* if (!score){
  score={
    wins:0,
    losses:0,
    ties:0
  };
 } */
  let isAutoPlaying = false;
  let intervalId;
  //const autoPlay = () =>{

  // }
 function autoPlay(){
    if (!isAutoPlaying){
      intervalId = setInterval(() => {
      const playerMove = pickcomputerMove();
      playGame(playerMove);
      },1000);//runs for every 1 seeec
      isAutoPlaying = true;
    }else{
      clearInterval(intervalId);
      isAutoPlaying = false;
    }
    
  }

  document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('Rock');
  });
  document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('Paper');
  });
  document.querySelector('.js-scissor-button')
  .addEventListener('click', () => {
    playGame('Scissors');
  });

  document.body.addEventListener('keydown',(event) => {
    if (event.key === 'r'){
      playGame('Rock');
    }else if(event.key === 'p'){
      playGame('Paper');
    }else if(event.key === 's'){
     playGame('Scissors');
    }
  });

  function playGame(playerMove)
  {
    const computerMove= pickcomputerMove();
    let result='';

  if (playerMove === 'Scissors')
  {

    if (computerMove === 'Rock'){
    result='You Lose.&#128546;';
    }else if(computerMove === 'Paper'){
    result='You Win.&#128516;';
    }else if (computerMove == 'Scissors'){
    result='Tie.&#128528;';
    }
  }else if(playerMove === 'Paper')
  {
      if (computerMove === 'Rock'){
        result='You Win.&#128516;';
      }else if(computerMove === 'Paper'){
        result='Tie.&#128528;';
      }else if (computerMove == 'Scissors'){
        result='You Lose.&#128546;';
      }
  }
  else if(playerMove === 'Rock')
  {
    if (computerMove === 'Rock'){
    result='Tie.&#128528;';
    }else if(computerMove === 'Paper'){
    result='You Lose.&#128546;';
    }else if (computerMove == 'Scissors'){
    result='You Win.&#128516;';
    }
  }
  if(result === 'You Win.&#128516;'){
    score.wins += 1;
  }else if(result === 'You Lose.&#128546;'){
    score.losses += 1;
  }else if(result === 'Tie.&#128528;'){
    score.ties += 1;
  }
   updatescoreElement();

   document.querySelector('.js-result').innerHTML= result;
   document.querySelector('.js-moves').
       innerHTML= `You 
       <img src="./icons/${playerMove}-emoji.png" 
       class="move-icon"> 
       Computer 
       <img src="./icons/${computerMove}-emoji.png" 
       class="move-icon">`;
  }
  function updatescoreElement(){
  localStorage.setItem('score',JSON.stringify(score));
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }
  function pickcomputerMove(){
  const randomNumber = Math.random();

  let computerMove =''; 

    if (randomNumber >= 0 && randomNumber< 1/3){
    computerMove='Rock';
    }else if (randomNumber >= 1/3 && randomNumber< 2/3){
    computerMove='Paper';
    }else if (randomNumber >= 2/3 && randomNumber< 1){
    computerMove='Scissors';
    } 

    return computerMove;
    }
    
