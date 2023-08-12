"use strict";

// --- Функция парсинга числа ---
function parseCount(value) {
	const parseResult = parseFloat(value);

	if (isNaN(parseResult)) {
		throw new Error("Невалидное значение");
	} else {
		return parseResult;
	}	
}	

// --- Функция проверки числа ---
function validateCount(value) {
	try {
		return parseCount(value);
	}
	catch (error) {
		return error;
	}
}

// --- Класс "Треугольник" ---
class Triangle {
	// Поля класса
	sideA;
	sideB;
	sideC;
	
	// Конструктор класса
	constructor (sideA, sideB, sideC) {
		// Проверка возможности существования треугольника с заданными параметрами
		if (((sideA + sideB) < sideC) || ((sideA + sideC) < sideB)|| ((sideB + sideC) < sideA)) {
			throw new Error("Треугольник с такими сторонами не существует");
		}

		// Формируем поля
		this.sideA = sideA;
		this.sideB = sideB;
		this.sideC = sideC;
	}

	// Метод чтения значения параметра "perimeter"
	get perimeter() {
		return this.sideA + this.sideB + this.sideC;
	}

	// Метод чтения значения параметра "area"
	get area() {
		const semiPeriod = this.perimeter / 2;
		return Number(((semiPeriod * (semiPeriod - this.sideA) * (semiPeriod - this.sideB) * (semiPeriod - this.sideC)) ** 0.5).toFixed(3));
	}
}

// --- Функция работы с объектами класса Треугольник ---
function getTriangle(sideA, sideB, sideC) {
	try {
		return new Triangle(sideA, sideB, sideC);
	}
	catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";				
			}
		}
	}
}