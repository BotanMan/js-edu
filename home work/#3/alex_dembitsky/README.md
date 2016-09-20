```js
var someObj = {
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

function cObj(someObj) {
	var obj = someObj;
	var _this = this;
		
	_this.deepClone = function(dest, src) {
		dest = dest || {};
		src = src || {};
		for (var key in src) {
			if (typeof src[key] == 'object' && src[key] !== null) {
				dest[key] = _this.deepClone({}, src[key]);
			} else {
				dest[key] = src[key];
			}
		}
		return dest;
	}
		
	_this.keys = function(obj) {
		var newKeys = [];
		
		(function k(obj) {
			for (var key in obj) {
				newKeys.push(key);
				if (typeof obj[key] == 'object' && obj[key] !== null) {
					k(obj[key]);
				}
			}
		})(obj);
		
		return newKeys;
	}
		
	_this.values = function(obj) {
		var newVals = [];
		
		(function v(obj) {
			for (var key in obj) {
				if (typeof obj[key] == 'object' && obj[key] !== null) {
					newVals.push(_this.deepClone({}, obj[key]));
					v(obj[key]);
				} else {
					newVals.push(obj[key]);
				}
			}
		})(obj);
		
		return newVals;
	}
	
	_this.forEach = function(obj, handler) {
		var newObj = this.deepClone({}, obj);
		
		(function v(obj) {
			for (var key in obj) {
				if (typeof obj[key] == 'object' && obj[key] !== null) {
					v(obj[key]);
				} else {
					handler(obj[key], key);
				}
			}
		})(newObj, handler);
		
		return newObj;
	}
	
	_this.filter = function(obj, handler) {
		var newObj = this.deepClone({}, obj);
		var resObj = {};
		
		(function v(obj) {
			for (var key in obj) {
				if (typeof obj[key] == 'object' && obj[key] !== null) {
					v(obj[key]);
				} else {
					if (handler(obj[key], key)) {
						resObj[key] = obj[key];
					}
				}
			}
		})(newObj, handler);
		
		return resObj;
	}
		
	_this.copy = function(dest, src, arr) {
		arr = arr || _this.keys(src);
		dest = dest || {};
		src = src || {};
		for (var key in src) {
			if (~arr.indexOf(key)) {
				if (typeof src[key] == 'object' && src[key] !== null) {
					dest[key] = _this.copy({}, src[key], arr);
				} else {
					dest[key] = src[key];
				}
			}
		}
		return dest;
	}
	
}
var o = new cObj(someObj);
```
