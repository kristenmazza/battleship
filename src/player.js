/* eslint-disable import/extensions */

import { squareIds } from "./gameboard-dom.js";
import { selectX, selectY } from "./random-placement-generator.js";

export default class Player {
  constructor(name, enemyGameboard) {
    this.name = name;
    this.enemyGameboard = enemyGameboard;
  }

  makeRandomAttack() {
    const x = selectX();
    const y = selectY();
    const squareId = squareIds[x][y];
    this.makeAttack(x, y, squareId);
  }

  makeAttack(x, y, squareId) {
    if (this.enemyGameboard.isShotAvailable(x, y)) {
      this.enemyGameboard.receiveAttack(x, y, squareId);
    }
  }
}
