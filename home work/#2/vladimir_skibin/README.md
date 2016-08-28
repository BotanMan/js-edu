# Домашнее задание

1. [Фабрика функций](#task1)
2. [Клонирование объекта](#task2)
3. [Конвейер вызовов Stage 1](#task3)
4. [Конвейер вызовов Stage 2](#task4)
5. [Конвейер вызовов Stage 3](#task5)
6. [Square](#task6)


#### <a name="task1"></a> 1. Фабрика функций

```js
function factory(todo) {
	switch (todo) {
		case 'sum':
			return function(a, b) {
				return parseInt(a) + parseInt(b);
			}
			break;
		case 'mult':
			return function(a, b) {
				return parseInt(a) * parseInt(b);
			}
			break;
		case 'div':
			return function(a, b) {
				return parseInt(a) / parseInt(b);
			}
			break;
		default:
			return false;
	}
}
```

#### <a name="task2"></a> 2. Клонирование объекта

```js
function copyObject(obj, deep) {
	deep = deep || true;
	var dst = {};
	if (typeof obj == 'object' && obj !== null) {
		for (var key in obj) {
			dst[key] = (deep && typeof obj[key] == 'object' && obj[key] !== null) ? copyObject(obj[key], deep) : obj[key];
		}
	}
	return dst;
}
```

#### <a name="task3"></a> 3. Конвейер вызовов Stage 1

```js
function changeString1(str) {
	return str.toUpperCase();
}
function changeString2(str) {
	return str.toLowerCase();
}
function changeString3(str) {
	return str + "asd";
}
```

#### <a name="task4"></a> 4. Конвейер вызовов Stage 2

```js
var changes = [changeString1, changeString2, changeString3];
function doChanges(str, changes) {
	str = str || "";
	changes = changes || [];
	for (var i = 0; i < changes.length; i++) {
		if (typeof changes[i] == 'function') {
			str = changes[i](str);
		}
	}
	return str;
}
console.log(doChanges("ddd", changes));
```

#### <a name="task5"></a> 5. Конвейер вызовов Stage 3

```js
function doChangesEx(str, changes, n) {
	str = str || "";
	changes = changes || [];
	n = n || changes.length;
	for (var j = Math.floor(Math.random() * changes.length), i = 0; i < n; j = Math.floor(Math.random() * changes.length), i++) {
		if (typeof changes[j] == 'function') {
			str = changes[j](str);
		}
	}
	return str;
}
console.log(doChangesEx("ddd", changes,  Math.floor(Math.random() * 10)));
```

#### <a name="task6"></a> 6. Square

```js
function drawSquare(len, rotate) {
	var spc = '   ', star = ' * ';
	len = len || 10;
	rotate = !!rotate;

	if (rotate) {
		for (var i = 0, j = 1; i < len * 2; i++, (i < len ? j += 2 : j -= 2)) {
			console.log((i % 2 ? ' ' : '\u00A0') + Array((len * 2 - 1 - j) / 2 + 1).join(spc) + Array(j + 1).join(star) + Array((len * 2 - 1 - j) / 2 + 1).join(spc));
		}
	}
	else {
		for (var i = 0; i < len; i++) {
			console.log((i % 2 ? ' ' : '\u00A0') + Array(len + 1).join(star));
		}
	}
}
```
