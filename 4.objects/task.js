"use strict";

// --- Функция - конструктор объекта "студент"" ---
function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
	return this; 
}

// --- Метод, добавляющий учебный предмет ---
Student.prototype.setSubject = function (subjectName) {
  	this.subject = subjectName;
}

// --- Метод, добавляющий оценки ---
Student.prototype.addMarks = function (...marks) {
	if (this.hasOwnProperty("marks")) {
	 	this.marks.push(...marks);
	}	
}

// --- Методы расчета средней оценки ---
Student.prototype.getAverage = function () {	
	if (this.hasOwnProperty("marks")) {
		return this.marks.reduce((value, item, index, arr) => {
	  		if (arr.length === 0) { 
	  			return 0; 
	  		} else {
				if (index === arr.length - 1) { 
					return (value += item) / arr.length; 
				} else { 
					return value += item; 
				}
			}		
		}, 0);
	} else {
		return 0;
	}
}

// --- Метод формированния объекта "отчисленный студент" ---
Student.prototype.exclude = function (reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;  
}
