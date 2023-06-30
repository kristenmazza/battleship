/* eslint-disable import/extensions */

import Gameboard from "./gameboard.js";
import Player from "./player.js";

export default function Game() {
  const playerGameboard = Gameboard();
  const computerGameboard = Gameboard();
  const player = new Player("Friendly Seas", computerGameboard);
  //   const computer = new Player("Enemy Seas", playerGameboard);

  playerGameboard.placeShipsRandomly(playerGameboard, "p");
  computerGameboard.placeShipsRandomly(computerGameboard, "c");

  player.makeRandomAttack();
  console.table(computerGameboard.board);
  console.table(playerGameboard.board);
}
