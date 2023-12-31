/* eslint-disable import/extensions */

import Ship from "../src/ship.js";

const carrier = Ship(5);

it("should get correct ship length", () => expect(carrier.getLength()).toBe(5));
it("should increase hits to ship by 1", () => expect(carrier.hit()).toBe(1));
it("should report that boat is not sunk", () =>
  expect(carrier.isSunk()).toBeFalsy());
