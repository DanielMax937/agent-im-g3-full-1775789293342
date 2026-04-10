const fs = require('fs');
const os = require('os');
const path = require('path');
const { readG3Marker, validateG3Marker, EXPECTED_BODY } = require('./g3_marker');

describe('g3 kanban marker', () => {
  const repoRoot = path.join(__dirname, '..');

  it('reads expected marker content', () => {
    expect(readG3Marker(repoRoot)).toBe(EXPECTED_BODY);
  });

  it('validates marker file', () => {
    expect(validateG3Marker(repoRoot)).toBe(true);
  });

  it('validateG3Marker returns false when marker is missing', () => {
    const empty = fs.mkdtempSync(path.join(os.tmpdir(), 'g3-src-test-'));
    expect(validateG3Marker(empty)).toBe(false);
  });
});
