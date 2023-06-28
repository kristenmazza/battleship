const Ship = require("../src/ship");

const carrier = Ship(5);

it("should get correct length", () => expect(carrier.getLength()).toBe(5));
it("should increase hits by 1", () => expect(carrier.hit()).toBe(1));
it("should report that boat is not sunk", () =>
  expect(carrier.isSunk()).toBeFalsy());
