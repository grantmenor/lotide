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


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(item);
    results.push(callback(item));
    results.push('---');
  }
  return results;
}

const results1 = map(words, word => word[0]);

assertArraysEqual(console.log(results1));