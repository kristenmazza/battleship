/* eslint-disable import/extensions */

import {
  selectX,
  selectY,
  selectDirection,
} from "./random-placement-generator.js";
import Ship from "./ship.js";

export default function Gameboard() {
  const board = new Array(10).fill(null);

  // Create gameboard 2D array
  for (let i = 0; i < 10; i += 1) {
    board[i] = new Array(10).fill(null);
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

  // Ship lookup to retrieve variable from string name
  const shipLookup = {};

  // Place given ship in the 2D gameboard array
  function placeShip(ship) {
    const x = selectX();
    const y = selectY();
    const direction = selectDirection();

    // If the boat's direction is horizontal and fits on the board,
    // attempt to place the boat horizontally. If a square is already occupied,
    // remove the current boat from the board and attempt to place it elsewhere.
    if (direction === "horizontal" && y + ship.getLength() - 1 < 10) {
      for (let i = 0; i < ship.getLength(); i += 1) {
        if (board[x][y + i]) {
          clearSquares(ship);
          placeShip(ship);
          return;
        }
        board[x][y + i] = ship.shipName;
      }
      // Add ship to shipLookup
      shipLookup[ship.shipName] = ship;
    }
    // Else if the boat's direction is vertical and fits on the board,
    // attempt to place the boat vertically.
    else if (direction === "vertical" && x + ship.getLength() - 1 < 10) {
      for (let j = 0; j < ship.getLength(); j += 1) {
        if (board[x + j][y]) {
          clearSquares(ship);
          placeShip(ship);
          return;
        }
        board[x + j][y] = ship.shipName;
      }
      // Add ship to shipLookup
      shipLookup[ship.shipName] = ship;
    }
    // Else if the boat does not fit on the board, randomly place it somewhere else
    else {
      clearSquares(ship);
      placeShip(ship);
    }
  }

  // Place ships randomly on a given gameboard
  function placeShipsRandomly(selectedGameboard) {
    const carrier = Ship(5, "carrier");
    const battleship = Ship(4, "battleship");
    const destroyer = Ship(3, "destroyer");
    const submarine = Ship(3, "submarine");
    const patrolBoat = Ship(2, "patrolBoat");

    selectedGameboard.placeShip(carrier);
    selectedGameboard.placeShip(battleship);
    selectedGameboard.placeShip(destroyer);
    selectedGameboard.placeShip(submarine);
    selectedGameboard.placeShip(patrolBoat);
  }

  // Return boolean based on whether boats have been sunk
  function areAllBoatsSunk() {
    // Filter out any boats that have not been sunk
    const shipsNotSunk = Object.keys(shipLookup).filter(
      (key) => !shipLookup[key].isSunk()
    );

    if (shipsNotSunk.length > 0) {
      return false;
    }
    return true;
  }

  // receiveAttack takes a pair of coordinates, determines
  // whether or not the attack hits a ship, and then sends
  // the 'hit' function to the correct ship
  // or records the coordinates of the missed shot
  const missedShots = [];
  const shots = [];
  const receiveAttack = (x, y) => {
    if (board[x][y]) {
      const shipAttacked = board[x][y];
      board[x][y] = "hit";
      const hitShip = shipLookup[shipAttacked];
      hitShip.hit();
      // hitShip.isSunk();
      // areAllBoatsSunk();
    } else {
      board[x][y] = "miss";
      missedShots.push([x, y]);
    }
    shots.push([x, y]);
  };

  // Check if shot is available to take or if shot has already been made
  function isShotAvailable(x, y) {
    const currentShot = [x, y];
    const previousShots = shots;

    let shotFound;
    if (previousShots) {
      shotFound = previousShots.find(
        ([prevX, prevY]) => prevX === currentShot[0] && prevY === currentShot[1]
      );
    }
    return !shotFound;
  }

  return {
    board,
    placeShip,
    receiveAttack,
    placeShipsRandomly,
    areAllBoatsSunk,
    isShotAvailable,
  };
}
