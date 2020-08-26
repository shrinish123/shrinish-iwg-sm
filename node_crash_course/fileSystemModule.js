// Used to deal with all the files

const fs =require('fs');


// create a file

// fs.writeFile('example.txt','this is an example', (err)=>{
//      if(err)
//      {
//          console.log('err');
//      }
//      else{
//          console.log('File created');
//          fs.readFile('example.txt','utf8',(err,file)=>{
//                if(err){
//                    console.log(err);
//                }
//                else{
//                    console.log(file);
//                }
//          })
//      }
// })
// Takes three arguments : filename, text inside file,and  callback fun to handle err


// RENAME method

// fs.rename('example.txt','example2.txt',(err)=>{
//        if(err){
//            console.log(err);
//        }
//        else{
//            console.log('successfully renamed the file');
//        }
// })


// Append Method

// fs.appendFile('example2.txt',' some new details added', (err)=>{
         
//       if(err)
//       {
//           console.log(err);
//       }
//       else{
//           console.log('Data appended successfully');
//       }
// })

// DELETE A file

// fs.unlink('example2.txt',(err)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else{
//         console.log('Successfully deleted file');
//     }
// })



///////////////////////////////////////////////////////////////////

// Working with folders


// fs.mkdir('folder',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Folder created');
//     }


// })





// For deleting the folder use rmdir
// note that this can be only used on amn empty folder
// so always first delete all the files and then the folder








// fs.unlink('./folder/file.js',(err)=>{
//     if(err)
//        console.log(err);
//        else{
//          fs.rmdir('folder',(err)=>{
//             if(err)
//             console.log(err);
//             else
//             console.log('folder deleted successfully')
//       })
//     }
// })









// creating a file inside a folder

// fs.mkdir('folder',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             fs.writeFile('./folder/file.js','this is the first file',(err)=>{
                    
//                 if(err){
//                        console.log(err);
//                 }
//                 else{
//                     console.log('file created succesfully');
//                 }
//             })
//         }


//     })






//  How to delete mutiple files alongwith the folder 


fs.readdir('example',(err,files)=>{
    if(err){
        console.log(err);
    }
    else{

        for(let i=0;i<files.length;i++)
        {
           fs.unlink(`./example/${files[i]}`,(err)=>{
               if(err)
               console.log(err);
               else{
                   console.log('file deleted succesfully');
               }
           })
        }

    }
})

// So the above peice of code deletes all files 
// so asfter the execution of th code u can delete the directory by 
// rmdir function





