const {
  MARKER_BASENAME,
  EXPECTED_ID,
  readKanbanMarkerId,
  isValidG3Marker,
} = require('../lib/kanban_marker');

function readG3Marker(rootDir = process.cwd()) {
  return readKanbanMarkerId(rootDir);
}

function validateG3Marker(rootDir = process.cwd()) {
  return isValidG3Marker(rootDir);
}

module.exports = {
  readG3Marker,
  validateG3Marker,
  MARKER_FILENAME: MARKER_BASENAME,
  EXPECTED_BODY: EXPECTED_ID,
};
