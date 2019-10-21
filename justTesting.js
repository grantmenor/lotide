// function replace(ref) {
//   ref = {}; // this code does _not_ affect the object passed
// }

// function update(ref) {
//   ref.key1 = 'newvalue';  // this code _does_ affect the _contents_ of the object
// }

// var a = { key: 'value' };

// replace(a);  // a still has its original value - it's unmodfied
// console.log(a);

// update(a);   // the _contents_ of 'a' are changed
// console.log(a);

/////////////////////////////////////////////////////////////

// var redcircle = {
//   color: "red",
//   shape: "circle"
// };

// function describe() {
//   console.log(`I'm a ${this.color} ${this.shape}.`);
// };

// // Attaching describe() to redcircle:
// redcircle.describe = describe;

// console.log(redcircle.describe)
// redcircle.describe();
// //=> I'm a red circle.
// console.log(redcircle.color