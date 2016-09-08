function TrigFunctions() {

    //this
    this.sin = Math.sin;
    this.cos = Math.cos;
}


function MyMath() {
    TrigFunctions.call(this)
    SimpleFunctions.call(this)
}

var bookTypes = {
    'science': 'science',
    'magazine': 'magazine',
    'story': 'story',
    'justABook': 'justABook'
};

function Book(book) {
    console.log(book);

    var a = '123';

    this.type = bookTypes.justABook;
    this.author = book.author;
    this.pagesCount = book.pagesCount;
}

Book.prototype.getDescription = function () {
    return this.author + ' ' +
        this.pagesCount + ' ' +
        this.type;
};

function ScienceBook(book) {
    Book.apply(this, arguments);

    this.type = bookTypes.science;
}




console.log(Book.prototype);
console.log(ScienceBook.prototype);

ScienceBook.prototype = Object.create(Book.prototype)
ScienceBook.prototype.constructor = ScienceBook;
ScienceBook.prototype.super = Book.prototype;

ScienceBook.prototype.getDescription = function(){
    var a = this.super.construct();
    ///asdasd
};


var myBook = new ScienceBook({author: '123', pagesCount: 10});
//myBook.type

console.log(myBook instanceof ScienceBook);
console.log(myBook instanceof Array);