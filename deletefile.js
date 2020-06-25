const fs = require('fs');
fs.unlink('student.json', (err) => {
	if (err) 
	throw err;
	console.log('successfully deleted file');
;})
