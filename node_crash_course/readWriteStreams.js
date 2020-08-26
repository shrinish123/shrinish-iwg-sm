const fs =require('fs');

 const readStream =fs.createReadStream('./example.txt.gz','utf8');
 const writeStream =fs.createWriteStream('./example2.txt');



//  readStream.on('data',(data)=>{
//      writeStream.write(data);
//  })


 // always try to use read stream than read file as large files 
 // can alsio be handled with the read streams rpoperty
 // whereas cannot be handled by read file property


 // the reason this happens is because read sreams uses chucks of small data to read everytime 
 // whereas does not read the whole file togrther
 // therefore it does not cause any buffer overflow 
 // but there is buffer overflow in read file as it tries to read the whole file at a time



 

 // Piping in streams


// a shorthand version for the above thing
 

// Piping and chaining

const zlib =require('zlib');

// transform stream

const gzip = zlib.createGzip();
const unzip = zlib.createGunzip();



readStream.pipe(unzip).pipe(writeStream);


