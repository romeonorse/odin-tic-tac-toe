const gameBoard = (() => {
  const gbArr = ['', '', '', '', '', '', '', '', ''];
  const cells = document.querySelectorAll('.cell');

  const renderBoard = function() {
    cells.forEach((cell, index) => {
      cell.innerText = gbArr[index];
    })
  }

  return {
    gbArr,
    cells,
    renderBoard
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
        }
      })
    })
  }

  return {
    sign,
    markCell
  }
}

const playerOne = player('X');
const playerTwo = player('O');

const playGame = (() => {
  
})();
