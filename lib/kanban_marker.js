"use strict";

const fs = require("fs");
const path = require("path");

const MARKER_BASENAME = ".kanban-e2e-1775789343127-uagmgx.txt";
const EXPECTED_ID = "1775789343127-uagmgx";

function getMarkerPath(rootDir = process.cwd()) {
  return path.join(rootDir, MARKER_BASENAME);
}

function readKanbanMarkerId(rootDir) {
  const markerPath = getMarkerPath(rootDir);
  return fs.readFileSync(markerPath, "utf8").trim();
}

function isValidG3Marker(rootDir) {
  try {
    return readKanbanMarkerId(rootDir) === EXPECTED_ID;
  } catch (err) {
    if (err && err.code === "ENOENT") return false;
    throw err;
  }
}

module.exports = {
  MARKER_BASENAME,
  EXPECTED_ID,
  getMarkerPath,
  readKanbanMarkerId,
  isValidG3Marker,
};
