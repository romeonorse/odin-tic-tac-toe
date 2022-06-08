'use strict';

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
      players.forEach(player => player.classList.toggle('active'));
      console.log('toggler');
    }

  const player1 = document.querySelector('.player-1');
  const player2 = document.querySelector('.player-2');

  let counter = 2;
  
  return {
    gbArr,
    cells,
    renderBoard,
    toggler,
    counter
  }
})();



const player = () => {
  
  this.sign = 'O';
  let playerBoard = [...gameBoard.gbArr];
  
  const checkCounter = () => {
    if (gameBoard.counter % 2 === 0) {
      sign = 'X'
    } else {
      sign = 'O';
    }

    return sign;
  }
  
  const markCell = function() {
    gameBoard.cells.forEach((cell, index) => {
      cell.addEventListener('click', function(e) {
        checkCounter();
        if (e.target.innerText === '') {
          e.target.innerText = `${sign}`;
          playerBoard[index] = `${sign}`;
          gameBoard.toggler();
          return gameBoard.counter++;
        }
      })
    })
  }

  
  
  return {
    markCell
  }
}

const currentPlayer = player();



currentPlayer.markCell();





