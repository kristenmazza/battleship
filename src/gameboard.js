const Ship = require("./ship");

const Gameboard = () => {
  const board = new Array(10).fill(null);

  for (let i = 0; i < 10; i += 1) {
    board[i] = new Array(10).fill(null);
  }

  const carrier = Ship(5, "carrier");
  //   const battleship = Ship(4);
  //   const destroyer = Ship(3);
  //   const submarine = Ship(3);
  //   const patrolBoat = Ship(2);

  function selectStartX() {
    const x = Math.floor(Math.random() * 10);
    return x;
  }

  function selectStartY() {
    const y = Math.floor(Math.random() * 10);
    return y;
  }

  function selectDirection() {
    let direction;
    const randomNum = Math.floor(Math.random() * 2);
    if (randomNum === 0) {
      direction = "horizontal";
    } else {
      direction = "vertical";
    }
    return direction;
  }

  function clearSquares(ship) {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (board[i][j] === ship.shipName) {
          board[i][j] = null;
        }
      }
    }
  }

  function placeShip(ship) {
    const x = selectStartX();
    const y = selectStartY();
    const direction = selectDirection();

    // If start coordinates are empty, attempt to place the boat
    if (!board[x][y]) {
      board[x][y] = ship.shipName;

      // If the boat direction is horizontal and the boat would not go off the board,
      // attempt to fill in the squares based on the ship's length
      if (direction === "horizontal" && y + ship.getLength() - 1 < 10) {
        for (let i = 0; i < ship.getLength() - 1; i += 1) {
          board[x][y + i + 1] = ship.shipName;
        }
        return;
      }
      if (direction === "vertical" && x + ship.getLength() - 1 < 10) {
        for (let j = 0; j < ship.getLength() - 1; j += 1) {
          board[x + j + 1][y] = ship.shipName;
        }
        return;
      }
      clearSquares(ship);
      placeShip(ship);
    }
  }

  placeShip(carrier);
  return { board };
};

module.exports = Gameboard;
