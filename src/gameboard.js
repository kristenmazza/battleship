const Ship = require("./ship");

const Gameboard = () => {
  const board = new Array(10).fill(null);

  // Create gameboard 2D array
  for (let i = 0; i < 10; i += 1) {
    board[i] = new Array(10).fill(null);
  }

  // Create ship
  const carrier = Ship(5, "carrier");
  const battleship = Ship(4, "battleship");
  const destroyer = Ship(3, "destroyer");
  const submarine = Ship(3, "submarine");
  const patrolBoat = Ship(2, "patrolBoat");

  // Randomly select starting X coordinate
  function selectStartX() {
    const x = Math.floor(Math.random() * 10);
    return x;
  }

  // Randomly select starting Y coordinate
  function selectStartY() {
    const y = Math.floor(Math.random() * 10);
    return y;
  }

  // Randomly select whether boat will be placed horizontally or vertically
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

  // Clear given ship from all squares in 2D gameboard array
  function clearSquares(ship) {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (board[i][j] === ship.shipName) {
          board[i][j] = null;
        }
      }
    }
  }

  // Place given ship in the 2D gameboard array
  function placeShip(ship) {
    const x = selectStartX();
    const y = selectStartY();
    const direction = selectDirection();

    // If the boat's direction is horizontal and boat would not fall off the board, do:
    if (direction === "horizontal" && y + ship.getLength() - 1 < 10) {
      // Attempt to place the boat horizontally on the board. If a square already contains another boat,
      // remove the current boat from the board and attempt to place the boat somewhere else.
      // Otherwise, add the ship to the square.
      for (let i = 0; i < ship.getLength(); i += 1) {
        if (board[x][y + i]) {
          clearSquares(ship);
          placeShip(ship);
          return;
        }
        board[x][y + i] = ship.shipName;
      }
    }
    // Else if the boat's direction is vertical and boat would not fall off the board, do:
    else if (direction === "vertical" && x + ship.getLength() - 1 < 10) {
      // Attempt to place the boat vertically on the board
      for (let j = 0; j < ship.getLength(); j += 1) {
        if (board[x + j][y]) {
          clearSquares(ship);
          placeShip(ship);
          console.log("overlapped");
          return;
        }
        board[x + j][y] = ship.shipName;
      }
    } else {
      clearSquares(ship);
      placeShip(ship);
    }
  }

  placeShip(carrier);
  placeShip(battleship);
  placeShip(destroyer);
  placeShip(submarine);
  placeShip(patrolBoat);

  return { board };
};

module.exports = Gameboard;
