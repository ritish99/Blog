const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data', (chunk) => {
//     console.log('---------------New Chunk---------------');
//     console.log(chunk); //can use tostring here or utf8
//     writeStream.write('\nNew Chunk\n');
//     writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream);