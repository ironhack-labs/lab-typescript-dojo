import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { sayHello } from "../src/iteration1";

describe("iteration 1", () => {
  it("returns a greeting with the provided name", () => {
    assert.equal(sayHello("Alice"), "Hello Alice, how are you?");
  });
});
