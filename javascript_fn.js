class Student {
	constructor(name, age, enrolled, score) {
		this.name = name;
		this.age = age;
		this.enrolled = enrolled;
		this.score = score;
	}
}

const students = [
	new Student('A', 29, true, 45),
	new Student('B', 28, false, 80),
	new Student('C', 30, true, 90),
	new Student('D', 40, false, 66),
	new Student('E', 18, true, 88),
];
 
//const result = students.find((student) => student.score === 90);
//const result = students.filter((student) => student.enrolled === true);
//const result = students.map(student => student.name);
//const result = students.some((student) => student.score < 50);
//const result = students.map(student => student.score);
//const result = students.reduce((prev, curr) => prev + curr.score);

const result = students
	.map(student => student.score)
	.sort((a, b) => a - b)
	.join(' ');

console.log(result);