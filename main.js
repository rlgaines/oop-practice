var Book = function (options){
	this.title = options.title;
	this.genre = options.genre;
	this.author = options.author;
	this.read = false;
	this.startDate = "";
	this.endDate= "";
};

var BookList = function	(){
	this.numberRead = 0;
	this.booksMarked = 0;
	this.nextBook = "";
	this.curBook = "";
	this.lastBook = "";
	this.bookArr = [];
};


var myBooks = new BookList();
var book1 = new Book({
	title: 'The Tao of Pooh',
	genre: 'Philosophy',
	author: 'Benjamin Hoff'
});

var book2 = Book({
	title: 'History of God',
	genre: 'Philosophy',
	author: 'Karen Armstrong'
});

var book3 = new Book({
	title: 'Unteathered Soul',
	genre: 'Metaphysical',
	author: 'Michael Singer'
});

var book4 = new Book({
	title: 'Holes',
	genre: 'fiction',
	author: 'Louis Sachars'
});


BookList.prototype.addBook = function(book){
	this.bookArr.push(book);
	if (this.currentBook === ''){
		this.currentBook = book;
	} else if(this.nextBook === '') {
		this.nextBook = book;
	}
};

BookList.prototype.finishCurrentBook = function(){
	this.numberRead +=1;
	this.numNotRead -= 1;
	this.currentBook.read = true;
	this.currentBook.endDate = new Date(Date.now());
	this.lastBook = this.currentBook;
	this.currentBook = this.nextBook;
	var index = this.bookArr.indexOf(currentBook)
	this.nextBook = this.bookArr[index + 1] || '';
}	

BookList.prototype.renderToDom = function(){
	for(var i = 0; i < this.bookArr.length; i++){
		$('body').append(this.bookArr[i].title)
	}
};


myBooks.addBook(book1);
myBooks.addBook(book2);
myBooks.addBook(book3);
myBooks.addBook(book4);

console.log(myBooks)