const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  else {
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        }
      }
    }
    return true;
  }
};


const assertObjectsEqual = function(array1, array2) {
  const inspect = require('util').inspect;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        console.log(`🛑🛑🛑 Assertion Failed: ${inspect(array1)} !== ${inspect(array2)}`)
        return false;
      }
    }
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(array1)} !== ${inspect(array2)}`)
    return false;
  }
  console.log(`✅✅✅ Assertion Passed: ${inspect(array1)} === ${inspect(array2)}`)
  return true;
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(assertObjectsEqual(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(assertObjectsEqual(ab, abc), false); // => false