/*To read the JSON data from the file, used Node.js fs module. 
There are two functions available in this modules that we can use to read files from the file system: readFile and readFileSync */


//Using fs.readFileSync: 

const fs = require('fs'); //load fs module
let data = fs.readFileSync('student.json'); 
//using readFileSync function and pass the relative path to the file that we want to read.

let student = JSON.parse(data);
/*To read the file in its JSON format, not the raw hex data, 
JSON.parse function comes into play. 
This function handles parsing the raw data, converts it to ASCII text,
and parses the actual JSON data in to a JavaScript object.
*/

console.log(student); //print student object on the console to get the require
