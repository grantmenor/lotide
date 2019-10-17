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


const letterPositions = function(sentence) {
  const noSpaces = sentence.split(" ").join("");
  let result = {};
  // logic to update result here
  for (const letters of noSpaces) {
    result[letters] = [];
  }
  for (const indexNum in result) {
    for (let i = 0; i < sentence.length; i++) {
      if (indexNum === sentence[i]) {
        result[indexNum].push(i);
      }
    }
  }
  // logic to update results above
  return result;
}

console.log(letterPositions("lighthouse in the house"))



// * * * THIS IS A SECOND PRACTICE * * *
// const thisTest = function(greeting) {
//   let result = {}
//   for (letters of greeting) {
//     result[letters] = [];
//   }
//   for (const placement in result) {
//     for (let i = 0; i < greeting.length; i++) {
//       if (placement === greeting[i]) {
//         result[placement].push(i);
//       }
//     }
//   }
//   return result
// }

// console.log(thisTest("MississipiMississipi"))