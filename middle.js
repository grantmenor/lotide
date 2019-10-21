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


module.exports = middle;