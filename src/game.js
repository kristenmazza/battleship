/* eslint-disable import/extensions */

import Gameboard from "./gameboard.js";
import Player from "./player.js";

export default function Game() {
  const playerGameboard = Gameboard("p");
  const computerGameboard = Gameboard("c");
  const player = new Player("Friendly Seas", computerGameboard);
  const computer = new Player("Enemy Seas", playerGameboard);

  return { playerGameboard, computerGameboard, player, computer };
}
