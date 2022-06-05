const gameBoard = (() => {
  const gbArr = ['', '', '', '', '', '', '', '', ''];
  const cells = document.querySelectorAll('.cell');

  const renderBoard = function() {
    cells.forEach((cell, index) => {
      cell.innerText = gbArr[index];
    })
  }
  
  const players = document.querySelectorAll('.player');
  const toggler = () => {
    players[0].classList.toggle('active');
    players[1].classList.toggle('active');
  }

  return {
    gbArr,
    cells,
    renderBoard,
    players,
    toggler
  }
})();

const player = (sign) => {
  this.sign = sign;

  let playerBoard = [...gameBoard.gbArr];

  
  
  const markCell = function() {
    gameBoard.cells.forEach((cell, index) => {
      cell.addEventListener('click', function(e) {
        if (e.target.innerText === '') {
          e.target.innerText = `${sign}`;
          playerBoard[index] = `${sign}`;
          console.log(playerBoard);
          gameBoard.toggler();
        }
      })
    })
  }

  return {
    markCell
  }
}

const playerOne = player('X');
const playerTwo = player('O');

const playGame = (() => {

  const playRound = () => {

    for (let i = 2; i < 12; i++) {
      if ((i % 2) === 0) {
        playerOne.markCell();
      } else {
        playerTwo.markCell();
      }
    }
  }

  return {
    playRound
  }

})();

playGame.playRound();
