const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);





// * * * THIS IS THE SAME THING AS THE ABOVE EXCEPT WITH NOTES * * *

// // Start by declaring the function.
// // allItems: an array of strings that we need to look through
// // itemsToCount: an object specifying what to count
// const countOnly = function(allItems, itemsToCount) {
//   const results = {}; // This is to fix the error. Define a new empty object.
//   for (const item of allItems) { // Add code to loop over all the items in the array and print them to the console.
//     //console.log(item); // This is reassures that I have
//     if (results[item]) {
//       results[item] += 1;
//     } else {
//       results[item] = 1;
//     }
//   }
//   return results;
// }


// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];


// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });


// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);










// * * * IGNORE THIS SECTION * * *

// function elementCounter() {
//   for (i = 0; i < countOnly)
// }

// // countOnly is given an array and an object
// const countOnly = function(inputArray, inputObject) {
//   // loop through inputObject
//   for (const key in inputObject) {
//     console.log(key)
//     console.log(inputObject[key])
//     // check if the key is true
//     if (inputObject[key] === true) {
//       // if it's true, count how many a's there are in the inputArray
//       let element = elementCounter()
//     }
//   }
  
//   //name of object, key gives the value
//   //Add the number of a's into the outputObject if it's more than 0
// }

// countOnly(["a", "a", "b", "c", "d", "e", "a"], {a: true, d: true, b: false, f: true});


