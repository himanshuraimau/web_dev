const fs = require('fs');

const rnewn = 'C:\\Users\\asus\\Desktop\\new.txt';

const towrite = 'Hello i am new here learning javascript and dsa and new something. \n';

fs.appendFile(rnewn ,towrite,'utf8',(err)=>  {
    if(err){
        console.error('Error in writing:',err);
        return;
    }

    console.log('successfull');

});

console.log('Writing to file');








/*
The fs (file system) module in Node.js provides various methods for interacting with the file system. Here are some commonly used commands from the fs module:

Reading Files:

fs.readFile(path, [options], callback): Asynchronously reads the entire contents of a file.
fs.readFileSync(path, [options]): Synchronously reads the entire contents of a file.
Writing Files:

fs.writeFile(file, data, [options], callback): Asynchronously writes data to a file, replacing the file if it already exists.
fs.writeFileSync(file, data, [options]): Synchronously writes data to a file, replacing the file if it already exists.
fs.appendFile(file, data, [options], callback): Asynchronously appends data to a file. If the file does not exist, it is created.
fs.appendFileSync(file, data, [options]): Synchronously appends data to a file. If the file does not exist, it is created.
Directory Operations:

fs.readdir(path, callback): Asynchronously reads the contents of a directory.
fs.readdirSync(path): Synchronously reads the contents of a directory.
fs.mkdir(path, [options], callback): Asynchronously creates a new directory.
fs.mkdirSync(path, [options]): Synchronously creates a new directory.
fs.rmdir(path, callback): Asynchronously removes a directory.
fs.rmdirSync(path): Synchronously removes a directory.
File and Directory Information:

fs.stat(path, callback): Asynchronously gets the status of a file or directory.
fs.statSync(path): Synchronously gets the status of a file or directory.
File System Events:

fs.watch(filename, [options], [listener]): Watch for changes on a file or directory.
File Renaming and Moving:

fs.rename(oldPath, newPath, callback): Asynchronously renames a file or moves it to a different location.
fs.renameSync(oldPath, newPath): Synchronously renames a file or moves it to a different location.
These are just a few of the methods provided by the fs module. For a complete list and detailed documentation, you can refer to the official Node.js documentation on the fs module: fs - File System.

*/