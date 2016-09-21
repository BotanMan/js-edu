/**
 * Created by Pouin on 19.08.2016.
 */

var operation = prompt("Какую операцию произвести?");

var math = function mathOperation (operation) {

    if (operation == 'sum') {
    var result = function sr( a, b)
        {
            return (a + b);
        }
    }
       else if (operation == 'mult')
    {
       var result = function ma( a, b)
        {
            return a * b;
        }
    }
     else if (operation == 'div'){
     var result = function dr( a, b)
        {
            return a / b;
        }
    }
    else {alert ('не знаю такую операцию. попробуй снова');}
    alert (result());
};
var func = math(operation);
console.log(func(12, 3));

