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

  const title = document.querySelector('.title');
  
  return {
    gbArr,
    cells,
    renderBoard,
    toggler,
    counter,
    title
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

  const checkWinner = () => {
    let winner;

    const rows = [[playerBoard[0], playerBoard[1], playerBoard[2]], [playerBoard[3], playerBoard[4], playerBoard[5]], [playerBoard[6], playerBoard[7], playerBoard[8]]];
    const columns = [[playerBoard[0], playerBoard[3], playerBoard[6]], [playerBoard[1], playerBoard[4], playerBoard[7]], [playerBoard[2], playerBoard[5], playerBoard[8]]];
    const crosses = [[playerBoard[0], playerBoard[4], playerBoard[8]], [playerBoard[2], playerBoard[4], playerBoard[6]]];
    const elements = [...rows, ...columns, ...crosses];

    const winnerX = elements.some(el => {
      el.forEach(inEl => {
        inEl === 'X';
      })
    })

    console.log(elements, winnerX);

  }
  
  const markCell = function() {
    gameBoard.cells.forEach((cell, index) => {
      cell.addEventListener('click', function(e) {
        checkCounter();
        if (e.target.innerText === '') {
          e.target.innerText = `${sign}`;
          playerBoard[index] = `${sign}`;
          gameBoard.toggler();
          checkWinner();
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





