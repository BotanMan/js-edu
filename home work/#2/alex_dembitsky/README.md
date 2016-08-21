# Домашнее задание №2

####  Фабрика функций.

```js
function myMath(arg) {
	if (arg == 'sum' || arg == 'mult' || arg == 'div') {
		if (arg == 'sum') {
			return function(a,b) {
				return (!isNaN(a) && !isNaN(b)) ? a+b : 'Wrong number!';
			}
		} else if (arg == 'mult') {
			return function(a,b) {
				return (!isNaN(a) && !isNaN(b)) ? a*b : 'Wrong number!';
			}
		} else if (arg == 'div') {
			return function(a,b) {
				return (!isNaN(a) && !isNaN(b)) ? a/b : 'Wrong number!';
			}
		}
	} else {
		return('Wrong argument!');
	}
}
```

####  Клонирование объекта.

```js
var myObj = {
	a: 0, 
	b: 1, 
	c: 2, 
	d: {
		a0: 'a',
		a1: 'b',
		a2: 'c',
		a3: {
			b0: 'x',
			b1: 'y',
			b2: 'z',
		}
	}
}

function cObj(myObj) {
	var myObj2 = {};
	for (var key in myObj) {
		if (typeof myObj[key] == 'object' && myObj[key] !== null) {
			myObj2[key] = cObj(myObj[key]);
		} else {
			myObj2[key] = myObj[key];
		}
	}
	return myObj2;
}
```

####  Конвейер вызовов Stage 1.

```js
var str = "Положить все описанные в предыдущем заднии функции в массив и реализовать функцию (контроллер), которая будет вызывать последовательно ранее описанные функции с целью обработать входящую строку и вернуть получившийся результат.";
function strToLower(str) {
	return (str.length > 3) ? str.toLowerCase() : 'Too short string, We need more characters :-)';
}
function strToUpper(str) {
	return (str.length > 3) ? str.toUpperCase() : 'Too short string, We need more characters :-)';
}
function strMore(str) {
	return (str.length > 3) ? str + '...' : 'Too short string, We need more characters :-)';
}
```

####  Конвейер вызовов Stage 2.

```js
var fArr = [strToLower, strToUpper, strMore];
function fLine(fArr, str) {
	for (var f = 0; f < fArr.length; f++) {
		str = fArr[f](str);
	}
	return str;
}
```

#### Конвейер вызовов Stage 3*.

```js
function mRand(mArr, str, n) {
	for (var i = 0; i < n; i++) {
		str = fArr[Math.floor(Math.random() * fArr.length)](str);
	}
	return str;
}
```

#### Square *.

```js
function mySquare(width, turn) {
	if (!isNaN(width)) {
		var w = '';
		var r = '';
		for (var w_i = width; w_i >= 0; w_i--) {
			for (var h_i = 1; h_i <= width; h_i++) {
				w += ' * ';
			}
			w += "\n"; 
		}
		if (typeof turn != 'undefined') {
			for (var i_h = 1; i_h <= width; i_h++) {
				var sep1 = '';
				if (isNaN(i_w)) {
					i_w = 0;
				}
				for (var s = 0; s <= (width - i_w); s++) {
					sep1 += '  ';
				}
				r += sep1;
				for (var i_w = 0; i_w < i_h; i_w++) {
					r += ' *  ';
				}
				r += "\n"; 
			}
			for (var i_h = width; i_h >= 0; i_h--) {
				if (i_h == width) {
					continue;
				}
				var sep2 = '';
				for (var s = 0; s <= (width - i_h) + 1; s++) {
					sep2 += '  ';
				}
				r += sep2;
				for (var i_w = 0; i_w < i_h; i_w++) {
					r += ' *  ';
				}
				r += "\n"; 
			}
		}
		console.log(w);
		console.log(r);
	}
}
```
