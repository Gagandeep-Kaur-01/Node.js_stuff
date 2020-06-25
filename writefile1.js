//using fs.writeFileSync

const fs = require('fs');
let student = {
	name : 'Sonakshi',
	age: 23,
	gender: 'Male',
	department: 'English',
	car: 'Honda'
};
//let data = JSON.stringify(student);
// The data is in the form of one line of string,
// which is difficult to read

let data = JSON.stringify(student, null, 2);

fs.writeFileSync('student_1.json',data);
