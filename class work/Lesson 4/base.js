var a = {'2': '2', '5': 1, '1': 10 };

a.__proto__ = {c: '1'};

Object.create({})


Object.defineProperty(a, 'notEnumerable', {
    configurable: false,
    enumerable: false,
    value: 10
});


for(var key in a){
    console.log(key);
}
console.log(Object.keys(a));
console.log(Object.getOwnPropertyNames(a));


var obj = {
    firstName: 'Igor',
    lastName: 'Boky',
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },

    set fullName(value){
        var strs = value.split(' ');
        this.firstName = strs[0];
        this.lastName = strs[1];
    }
}

obj.fullName = 'Vasya Pupkin'


obj.notConfigurable = '10';
obj.__proto__ = a;


