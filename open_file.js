
//Open a file using event in node js:

var fs = require('fs');
var rs = fs.createReadStream('./student_1.json');
//Objects in Node.js can fire events, like the readStream object fires events 
//when opening and closing a file

rs.on('open', function(){
	console.log('The file is open');
});
