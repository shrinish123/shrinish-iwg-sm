const joi =require('joi');
const arrayString = ['banana','bacon','cheese'];

const arrayObjects =[{example:'example1'},{example:'example2'}]

const userInput = { personalInfo:{
                           streetAddress : '123456',
                           city:'fghbvdfg',
                           state:'fgvf0'
                        },
                    preferences:arrayString
                 }

   
                 
 const personalInfoSchema = joi.object().keys({

     streetAddress :joi.string().trim().required(),
     city:joi.string().trim().required(),
     state:joi.string().trim().length(2).required(),
 })                 

  
 const preferencesSchema = joi.array().items(joi.string())

 const schema = joi.object().keys({
     personalInfo:personalInfoSchema,
     preferences:preferencesSchema
 })

 joi.validate(userInput,schema,(err,result)=>{

        if(err){
            console.log(err);
        }
        else
        console.log(result);
 })