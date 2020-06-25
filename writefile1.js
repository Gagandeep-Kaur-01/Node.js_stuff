//using fs.writeFileSync

const fs = require('fs');
let student = {
	name : 'Sonakshi',
	age: 23,
	gender: 'Male',
	department: 'English',
	car: 'Honda'
};
let data = JSON.stringify(student);
fs.writeFileSync('student_1.json',data);
