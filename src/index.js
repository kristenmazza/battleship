/* eslint-disable import/extensions */

import "./style.css";
import Gameboard from "./gameboard.js";
import Ship from "./ship.js";

const playerGameboard = Gameboard();
const enemyGameboard = Gameboard();

function createPlayerGameboard() {
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
}

function createEnemyGameboard() {
  const carrier = Ship(5, "carrier");
  const battleship = Ship(4, "battleship");
  const destroyer = Ship(3, "destroyer");
  const submarine = Ship(3, "submarine");
  const patrolBoat = Ship(2, "patrolBoat");

  enemyGameboard.placeShip(carrier);
  enemyGameboard.placeShip(battleship);
  enemyGameboard.placeShip(destroyer);
  enemyGameboard.placeShip(submarine);
  enemyGameboard.placeShip(patrolBoat);
}

function component() {
  const element = document.createElement("div");

  createPlayerGameboard();
  createEnemyGameboard();

  return element;
}

document.body.appendChild(component());
