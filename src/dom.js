// import { resetGame } from ".";

function componentContainer() {
  const container = document.createElement("div");
  container.classList.add("container");
  return container;
}

function componentHeader() {
  const header = document.createElement("header");
  return header;
}

function componentTitle() {
  const title = document.createElement("h1");
  title.textContent = "BATTLESHIP";
  title.classList.add("title");
  return title;
}

function componentCoordinateSelectionZone() {
  const coordinateSelectionZone = document.createElement("div");
  coordinateSelectionZone.classList.add("coordinate-zone");
  return coordinateSelectionZone;
}

function componentMain() {
  const main = document.createElement("div");
  main.classList.add("main");
  return main;
}

function componentPlayerBoardContainer() {
  const playerBoardContainer = document.createElement("div");
  playerBoardContainer.classList.add("board-container");
  return playerBoardContainer;
}

function componentComputerBoardContainer() {
  const computerBoardContainer = document.createElement("div");
  computerBoardContainer.classList.add("board-container");
  return computerBoardContainer;
}

function componentBoardName(name) {
  const boardName = document.createElement("h2");
  boardName.textContent = name;
  boardName.classList.add("board-name");
  return boardName;
}

function componentPlayerBoard() {
  const playerBoard = document.createElement("div");
  playerBoard.setAttribute("id", "player-board");
  return playerBoard;
}

function componentPlayerGrid() {
  const playerBoard = componentPlayerBoard();
  for (let i = 0; i < 100; i += 1) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("data-id-p", `${i}`);
    square.setAttribute("p-occupied", "false");
    playerBoard.appendChild(square);
  }
  return playerBoard;
}

function componentComputerBoard() {
  const computerBoard = document.createElement("div");
  computerBoard.setAttribute("id", "computer-board");
  return computerBoard;
}

function componentComputerGrid() {
  const computerBoard = componentComputerBoard();
  for (let i = 0; i < 100; i += 1) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("data-id-c", `${i}`);
    square.setAttribute("c-occupied", "false");
    computerBoard.appendChild(square);
  }
  return computerBoard;
}

function componentFooter() {
  const footer = document.createElement("footer");
  footer.textContent = "footer";
  return footer;
}

function componentPlayAgainButton() {
  const button = document.createElement("button");
  button.classList.add("play-again-button");
  button.textContent = "Play Again";
  return button;
}

function componentModal() {
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");
  const modal = document.createElement("section");
  modal.classList.add("modal");
  modalContainer.appendChild(modal);
  const text = document.createElement("p");
  text.classList.add("winner-announcement");
  modal.appendChild(text);
  const button = componentPlayAgainButton();
  modal.appendChild(button);
  return modalContainer;
}

function componentShipInput(ship, shipSquares) {
  const column = document.createElement("div");
  column.classList.add("column");

  const name = document.createElement("p");
  name.classList.add("row");
  name.textContent = ship;

  const boat = document.createElement("p");
  boat.textContent = shipSquares;
  boat.classList.add("boat-length-squares");

  column.appendChild(name);
  column.appendChild(boat);

  const axisSelection = document.createElement("select");
  axisSelection.setAttribute("name", "axis");
  axisSelection.setAttribute("id", "axis");
  column.appendChild(axisSelection);

  const option = document.createElement("option");
  option.setAttribute("value", "");
  option.textContent = "--Select axis--";

  const option2 = document.createElement("option");
  option2.setAttribute("value", `${ship}-horizontal`);
  option2.textContent = "Horizontal";

  const option3 = document.createElement("option");
  option3.setAttribute("value", `${ship}-vertical`);
  option3.textContent = "Vertical";

  axisSelection.appendChild(option);
  axisSelection.appendChild(option2);
  axisSelection.appendChild(option3);

  const inputRow = document.createElement("div");
  inputRow.classList.add("row");
  column.appendChild(inputRow);

  const leftParen = document.createElement("p");
  leftParen.textContent = "(";
  inputRow.appendChild(leftParen);

  const inputX = document.createElement("input");
  inputX.setAttribute("type", "number");
  inputX.setAttribute("id", `${ship}-X`);
  inputX.setAttribute("name", `${ship}-X`);
  inputX.setAttribute("min", "0");
  inputX.setAttribute("max", "9");
  inputRow.appendChild(inputX);

  const comma = document.createElement("p");
  comma.textContent = ",";
  inputRow.appendChild(comma);

  const inputY = document.createElement("input");
  inputY.setAttribute("type", "number");
  inputY.setAttribute("id", `${ship}-Y`);
  inputY.setAttribute("name", `${ship}-Y`);
  inputY.setAttribute("min", "0");
  inputY.setAttribute("max", "9");
  inputRow.appendChild(inputY);

  const rightParen = document.createElement("p");
  rightParen.textContent = ")";
  inputRow.appendChild(rightParen);

  return column;
}

function componentCoordinatesInputForm() {
  const form = document.createElement("form");
  form.classList.add("form");
  const carrierInput = componentShipInput("carrier", "■■■■■");
  const battleshipInput = componentShipInput("battleship", "■■■■");
  const destroyerInput = componentShipInput("destroyer", "■■■");
  const submarineInput = componentShipInput("submarine", "■■■");
  const patrolInput = componentShipInput("patrol-boat", "■■");

  form.appendChild(carrierInput);
  form.appendChild(battleshipInput);
  form.appendChild(destroyerInput);
  form.appendChild(submarineInput);
  form.appendChild(patrolInput);

  const buttons = document.createElement("div");
  form.appendChild(buttons);
  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "submit");
  buttons.appendChild(submit);

  return form;
}

export function init() {
  const container = componentContainer();
  const header = componentHeader();
  const title = componentTitle();
  const coordinateSelectionZone = componentCoordinateSelectionZone();
  const main = componentMain();

  const footer = componentFooter();

  document.body.appendChild(container);
  container.appendChild(header);
  header.appendChild(title);
  container.appendChild(main);
  container.appendChild(coordinateSelectionZone);
  coordinateSelectionZone.appendChild(componentCoordinatesInputForm());
  container.appendChild(footer);
}

export function addGameComponents(
  handleClickableSquare,
  playerGameboard,
  computerGameboard
) {
  const playerBoardContainer = componentPlayerBoardContainer();
  const computerBoardContainer = componentComputerBoardContainer();
  const playerBoard = componentPlayerGrid();
  const computerBoard = componentComputerGrid();

  const main = document.querySelector(".main");
  main.appendChild(playerBoardContainer);
  main.appendChild(computerBoardContainer);
  playerBoardContainer.appendChild(componentBoardName("Your Seas"));
  computerBoardContainer.appendChild(componentBoardName("Enemy Seas"));
  playerBoardContainer.appendChild(playerBoard);
  computerBoardContainer.appendChild(computerBoard);
  main.appendChild(componentModal(playerGameboard, computerGameboard));
  const boardContainer = document.getElementById("computer-board");
  boardContainer.addEventListener("click", handleClickableSquare);
}

export function clearGameComponents() {
  const main = document.querySelector(".main");

  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}
