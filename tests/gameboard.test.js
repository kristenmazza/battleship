const Gameboard = require("../src/gameboard");

const playerGameboard = Gameboard();

it("should be array of length 10", () =>
  expect(playerGameboard.board.length).toBe(10));
it("should show that array[0] is length 10", () =>
  expect(playerGameboard.board[0].length).toBe(10));
