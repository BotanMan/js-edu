/**
 * Created by Pouin on 19.08.2016.
 */

var str = prompt("Что изменить?");
var result;
function editStringOne(str)
{
   // if (typeof (str) === 'string') { // если стринг спокойной переводится в число, то
    result = +str * +str;
    return result;
}

function editStringTwo(str, text)
{
    result = str + ' ' + text;
    return alert(result);
}

function editStringThree(str)
{
    result = str.slice(0, 5) + str.substr(5,10).toUpperCase() + str.slice(10);
    return alert(result);
}
function compare() {
    if (str.length <= 3)
    {
        editStringOne(str);

    }
    else if (str.length > 3 && str.length <= 10)
    {
        editStringTwo(str, '+ значение undefined означает «переменная не присвоена»');
    }
    else
    {
        editStringThree(str);
    }
}
compare();