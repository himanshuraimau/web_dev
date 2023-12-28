const fs = require('fs');

const filePath = 'C:\\Users\\asus\\Desktop\\new.txt';
// Read file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  console.log('File content:', data);

  // Making things complicated.
  console.log('Starting expensive operation...');
  const startTime = Date.now();

 
  for (let i = 0; i < 100000000000; i++) {
        //will take time...
  }

  const endTime = Date.now();
  console.log('Expensive operation completed in', endTime - startTime, 'milliseconds');
});

console.log('Reading file...'); // will be printed before because async 