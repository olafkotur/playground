const _ = require('lodash');

const previous = [
  'Hello 1',
  'Hello 2',
  'Hello 3',
];

const current = [
  'Hello 4',
  'Hello 3',
];

const removed = _.difference(previous, current);
const added = _.difference(current, previous);

console.log('Removed', removed);
console.log('Added', added);