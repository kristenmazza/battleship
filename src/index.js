/* eslint-disable import/extensions */

import "./style.css";
import Game from "./game.js";
import init, { clearGameComponents, addGameComponents } from "./dom.js";
import { removeHitIndicator, removeMissIndicator } from "./gameboard-dom";

init();

export default function startGame() {
  const { player, computer, playerGameboard, computerGameboard } = Game();
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
    setTimeout(() => {
      computer.makeRandomAttack();
    }, 100);
    console.table(computerGameboard.board);
  };

  addGameComponents(handleClickableSquare, playerGameboard, computerGameboard);

  playerGameboard.placeShipsRandomly(playerGameboard);
  computerGameboard.placeShipsRandomly(computerGameboard);
}

export function resetGame() {
  removeHitIndicator();
  removeMissIndicator();
  clearGameComponents();
  startGame();
}

startGame();
