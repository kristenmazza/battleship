/* eslint-disable import/extensions */

import "./style.css";
import Game from "./game.js";
import init from "./dom.js";

const { player, playerGameboard, computerGameboard } = Game();
// eq:
// const game = Game();
// const player = game.player;
// const computer = game.computer;
// const playerGameboard = game.playerGameboard;
// const computerGameboard = game.computerGameboard;

const handleClickableSquare = (e) => {
  if (!e.target.classList.contains("square")) {
    return;
  }

  const squareId = e.target.dataset.idC;
  const x = Math.floor(squareId / 10);
  const y = squareId % 10;

  player.makeAttack(x, y, squareId);
  console.table(computerGameboard.board);
};

init(handleClickableSquare);

playerGameboard.placeShipsRandomly(playerGameboard);
computerGameboard.placeShipsRandomly(computerGameboard);
