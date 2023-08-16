// --- Класс "Будильник" ---
class AlarmClock {
	// Поля класса
	alarmCollection;
	intervalId;

	// Конструктор класса
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	// Метод добавляет новый звонок в коллекцию будильника
	addClock(addTime, funcCallback) {
		// Проверка наличия входных параметров
		if (addTime == null || funcCallback == null) {
			throw new Error("Отсутствуют обязательные аргументы");
		}

		// Проверека на повторность время звонка
		if (this.alarmCollection.find(item => item.time === addTime)) {
			console.warn("Уже присутствует звонок на это же время");	
		}

		// Формируем новый объект "Звонок" для добавления
		const alarm = {time: addTime, callback: funcCallback, canCall: true};
		// Добавляем звонок в коллекцию
		this.alarmCollection.push(alarm);
	}

	// Метод удаляет звонок из коллекции будильника 
	removeClock(time) {
		// Ищем все звонки, кот. НЕ соответствуют искомому времени
		const newAlarmCollection = this.alarmCollection.filter(function (item) {
			return item.time != time;
		});
		// Переформировываем коллекцию звонков, но уже без удаленных
		this.alarmCollection = newAlarmCollection;
	}

	// Метод возвращает текущее время в формате "HH:MM"
	getCurrentFormattedTime() {
		// Читаем текущее время
		const timeNow = new Date();
		// Читаем текущее значение часа + переводим значение в строку
		let h = "" + timeNow.getHours();
		// Читаем текущее значение минут + переводим значение в строку
		let m = "" + timeNow.getMinutes();
		// Дорабатываем значения часа и минут до 2-х символов
		return h.padStart(2, "0") + ":" + m.padStart(2, "0");
	}

	// Метод запускает будильник
	start() {
		// Проверка установленного интервала будильника
		if (this.intervalId != null) {
			return;
		}

		this.intervalId = setInterval(() => {  
			for (let i = 0; i < this.alarmCollection.length; i++) {
				if ((this.alarmCollection[i].time === this.getCurrentFormattedTime()) && (this.alarmCollection[i].canCall)) {
					this.alarmCollection[i].canCall = false;
					this.alarmCollection[i].callback();
				}
			}
		}, 1000);
	}

	// Метод останавливет будильникc
	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	// Метод сброса будильника в целом по всем звонкам
	resetAllCalls() {
		this.alarmCollection.forEach((item) => item.canCall = true);
	}

	// Метод удаляет все звонки
	clearAlarms() {
		// Останавливаем интервал будильника
		this.stop();
		// Удаляем все звонки
		this.alarmCollection = [];
	}
}