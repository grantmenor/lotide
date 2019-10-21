const assertArraysEqual = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`)
        return false;
      }
    }
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`)
    return false;
  }
  console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
  return true;
};


const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        return true;
      }
    }
  } else {
    return false;
  }
  return true;
};



const middle = function(array) {
  let middleElements = [];

  
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    // even
    let evenMiddle = [array[(array.length) / 2 - 1], array[(array.length / 2)]];
    return evenMiddle;
  } else {
    // odd
    let oddMiddle = [Math.floor((array.length / 2)) + 1]
    return oddMiddle;
  }
}

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]