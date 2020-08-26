// This is actually used to serve the static files in a easier way than we used before

const express =require('express');

// Hence it returns a function and not any object or variable

const app=express();


// The function returns a object which we store it in by convention in app


app.get('/',(req,res)=>{
    res.send('Hello World using express');
});

app.listen(3000);

// Working with express get requests

app.get('/example',(req,res)=>{
    res.send('Hello World on the example page');
});


// Route parameters

app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);

    console.log(req.query);  // This creates the object which has information of 
                             // queries of url


    res.send(req.params.name +" " +req.params.age);
    
});




