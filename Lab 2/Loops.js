'use strict';

function range(start, end) {
  const nums = [];
  for (let i = start; i <= end; i++) {
    nums.push(i);
  }
  return nums;
}

function rangeOdd(start, end) {
  const nums = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      nums.push(i);
    }
  }
  return nums;
}