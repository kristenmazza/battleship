/* eslint-disable import/extensions */

import Gameboard from "../src/gameboard.js";
import Ship from "../src/ship.js";
import {
  selectX,
  selectY,
  selectDirection,
} from "../src/random-placement-generator.js";
import Player from "../src/player.js";
import placeShipDom from "../src/gameboard-dom.js";

describe("gameboard grid", () => {
  // Assemble
  const playerGameboard = Gameboard();

  // Act
  const grid = playerGameboard.board;

  // Assert
  it("should be array of length 10", () => expect(grid.length).toBe(10));
  it("should show that array[0] is length 10", () =>
    expect(grid[0].length).toBe(10));
});

// Mock random placement functions
jest.mock("../src/random-placement-generator.js");
selectX.mockReturnValue(2).mockReturnValueOnce(5).mockReturnValueOnce(2);
selectY.mockReturnValue(3).mockReturnValueOnce(5).mockReturnValueOnce(3);
selectDirection
  .mockReturnValue("horizontal")
  .mockReturnValueOnce("vertical")
  .mockReturnValueOnce("horizontal");

// Mock DOM-related function
jest.mock("../src/gameboard-dom.js");
placeShipDom.mockReturnValue("");

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
  });
});

describe("attack ship", () => {
  // Assemble
  const gameboard = Gameboard();
  const patrolBoat = Ship(2, "patrolBoat");
  gameboard.placeShip(patrolBoat);

  it("should hit ship", () => {
    // Act
    gameboard.receiveAttack(5, 5);

    // Assert
    expect(patrolBoat.getHits()).toBe(1);
  });

  it("should sink ship", () => {
    // Act (final patrol boat attack)
    gameboard.receiveAttack(6, 5);

    // Assert
    expect(patrolBoat.isSunk()).toBeTruthy();
  });

  it("should show all ships are sunk", () => {
    // Assemble
    const submarine = Ship(3, "submarine");
    gameboard.placeShip(submarine);
    gameboard.receiveAttack(2, 3);
    gameboard.receiveAttack(2, 4);

    // Act (final submarine attack)
    gameboard.receiveAttack(2, 5);

    // Assert
    expect(gameboard.areAllBoatsSunk()).toBeTruthy();
  });
});

describe("target an available square", () => {
  const computerGameboard = Gameboard();
  const player = new Player("Player", computerGameboard);

  it("should show if shot is available to take", () => {
    // Assemble
    const patrolBoat = Ship(2, "patrolBoat");
    computerGameboard.placeShip(patrolBoat);

    // Act (mock function attacks 2,3)
    player.makeRandomAttack();

    // Assert
    expect(computerGameboard.isShotAvailable(2, 3)).toBeFalsy();
    expect(computerGameboard.isShotAvailable(9, 9)).toBeTruthy();
  });

  // it("should call receiveAttack", () => {
  //   // Assemble
  //   const mockFunction = jest.fn();
  //   computerGameboard.receiveAttack = mockFunction;

  //   // Act
  //   console.table(computerGameboard.board);

  //   // player.makeRandomAttack();

  //   // Assert (receiveAttack mock function called)
  //   console.table(computerGameboard.board);
  //   expect(mockFunction).toHaveBeenCalled();
  // });
});
