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
  const reset = document.querySelector('.reset');
  
  return {
    gbArr,
    cells,
    renderBoard,
    toggler,
    counter,
    title,
    reset
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

    const rows = [[playerBoard[0], playerBoard[1], playerBoard[2]], [playerBoard[3], playerBoard[4], playerBoard[5]], [playerBoard[6], playerBoard[7], playerBoard[8]]];
    const columns = [[playerBoard[0], playerBoard[3], playerBoard[6]], [playerBoard[1], playerBoard[4], playerBoard[7]], [playerBoard[2], playerBoard[5], playerBoard[8]]];
    const crosses = [[playerBoard[0], playerBoard[4], playerBoard[8]], [playerBoard[2], playerBoard[4], playerBoard[6]]];
    const elements = [...rows, ...columns, ...crosses];

    
    const winner = elements.filter(el => el.every(inEl => {
      return inEl !== '' ? inEl === el[0] : null
    }));
    console.log(elements, winner);

    const [newArr] = [...winner];
    
    if (newArr !== undefined) {
      if (newArr[0] === 'X') {
        playerBoard = [...gameBoard.gbArr];
        return 'X is won';
      } else if (newArr[0] === 'Y') {
        playerBoard = [...gameBoard.gbArr];
        return 'Y is won';
      }
    } else {
      return 'Tic-Tac-Toe';
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
          gameBoard.title.innerText = checkWinner();
          return gameBoard.counter++;
        }
      })
    })
  }

  
  
  return {
    markCell
  }
}


gameBoard.reset.addEventListener('click', function() {
  gameBoard.cells.forEach(cell => cell.innerText = '');
  gameBoard.counter = 2;
  gameBoard.title.innerText = 'Tic-Tac-Toe';
})

const currentPlayer = player();

currentPlayer.markCell();





