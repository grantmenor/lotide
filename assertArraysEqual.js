const eqArrays = function(actual, expected) {
  if (actual === expected) {
    // console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    // console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);