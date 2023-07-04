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

function componentDraggableZone() {
  const draggableZone = document.createElement("div");
  draggableZone.classList.add("draggable-zone");
  return draggableZone;
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
  // button.addEventListener("click", () => {
  //   resetGame();
  // });
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

export function init() {
  const container = componentContainer();
  const header = componentHeader();
  const title = componentTitle();
  const draggableZone = componentDraggableZone();
  const main = componentMain();

  const footer = componentFooter();

  document.body.appendChild(container);
  container.appendChild(header);
  header.appendChild(title);
  container.appendChild(draggableZone);
  container.appendChild(main);
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
