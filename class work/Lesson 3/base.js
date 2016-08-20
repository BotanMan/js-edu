// //{}
//
// function getCounter() {
//     //{count: undefined}
//     var count = 0;
//
//     //{count: 0, ...}
//     return {
//         inc: function () {
//             count++;
//         },
//         getCount: function () {
//             return count;
//         }
//     }
// }
//
// var a = [];
//
// for (var i = 0; i < 10; ++i) {
//     a.push(    );
// }
//
// a.forEach(function (func) {
//     func();
// });
//
//
// (function () {
//
//
//     var myVar = '';
//
//     window.module = {
//         set: function(){...}
//
//     };
// })();
//
// module.set();


function a(){
    console.log(arguments.forEach)
    console.log([].slice.apply(arguments))
}

a.apply(window, [1,2]);






