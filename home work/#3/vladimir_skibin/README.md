# Домашнее задание №3

1. [Модуль работы с объектами](#task1)
2. [Модуль телевизора](#task2)

#### <a name="task1"></a> Модуль работы с объектами

```js
/**
 * Модуль работы с объектами
 */
var hwModule = (function() {
	var $module = {};

	/**
	 * Скопировать глубоким копированием src в dest
	 * @param {object} dest Результирующий объект
	 * @param {object} src Объект-источник
	 * @return {object}
	 */
	$module.deepClone = function f(dest, src) {
		dest = dest || {};
		src = src || {};
		if (typeof src == 'object' && src !== null) {
			for (var key in src) {
				if (src.hasOwnProperty(key)) {
					dest[key] = (typeof src[key] == 'object' && src[key] !== null) ? f({}, src[key]) : src[key];
				}
			}
		}
		return dest;
	};

	/**
	 * Получить все ключи объекта obj
	 * @param {object} obj Объект-источник
	 * @return {Array}
	 */
	$module.keys = function(obj) {
		var result = [];
		obj = obj || {};
		if (typeof obj == 'object' && obj !== null) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					result.push(key);
				}
			}
		}
		return result;
	};

	/**
	 * Получить все значения объекта obj
	 * @param {object} obj Объект-источник
	 * @return {Array}
	 */
	$module.values = function(obj) {
		var result = [];
		obj = obj || {};
		if (typeof obj == 'object' && obj !== null) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					result.push($module.deepClone({}, obj[key]));
				}
			}
		}
		return result;
	};

	/**
	 * Проитерировать все значения объекта obj функцией iterateFunc.
	 * В результате вернется массив значений, полученных в результате функции-итерации
	 * @param {object} obj Объект-источник
	 * @param {function(value, key)} iterateFunc Функция-итератор, принимает значения value и key
	 * @return {Array}
	 */
	$module.forEach = function(obj, iterateFunc) {
		var result = [];
		obj = obj || {};
		iterateFunc = (typeof iterateFunc === 'function') ? iterateFunc : function() {};
		if (typeof obj == 'object' && obj !== null) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					result.push(iterateFunc($module.deepClone({}, obj[key]), key));
				}
			}
		}
		return result;
	};

	/**
	 * Проитерировать все значения объекта obj функцией filterFunc.
	 * В результате вернется массив значений, полученных в результате функции-итерации
	 * Если функция-фильтратор вернет true - то итерируемый объект будет включен в результат, иначе - не будет
	 * @param {object} obj Объект-источник
	 * @param {function(value, key)} filterFunc Функция-фильратор, принимает значения value и key
	 * @return {object}
	 */
	$module.filter = function(obj, filterFunc) {
		var result = {};
		obj = obj || {};
		filterFunc = (typeof filterFunc === 'function') ? filterFunc : function() {return true;};
		if (typeof obj == 'object' && obj !== null) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					var cloned = $module.deepClone({}, obj[key]);
					if (filterFunc(cloned, key)) {
						result[key] = cloned;
					}
				}
			}
		}
		return result;
	};

	/**
	 * Скопировать все свойства, перечесленные в [args] из объекта src в dest
	 * @param {object} dest Результирующий объект
	 * @param {object} src Объект-источник
	 * @param {Array} [args] Свойства для копирования
	 * @return {object}
	 */
	$module.copy = function(dest, src, args) {
		dest = dest || {};
		src = src || {};
		args = args || $module.keys(src);
		if (typeof src == 'object' && src !== null) {
			for (var key in src) {
				if (src.hasOwnProperty(key) && ~args.indexOf(key)) {
					dest[key] = $module.deepClone({}, src[key]);
				}
			}
		}
		return dest;
	};

	return $module;
})();
```

#### <a name="task2"></a> Модуль телевизора

```js
/**
 * Модуль работы телевизора
 */
var tvModule = (function() {
	var $module = {};
	var $channels = [];
	var $history = [];
	var $currentChannel;

	$module.ON = 1;
	$module.OFF = 0;
	var $state = $module.OFF;

	var localeMonths = [
		"января",
		"февраля",
		"марта",
		"апреля",
		"мая",
		"июня",
		"июля",
		"августа",
		"сентября",
		"октября",
		"ноября",
		"декабря"
	];

	function getLocaleDate(timestamp) {
		var date = new Date(timestamp);
		return date.getDate() + ' ' + localeMonths[date.getMonth()] + ' ' + date.getFullYear()
			+ ', ' + date.getHours() + ':' + date.getMinutes();
	}

	function addToHistory(text) {
		$history.push({
			timestamp: Date.now(),
			action: text
		});
	}

	function clearHistory() {
		$history = [];
	}

	/**
	 * Обновление списка каналов
	 * @param {Array} channels Массив каналов.
	 * Обязан содержать объекты вида {название канала, частота, популярность}
	 */
	$module.init = function(channels) {
		channels = channels || [];
		for (var key in channels) {
			channels[key] = hwModule.copy({
				channelName: "",
				frequency: 1000,
				popularity: 1
			}, channels[key], [
				"channelName", "frequency", "popularity"
			]);
		}
		$channels = channels;
	}

	/**
	 * Получить список каналов, отсортированный по популяности
	 * @returns {Array}
	 */
	$module.getPopulars = function() {
		return $channels.sort(function(a, b) {
			return a.popularity - b.popularity;
		});
	}

	/**
	 * Получить текущий канал или false если такого нет или телевизов выключен
	 * @returns {object|boolean}
	 */
	$module.getCurrentChannel = function() {
		return !!$currentChannel && $state === $module.OFF ? $currentChannel : false;
	}

	/**
	 * Включить телевизор
	 */
	$module.turnOn = function() {
		if ($channels.length) {
			if (!$currentChannel && !!$channels[0]) {
				$currentChannel = $channels[0];
			}
			if ($currentChannel) {
				$state = $module.ON;
				addToHistory('Включение');
			}
		}
	}

	/**
	 * Выключить телевизор
	 */
	$module.turnOff = function() {
		$state = $module.OFF;
		clearHistory();
	}

	/**
	 * Получить историю работы телевизора
	 * @returns {Array}
	 */
	$module.getHistory = function() {
		return $history.map(function(val) {
			return getLocaleDate(val.timestamp) + " - " + val.action;
		});
	}

	/**
	 * Переключить текущий канал по названию или частоте, если такого нет - вернуть false
	 * @param {Number|string} newChanel frequency|channelName
	 * @returns {object|boolean}
	 */
	$module.switchToChannel = function(newChanel) {
		if (!!newChanel) {
			var searchChannel = $channels.filter(function(channel) {
				return channel.frequency === newChanel || channel.channelName === newChanel;
			});
			if (searchChannel.length) {
				$currentChannel = searchChannel[0];
				addToHistory('Переключение на канал "' + $currentChannel.channelName + '"');
				return $currentChannel;
			}
		}
		return false;
	}

	/**
	 * Получить текущее состояние телевизора
	 * @returns {object|string} Текущий канал, если включен и выбран канал.
	 */
	$module.getStatus = function() {
		switch ($state) {
			case $module.ON:
				return {
					currentChannel: $module.getCurrentChannel(),
				};
				break;
			case $module.OFF:
				return 'Телевизор выключен';
				break;
			default:
				return 'Телевизор поломался';
		}
	}

	return $module;
})();
```
