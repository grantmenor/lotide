const head = function(number) {
  if (number.length === 0) {
    return undefined;
  }
  return number[0];
}

module.exports = head;