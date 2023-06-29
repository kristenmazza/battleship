/* eslint-disable import/extensions */

import { selectX, selectY } from "./random-placement-generator.js";

export default class Player {
  constructor(name, enemyGameboard) {
    this.name = name;
    this.enemyGameboard = enemyGameboard;
  }

  makeRandomAttack() {
    const x = selectX();
    const y = selectY();

    if (this.enemyGameboard.isShotAvailable(x, y))
      this.enemyGameboard.receiveAttack(x, y);
  }
}
