// Cell lookup
export const squareIds = [
  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
  ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
  ["30", "31", "32", "33", "34", "35", "36", "37", "38", "39"],
  ["40", "41", "42", "43", "44", "45", "46", "47", "48", "49"],
  ["50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
  ["60", "61", "62", "63", "64", "65", "66", "67", "68", "69"],
  ["70", "71", "72", "73", "74", "75", "76", "77", "78", "79"],
  ["80", "81", "82", "83", "84", "85", "86", "87", "88", "89"],
  ["90", "91", "92", "93", "94", "95", "96", "97", "98", "99"],
];

// Place ships on DOM
export function placeShipDom(
  coord,
  direction,
  length,
  gameboardIdentifier,
  shipName
) {
  let squareId;
  let element;
  if (direction === "horizontal") {
    for (let i = 0; i < length; i += 1) {
      squareId = squareIds[coord[0]][coord[1] + i];
      element = document.querySelector(
        `[data-id-${gameboardIdentifier}='${squareId}']`
      );
      element.classList.add(`${gameboardIdentifier}-boat-marker`);
      element.classList.add(`${gameboardIdentifier}-${shipName}`);
      element.setAttribute(`${gameboardIdentifier}-occupied`, "true");
    }
  } else if (direction === "vertical") {
    for (let j = 0; j < length; j += 1) {
      squareId = squareIds[coord[0] + j][coord[1]];
      element = document.querySelector(
        `[data-id-${gameboardIdentifier}='${squareId}']`
      );
      element.classList.add(`${gameboardIdentifier}-boat-marker`);
      element.classList.add(`${gameboardIdentifier}-${shipName}`);
      element.setAttribute(`${gameboardIdentifier}-occupied`, "true");
    }
  }
}

export function indicateHit(squareId, gameboardIdentifier) {
  const square = document.querySelector(
    `[data-id-${gameboardIdentifier}='${squareId}']`
  );
  square.classList.add("hit");
}

export function indicateMiss(squareId, gameboardIdentifier) {
  const square = document.querySelector(
    `[data-id-${gameboardIdentifier}='${squareId}']`
  );
  square.classList.add("miss");
}

function indicateWinner(gameboardIdentifier) {
  const winner = gameboardIdentifier === "p" ? "Enemy" : "You";
  const winnerText = document.querySelector(".winner-announcement");
  winnerText.textContent = `${winner} won!`;
}

export function displayModal(gameboardIdentifier) {
  const modal = document.querySelector(".modal-container");
  modal.classList.add("target");
  indicateWinner(gameboardIdentifier);
}

export function removeHitIndicator() {
  const hits = document.querySelectorAll(".hit");
  Array.from(hits).forEach((hit) => hit.classList.remove("hit"));
}

export function removeMissIndicator() {
  const misses = document.querySelectorAll(".miss");
  Array.from(misses).forEach((miss) => miss.classList.remove("miss"));
}
