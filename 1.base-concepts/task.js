"use strict";

// --- Функция решения уравнения ---
function solveEquation(a, b, c) {
	// Инициализируем переменные	
	let arr = [];
	let discriminant = 0;

	// Расчитываем дискриминант
	discriminant = (Math.pow(b, 2) - 4 * a * c);

	// Расчитываем решение(я)
	if (discriminant > 0) {
		arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
		arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
	} else if (discriminant === 0) {
		arr[0] = (-b / (2 * a));
	}

	// Возвращаем результат расчетов
	return arr;
}

// --- Функция расчета суммы по кредиту ---
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	// Инициализируем переменные
	let rate = 0;
	let credit = 0;
	let payMounth = 0;
	let pay = 0;

	// В соответствии с заданием проверяем параметры функции на предмет соответствия их типов "number"
	// Пробуем преоьбразовать типы параметров к "number", но если преобразование не проходит, то функция
	// возвращает "false"
	if (((typeof Number(percent)) !== 'number') ||
		((typeof Number(contribution)) !== 'number') ||
		((typeof Number(amount)) !== 'number') ||
		((typeof Number(countMonths)) !== 'number')) {
		return false;
	}

	// Расчитываем сумму по кредиту
	rate = percent / 100 / 12;
	credit = amount - contribution;
	payMounth = credit * (rate + (rate / (Math.pow((1 + rate), countMonths) - 1)));
	pay = payMounth * countMonths;

	return Number(pay.toFixed(2));
}