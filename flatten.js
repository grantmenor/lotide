const flatten = function(arrOfArrs) {

  let flattened = [];

  for (let i = 0; i < arrOfArrs.length; i++) {
    if (Array.isArray(arrOfArrs[i])) {
      // console.log(arrOfArrs[i] + " is an array")
      for (let y = 0; y < arrOfArrs[i].length; y++) {
        flattened.push(arrOfArrs[i][y]);
      }
    }
    else {
      flattened.push(arrOfArrs[i]);
    }
  }
  return flattened;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]












// const flatten = function(arrOfArrs) {

//   let flattened = [];

//   for (let i = 0; i < arrOfArrs; i++) {

//     if (Array.isArray(arrOfArrs[i])) {

//       console.log(arrOfArrs[i] + "is an array")

//       for (let y = 0; y < arrOfArrs[i].length; y++) {

//         flattened.push(arrOfArrs[i][y]);

//       }

//     } else {

//       flattened.push(arrOfArrs[i]);

//     }

//   }

//   return flattened;
  
// };


// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
