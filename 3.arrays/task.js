// --- Функция сравнения массивов ---
function compareArrays(arr1, arr2) {
	// Массивы сравниваются по следующему алгоритму:
	// - проверяем, что массив arr1 является подмножеством массива arr2, 
	//   и массив arr2 является подмножеством массива arr1.
	return (arr1.every((element, index) => element === arr2[index])) 
		&& ((arr2.every((element, index) => element === arr1[index]))); 
}

// --- Функция расчета среднего возраста пользователей ---
function getUsersNamesInAgeRange(users, gender) {


	// Логика расчета следующая:
	// - фильтруем элементы массива по признаку gender;
	// - маппируем (выбираем) только возрастное значение элементов;
	// - суммируем возраст по всем элементам и последнее значение делим
	//   на кол-во элементов 
	//
	// При этом отслеживаем варианты получения на шаге фильтрация \ маппирования
	// пустого массива. Необходимо в этом случае обработать деление на нулевую
	// длину массива - arr.length 
	return users.filter(man => man.gender === gender)
	  			.map(man => man.age)
	  			.reduce((value, item, index, arr) => {
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
}