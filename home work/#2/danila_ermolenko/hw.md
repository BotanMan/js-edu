## Задание 2

### Код 1

```
let sum;

let math = function (mathTypeFunction) {
  switch (mathTypeFunction) {
    case 'sum':
      return function (a, b) { return a + b; }
      break;
    case 'mult':
      return function (a, b) { return a * b; }
      break;
    case 'div':
      return function (a, b) { return a / b; }
      break;
    default:
      return console.log('Error! Call sum, mult or div');
  }
}

console.log(math('mult')(20, 10));  // 200
console.log(math('sum')(20, 10));  // 30
console.log(math('div')(20, 10)); // 2
console.log(math('test')(20, 10)); // Error! Call sum, mult or div
```

### Код 2

```
let objectOld = {
  name: 'Jonh',
  lastName: 'Smith',
  age: '25'
};

let objectNew = {};

let cloneObject = function() {
  for (var key in objectOld) {
    if (objectOld.hasOwnProperty(key)) {
      objectNew[key] = objectOld[key];
    }
  }
}();

objectNew.name = 'Danila';

console.log(objectOld); // Object {name: "Jonh", lastName: "Smith", age: "25"}
console.log(objectNew); // Object {name: "Danila", lastName: "Smith", age: "25"}
```


### Код 3

```
let string = `Hello Danila`;

function handleString (stage) {
  switch (stage) {
    case 1:
      return (string = string.replace(/e/gi, '')
                             .replace(/a/gi, '')
                             .replace(/i/gi, '')
                             .replace(/o/gi, '')
                             .toLowerCase());
      break;
    case 2:
      return (string = string.replace(/\s/gi, ''));
      break;
    case 3:
      let test = '';
      for (var i = 0; i < string.length; i++) {
        if (i < string.length) {
          test += string[i] + '-';
        }
      }
      return test.slice(0, test.length - 1);
      break;
    default:
      return string;
  }
};

console.log(handleString());  // Hello Danila
console.log(handleString(1)); // hll dnl
console.log(handleString(2)); // hlldnl
console.log(handleString(3)); // h-l-l-d-n-l
```

### Код 4

```
let string = `Hello Danila`;

let handleString = (stage) => {
  switch (stage) {
    case 1:
      return (string = string.replace(/e/gi, '')
                             .replace(/a/gi, '')
                             .replace(/i/gi, '')
                             .replace(/o/gi, '')
                             .toLowerCase());
      break;
    case 2:
      return (string = string.replace(/\s/gi, ''));
      break;
    case 3:
      let test = '';
      for (var i = 0; i < string.length; i++) {
        if (i < string.length) {
          test += string[i] + '-';
        }
      }
      return test.slice(0, test.length - 1);
      break;
    default:
      return string;
  }
};

let stage0 = handleString();
let stage1 = handleString(1);
let stage2 = handleString(2);
let stage3 = handleString(3);

let arrayOfFunctionsString = [stage0, stage1, stage2, stage3];

for (var i = 0; i < arrayOfFunctionsString.length; i++) {
  console.log(arrayOfFunctionsString[i]);
}

// Hello Danila
// hll dnl
// hlldnl
// h-l-l-d-n-l
```


### Код 5

```
let string = `Hello Danila`;

let handleString = (stage) => {
  switch (stage) {
    case 1:
      return (string = string.replace(/e/gi, '')
                             .replace(/a/gi, '')
                             .replace(/i/gi, '')
                             .replace(/o/gi, '')
                             .toLowerCase());
      break;
    case 2:
      return (string = string.replace(/\s/gi, ''));
      break;
    case 3:
      let test = '';
      for (var i = 0; i < string.length; i++) {
        if (i < string.length) {
          test += string[i] + '-';
        }
      }
      return test.slice(0, test.length - 1);
      break;
    default:
      return string;
  }
};

let stage0 = handleString();
let stage1 = handleString(1);
let stage2 = handleString(2);
let stage3 = handleString(3);

let arrayOfFunctionsString = [stage0, stage1, stage2, stage3];
let random = Math.floor((Math.random() * 4));

let randomN;
let cyclesNumber = 10;

for (var i = 0; i < cyclesNumber; i++) {
  if (random == 0) {
    console.log(arrayOfFunctionsString[0]+ '\n' +
                arrayOfFunctionsString[1]+ '\n' +
                arrayOfFunctionsString[2]+ '\n' +
                arrayOfFunctionsString[3]);
  } else if (random == 1) {
    console.log(arrayOfFunctionsString[1]+ '\n' +
                arrayOfFunctionsString[2]+ '\n' +
                arrayOfFunctionsString[3]+ '\n' +
                arrayOfFunctionsString[1]);
  } else if (random == 2) {
    console.log(arrayOfFunctionsString[2]+ '\n' +
                arrayOfFunctionsString[3]+ '\n' +
                arrayOfFunctionsString[0]+ '\n' +
                arrayOfFunctionsString[1]);
  } else if (random == 3) {
    console.log(arrayOfFunctionsString[3]+ '\n' +
                arrayOfFunctionsString[0]+ '\n' +
                arrayOfFunctionsString[1]+ '\n' +
                arrayOfFunctionsString[2]);
  }
}
```


### Код 6

```
const CHAR = '•';

let row = '';

let drawDots = (lengthSquare) => {
  for (var i = 0; i < lengthSquare; i++) {
    row += CHAR + ' ';
  }
  row += '\n';
}
let drawSquare = (lengthSquare) => {
  if (lengthSquare <= 44) {
    for (var i = 0; i < lengthSquare; i++) {
      drawDots(lengthSquare);
    }
    console.log(row);
  } else {
    console.log('Error! Maximum length is 44');
  }
}

drawSquare(3);

// • • •
// • • •
// • • •
```
