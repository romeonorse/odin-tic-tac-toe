const gameBoard = (() => {
  const gbArr = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
  const cells = document.querySelectorAll('.cell');

  const renderBoard = function() {
    cells.forEach((cell, index) => {
      cell.innerText = gbArr[index];
    })
  }

  renderBoard();

})();
