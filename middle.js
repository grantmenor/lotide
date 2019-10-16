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

const middle = function(array) {
  let middle = array / 2
  if (middle[1] | middle[1, 2]) {
    return [];
  }
  if (middle[1, 2, 3] | middle[1, 2, 3, 4, 5]) {
    return Math.ceil([array])
  }
  if (middle[1, 2, 3, 4] | middle[1, 2, 3, 4, 5, 6]) {
    return [array - 1] && [array + 1]
  }
};

// assertArraysEqual(eqArrays([123], [123]), true);
// assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

// assertArraysEqual(eqArrays(["hello"], ["hello"]), true);
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);