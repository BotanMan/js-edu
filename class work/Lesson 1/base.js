// var str = "i'd like to...";
// str = str + 'watch tv';
// //substring
//
// console.log(str.slice(1, 2));
// console.log(str.slice(-1));
// str.indexOf('like', 0);
// if(str.charAt(0) === 'I'){ // true
//
// }
//
// str[0] === 'I';
// str.toLowerCase() === 'i\'d like to...'
// str.toUpperCase() === 'I\'D LIKE TO...'
//
// for(var i = 0; i < str.length; ++ i){
//     console.log(str.charAt(0));
// }


//Boolean  --- true/false
// ==, ===
// !=?

// var b = 1;
// var a = '1';
//
// console.log(a == b); // true
// console.log(b == a); // true
// console.log(a === b); // false
//
// console.log(typeof b);
// console.log(typeof a);
//'string'

var a;
var b = null;

console.log(a == b); //false
console.log(b == a); //false
console.log(b === a); //false

if ((a + b) * 2 == 3)

// !==, !=
// >, <
// >=, <=
// <<, >>, ^, |, &
// &&, ||

//'number'
a = 0.1;
b = 0.2;
a = 10e-5;

console.log(((a * 10) + (b * 10)) / 10 == 0.3);
Math.max(1, 3, 5) === 5;
Math.abs(-1) === 1;
Math.pow(2, 10);

//'undefined'
//'boolean'
//'function'
//'object'

var a = {
    str: '123',
    we: 6,
    child: {}
};

a['str'] = '1234';
a['str1'] = '1';
a['str1'] = 1;

var b = {};

for (var i = 0; i < 5; ++i) {
    if (i == 4)
        continue;

    console.log('a')
}

if (1) {
    console.log(123);
}

do {
    console.log('asdasd');
} while (false)

while (false) {
    console.log('asdasd');
}

for (var key in a) {
    if (a.hasOwnProperty(key))
        b[key] = a[key];
}

var a = 1;
//a = 2;

switch (a) {
    case 1:
        break;
    case 2:
        console.log('Hooray');
        break;
}


var a = (1 == 2) ? 'Vasya' : 'Petr';

-1 // true
0 // false
1 // true
"" // false

var a = 0,
    b = a,
    c = b + 2;

if (1 && 2)

//'456'
var a = str || '123';

var a = {};
var b = a;

b['a'] = '123';
console.log(a, b);
console.log(a === b);

// var num = 1;
// var obj = {};
// var noVal = null;
// var arr = [1, '2', {a: 'a'}];
// var und;