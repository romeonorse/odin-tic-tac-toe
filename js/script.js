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

  const checkWinner = () => {
    const b = gameBoard.gbArr;
    let winner;
    const rows = [[b[0], b[1], b[2]], [b[3], b[4], b[5]], [b[6], b[7], b[8]]];
    const columns = [[b[0], b[3], b[6]], [b[1], b[4], b[7]], [b[2], b[5], b[8]]];
    const crosses = [[b[0], b[4], b[8]], [b[2], b[4], b[6]]];
    const elements = [...rows, ...columns, ...crosses];

    const gotWinner = elements.filter(el => {
      el.every(inEl => inEl === el[0])
    });

    winner = gotWinner[0];

    const title = document.querySelector('.title');
    if (winner) {
      title.innerText = `We got a winner: ${winner}`;
    }
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





