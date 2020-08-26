const EventEmitter = require('events');

// Note than events is an inbuild module in node js

const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1,num2)=>{
    console.log(num1+num2);
})
  // Note that here tutorial is just a string that is passed in here
  // and not a file 

eventEmitter.emit('tutorial',1,2);

// Here the syntax is weird but thats how you pass the arguments


// We can also create a custom class which uses the properties of the event emitter object

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let pedro = new Person('pedro');

// Now as pedro is a person object so we can  say  it also has properties of the 
// event emitter object

pedro.on('name',()=>{

    console.log('My name is ' + pedro.name);
})

pedro.emit('name');