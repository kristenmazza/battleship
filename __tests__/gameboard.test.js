/* eslint-disable import/extensions */

import Gameboard from "../src/gameboard.js";
import Ship from "../src/ship.js";
// import {
//   selectStartX,
//   selectStartY,
//   selectDirection,
// } from "../src/random-placement-generator.js";

const playerGameboard = Gameboard();

it("should be array of length 10", () =>
  expect(playerGameboard.board.length).toBe(10));
it("should show that array[0] is length 10", () =>
  expect(playerGameboard.board[0].length).toBe(10));

jest.mock("../src/random-placement-generator.js", () => ({
  selectStartX: jest.fn(() => 2),
  selectStartY: jest.fn(() => 3),
  selectDirection: jest.fn(() => "horizontal"),
}));

describe("gameboard place ships", () => {
  it("should place ship", () => {
    // Assemble (what you have to put together to make your call)
    const gameboard = Gameboard();
    const carrier = Ship(5, "carrier");

    // Act (what you're testing)
    gameboard.placeShip(carrier);

    // Assert (what you're expecting)
    expect(gameboard.board[2][3]).toBe("carrier");
    expect(gameboard.board[2][4]).toBe("carrier");
    expect(gameboard.board[2][5]).toBe("carrier");
    expect(gameboard.board[2][6]).toBe("carrier");
    expect(gameboard.board[2][7]).toBe("carrier");

    console.table(gameboard.board);
  });
});
