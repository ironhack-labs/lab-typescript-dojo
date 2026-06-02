import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { calcArrayAverage, calcMultiplication, isEven } from "../src/iteration2";

describe("iteration 2", () => {
  it("multiplies two numbers", () => {
    assert.equal(calcMultiplication(4, 5), 20);
  });

  it("checks whether a number is even", () => {
    assert.equal(isEven(6), true);
    assert.equal(isEven(7), false);
  });

  it("calculates the average of a number array", () => {
    assert.equal(calcArrayAverage([2, 4, 6, 8]), 5);
  });

  it("returns a message for an empty array", () => {
    assert.equal(calcArrayAverage([]), "Please provide an array with at least one element");
  });
});
