"use strict";

// --- Функция рассчета макс, мин и среднего значений ---
function getArrayParams(...arr) {
	// Инициализируем переменные
	let max = -Infinity;
	let min = Infinity;
	let avg = 0;

	// Проверка на отсутствие аргументов
	if (arr.length === 0) {
		return {
			min: min,
			max: max,
			avg: avg
		};
	}

	// Проходим по массиву и корректируем max, min, avg
	for (let arg of arr) {
		if (arg > max) {
			max = arg;
		}
		if (arg < min) {
			min = arg;
		}
		avg += arg;
	}

	// Отдельно рассчитываем среднее и форматируем вывод
	avg = avg / arr.length;
	avg = Number(avg.toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

// --- Функция расчета суммы элементов ---
function summElementsWorker(...arr) {
	// Инициализируем переменные	
	let avg = 0;

	// Проверка на отсутствие аргументов
	if (arr.length === 0) {
		return avg;
	}

	// Проходим по массиву и корректируем avg
	for (let arg of arr) {
		avg += arg;
	}

	return avg;
}

// --- Функция расчета разницы макс и мин значений ---
function differenceMaxMinWorker(...arr) {
	// Инициализируем переменные
	let max = -Infinity;
	let min = Infinity;

	// Проверка на отсутствие аргументов
	if (arr.length === 0) {
		return 0;
	}

	// Проходим по массиву и корректируем max, min, avg
	for (let arg of arr) {
		if (arg > max) {
			max = arg;
		}
		if (arg < min) {
			min = arg;
		}
	}

	return (max - min);
}

// --- Функция расчета  ---
function differenceEvenOddWorker(...arr) {
	// Инициализирем переменные
	let sumEvenElement = 0;
	let sumOddElement = 0;

	// Проходим по массиву и корректируем сыммы 
	for (let arg of arr) {
		if (arg % 2 === 0) {
			sumEvenElement += arg;
		} else {
			sumOddElement += arg;
		}
	}

	return (sumEvenElement - sumOddElement);
}

// --- Функция расчета среднего четных элементов ---
function averageEvenElementsWorker(...arr) {
	// Инициализирем переменные
	let sumEvenElement = 0;
	let countEvenElement = 0;

	// Проверка на отсутствие аргументов
	if (arr.length === 0) {
		return sumEvenElement;
	}

	// Проходим по массиву и корректируем сыммы 
	for (let arg of arr) {
		if (arg % 2 === 0) {
			sumEvenElement += arg;
			countEvenElement += 1;
		}
	}

	// Отдельно рассчитываем среднее
	return (sumEvenElement / countEvenElement);
}

// --- Функция работы с описанными стат функциями  ---
function makeWork(arrOfArr, func) {
	// Инициализирем переменные
	let maxWorkerResult = -Infinity;
	let resultFunc = -Infinity;

	// Проходим по массиву и корректируем сыммы 
	for (let arg of arrOfArr) {
		resultFunc = func(...arg);
		if (resultFunc > maxWorkerResult) {
			maxWorkerResult = resultFunc;
		}
	}

	return maxWorkerResult;
}