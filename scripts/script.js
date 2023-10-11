//for part one
const students = ["Jane", "Joe", "Jack", "Jill", "Jerome"];
const targetName = "ethan"; //change "Jill" to your first name

//My added variables

let numOfStudents;
let studentNamesList = "";
let targetFound = false;

students.push("Ethan", "Tom", "Jerry");

numOfStudents = students.length;

studentNamesList += "<ul>";

students.forEach((element) => {
	if (element.toLowerCase() === targetName.toLowerCase()) {
		studentNamesList += '<li class="target">' + element + " (Target Found)</li>";
		targetFound = true;
	} else {
		studentNamesList += "<li>" + element + "</li>";
	}
});

studentNamesList += "</ul>";

document.getElementById("printedNumStudents").innerHTML = numOfStudents;
document.getElementById("printedStudentNames").innerHTML = studentNamesList;

if (targetFound === true) {
	document.getElementById("targetStudentMessage").innerHTML = "The target student was found";
}

//for parts two and three
const arrayOfNumbers = [4, 0, -4, 13, -2];

//part two
let sumOfNumbers = 0;
let numOfEven = 0;
let numOfOdd = 0;

arrayOfNumbers.forEach((element) => {
	sumOfNumbers += element;
});

arrayOfNumbers.forEach((element) => {
	if (element !== 0) {
		if (element % 2 === 0) {
			numOfEven += 1;
		} else if (element % 2 === 1) {
			numOfOdd += 1;
		}
	}
});

document.getElementById("sumOfNumArray").innerHTML = sumOfNumbers;
document.getElementById("sumOfEven").innerHTML = numOfEven;
document.getElementById("sumOfOdd").innerHTML = numOfOdd;

//part three

let outputMessage = "";
let outputNumberArray = "";

arrayOfNumbers.forEach((element) => {
	outputNumberArray += element + " ";
});

outputMessage += "The array is: ";
outputMessage += outputNumberArray;

arrayOfNumbers.forEach((element) => {
	let outputMessageBuilder = "";

	if (element > 0) {
		outputMessageBuilder += "<p>";
		for (let i = element; i >= 0; i--) {
			outputMessageBuilder += i + " ";
		}
		outputMessageBuilder += "</p>";
		outputMessage += outputMessageBuilder;
	} else if (element < 0) {
		outputMessageBuilder += "<p>";
		for (let i = element; i <= 0; i++) {
			outputMessageBuilder += i + " ";
		}
		outputMessageBuilder += "</p>";
		outputMessage += outputMessageBuilder;
	} else {
		outputMessage += "<p>0 there is no counting to be done</p>";
	}
});

document.getElementById("outputtedMessage").innerHTML = outputMessage;
