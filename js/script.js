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
  
  return {
    gbArr,
    cells,
    renderBoard,
    toggler
  }
})();


const player = () => {
  
  let playerBoard = [...gameBoard.gbArr];

  const markCell = function(sign) {
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

const playerOne = player();
const playerTwo = player();