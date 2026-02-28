const test = require('node:test');
const assert = require('node:assert');
const { sum } = require('./index.js');

test('sum function', () => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(-1, -1), -2);
  assert.strictEqual(sum(0, 0), 0);
});