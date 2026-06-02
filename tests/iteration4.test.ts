import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { Book, getYearsSinceRelease } from "../src/iteration4";

describe("iteration 4", () => {
  it("calculates years since release for a media item", () => {
    const book: Book = {
      title: "TypeScript Handbook",
      year: 2020,
      genres: ["Programming"],
      author: "TypeScript Team",
    };

    assert.equal(getYearsSinceRelease(book), new Date().getFullYear() - 2020);
  });
});
