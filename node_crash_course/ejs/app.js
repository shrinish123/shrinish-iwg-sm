const express =require('express');
const app = express();
const path =require('path');

const bodyParser =require('body-parser');

app.use('/public', express.static(path.join(__dirname)))
app.set('view engine','ejs');



app.get('/:userQuery',(req,res)=>{

    res.render('index',{data:{userQuery:req.params.userQuery,
                              array:['book1','book2','book3']
                             }});
})

app.listen(3000);