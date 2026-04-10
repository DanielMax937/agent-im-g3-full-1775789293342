"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");

const {
  EXPECTED_ID,
  getMarkerPath,
  readKanbanMarkerId,
  isValidG3Marker,
} = require("./kanban_marker");

describe("g3 kanban marker", () => {
  const repoRoot = path.resolve(__dirname, "..");

  test("marker file exists at repo root", () => {
    expect(fs.existsSync(getMarkerPath(repoRoot))).toBe(true);
  });

  test("marker content matches expected task id", () => {
    expect(readKanbanMarkerId(repoRoot)).toBe(EXPECTED_ID);
  });

  test("isValidG3Marker returns true for this repo", () => {
    expect(isValidG3Marker(repoRoot)).toBe(true);
  });

  test("isValidG3Marker returns false when marker is missing", () => {
    const empty = fs.mkdtempSync(path.join(os.tmpdir(), "g3-test-"));
    expect(isValidG3Marker(empty)).toBe(false);
  });
});
