const book = {
    title: "1984",
    author: "George Orwell",
    isAvailable: true,

    chackOut: function() {
        this.isAvailable = false;
    },
    chechIn: function() {
        this.isAvailable = true;
    }
};

console.log(`Title: ${book.title}`);
console.log(book.isAvailable); //ture
book.chackOut();
console.log(book.isAvailable); //false
book.chechIn();
console.log(book.isAvailable); //ture