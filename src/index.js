/* eslint-disable import/extensions */

import "./style.css";
import Game from "./game.js";

function component() {
  const element = document.createElement("div");

  Game();

  return element;
}

document.body.appendChild(component());
