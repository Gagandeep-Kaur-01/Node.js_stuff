//Using fs.readFile

const fs = require('fs');
fs.readFile('student.json', (err, data) => {
	if(err)
	throw err;
	var student = JSON.parse(data);
	console.log(student);
});
//(err,data) => {}: callback function,
//that is executed once the file is completely read

console.log('Data read successfully');
