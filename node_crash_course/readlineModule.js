const readline = require('readline');

const rl =readline.createInterface({input:process.stdin,
                          output:process.stdout})

let num1 =Math.floor((Math.random()*10)+1);
let num2 =Math.floor((Math.random()*10)+1);

let answer =num1 +num2;

rl.question(`What is ${num1} +${num2} ? `,
(input)=>{
    if(input.trim() != num1 +num2 )
    {
        console.log('You are wrong the answer is '+(num1+num2))
        rl.close();  

        // We need to close otherwise it kerps running
    }
    else {
        console.log('You are correct though');
        rl.close();  

    }
})

// Not that readline is an instance of the event emitter class
// so we can use that property too here

rl.on('close',()=>{
    console.log('You are correct');
})
