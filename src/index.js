/* eslint-disable import/extensions */

import "./style.css";
import Gameboard from "./gameboard.js";
import Ship from "./ship.js";

const playerGameboard = Gameboard();

function component() {
  const element = document.createElement("div");

  // Create ships
  const carrier = Ship(5, "carrier");
  const battleship = Ship(4, "battleship");
  const destroyer = Ship(3, "destroyer");
  const submarine = Ship(3, "submarine");
  const patrolBoat = Ship(2, "patrolBoat");

  playerGameboard.placeShip(carrier);
  playerGameboard.placeShip(battleship);
  playerGameboard.placeShip(destroyer);
  playerGameboard.placeShip(submarine);
  playerGameboard.placeShip(patrolBoat);

  playerGameboard.receiveAttack(1, 2);
  console.table(playerGameboard.board);

  return element;
}

document.body.appendChild(component());
