const sum = (num1,num2) => num1+num2;


const PI =3.14;

class mathObject {
    constructor() {

        console.log('object created');
    }
}

// module.exports =sum;  // to expose the  sum function


// Now to retuen multiple things we can add properties to the exports prop

// module.exports.sum =sum;
// module.exports.PI = PI;
// module.exports.mathObject = mathObject;

 // NOTE : The above method is kinda repititive so what we can do is 
 // create the object as shown

 module.exports ={sum:sum,
                  PI:PI,
                  mathObject:mathObject
                }
/// This is the best way to handle the module exporting




