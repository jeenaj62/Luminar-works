class BookLibrary {
    getBookDetails(){
     let  books={
        "alchemist": { book_name: "alchemist", author: "rowling", price: 200, no_of_copies: 100, sold: 10 },
        "alchemist": { book_name: "alchemist", author: "rowling", price: 200, no_of_copies: 100, sold: 10 },
        "alchemist": { book_name: "alchemist", author: "rowling", price: 200, no_of_copies: 100, sold: 10 },
        }
        return books
    }
    findBook(book_name){
        let item=this.getBookDetails();
       if(book_name in item)  
       {
           console.log(book_name);
       }
       else{
           console.log("The book is not in the library");
       }
    }
}
    var item=new BookLibrary();
    item.findBook("heal");

