const assert = require('assert');
const groupBy = require('./src/index.js');

const result1 = {
  0: [3, 6],
  1: [1, 4, 1, 1],
  2: [2, 2, 5]
};

const result2 = {
  1: [1, 1, 1],
  2: [2, 2],
  3: [3],
  4: [4],
  5: [5],
  6: [6]
};

it('should return grouped elements according to the passed function', () => {
    assert.deepEqual(groupBy([1,2,3,2,4,1,5,1,6]), result1);
});

it('should return grouped elements by default', () => {
    assert.deepEqual(groupBy([1,2,3,2,4,1,5,1,6]), result2);
});
