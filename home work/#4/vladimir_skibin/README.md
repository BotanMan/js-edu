# Домашнее задание №4

```js
/**
 * Родитесльский класс "механизм"
 * @constructor
 */
function Mechanism() {
	this._maxSpeed = 0;
	this._enabled = false;
}
Mechanism.prototype.className = function() {
	return this.constructor.name;
}
Mechanism.prototype.isEnabled = function() {
	return this._enabled;
}
Mechanism.prototype.getMaxSpeed = function() {
	return this._maxSpeed;
}

/**
 * Дочерний класс "авто"
 * @constructor
 */
function Auto() {
	Mechanism.apply(this, arguments);
	this._maxSpeed = 100;
	this._comfort = 0;
	this._forsageSpeed = 10;
}
Auto.prototype = Object.create(Mechanism.prototype);
Auto.prototype.constructor = Auto;
Auto.prototype.forsage = function() {
	return this._maxSpeed + this._forsageSpeed;
}
Auto.prototype.comfortable = function() {
	return this._comfort;
}

/**
 * Дочерний класс BMW
 * @constructor
 */
function BMW() {
	Auto.apply(this, arguments);
	this._comfort = 10;
	this._forsageSpeed = 70;

	function goDrift() {
		return 'wroom';
	}

	this.goDrift = goDrift;
}
BMW.prototype = Object.create(Auto.prototype);
BMW.prototype.constructor = BMW;

/**
 * Дочерний класс Mercedes
 * @constructor
 */
function Mercedes() {
	Auto.apply(this, arguments);
	this._comfort = 20;
	this._forsageSpeed = 50;

	function goMusic() {
		return 'uroomdumdum';
	}

	this.goMusic = goMusic;
}
Mercedes.prototype = Object.create(Auto.prototype);
Mercedes.prototype.constructor = Mercedes;

/**
 * Супердочерний класс "концепт"
 * @constructor
 */
function Concept() {
	Mercedes.apply(this,arguments);
	BMW.apply(this, arguments);
	this._maxSpeed = 500;
	this._comfort = 50;

	function goDrift() {
		return 'wroooooooom';
	}

	function goMusic() {
		return 'uroomdumdumdumdumdumdumdum';
	}

	this.goDrift = goDrift;
	this.goMusic = goMusic;
}
Concept.prototype = Object.create(Auto.prototype);
Concept.prototype.constructor = Concept;


/**
 * Проверка
 */

var cars = [
		new BMW(),
		new Mercedes(),
		new Concept()
];

cars.forEach(function(car) {
	console.log('----' + car.className() + '----');
	console.log(car.isEnabled());
	console.log(car.comfortable());
	console.log(car.forsage());
	if (car.goDrift) {
		console.log(car.goDrift());
	}
	if (car.goMusic) {
		console.log(car.goMusic());
	}
});
```
