'use strict';

const { g3Status } = require('./g3');

test('g3 task reports complete', () => {
  expect(g3Status()).toBe('complete');
});
