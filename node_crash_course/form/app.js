const express =require('express');
const app = express();
const path =require('path');
const joi =require('joi');

const bodyParser =require('body-parser');

app.use('/public', express.static(path.join(__dirname)))
app.use(bodyParser.urlencoded({extended:false}));0

app.get('/',(req,res)=>{

    res.sendFile(path.join(__dirname,'index.html'));
})

app.post('/',(req,res)=>{

    console.log(req.body);

    // validation of user input

    const schema = joi.object().keys({
        email : joi.string.trim().email().required(),
        password:joi.string().min(5).max(64).required()
    })
    
    joi.validate(req.body,schema,(err,result)=>{
         
        if(err){
            console.log(err);
            res.send('An error has occured');
        }
            console.log(result);
            res.send('successfully posted data');
        

    })
    // database work here

   
})









app.listen(3000);