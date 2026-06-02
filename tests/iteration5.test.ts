import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { MediaItem, getYearsSinceRelease } from "../src/iteration5";

describe("iteration 5", () => {
  it("calculates years since release using the shared media interface", () => {
    const mediaItem: MediaItem = {
      title: "Example Movie",
      year: 2015,
      genres: ["Drama"],
    };

    assert.equal(getYearsSinceRelease(mediaItem), new Date().getFullYear() - 2015);
  });
});
