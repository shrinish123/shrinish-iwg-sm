const tutorial = require('./tutorial')

console.log(tutorial);         // Returns a function called sum

//   console.log(tutorial(1,1));  // Returns the output

// Now to access you need  treat the imported file as an object
// as we had created in the tutorial file

console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.mathObject());



