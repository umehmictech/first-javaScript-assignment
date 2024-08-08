//EMPTY ARRARY
let library = [];


let book1 = {titile:"The Great Gatsby", author:"F. Scott Fitzgerald", yearPublishe:1925 , available: true}
let book2 = {titile:"To Kill a Mockingbird", author:"Harper lee", yearPublishe:1950 , available:true}
let book3 = {titile:"1984", author:"George Owell", yearPublishe:1949 , available: true}
let book4 = {titile:"Pride and Prejudice", author:"Jane Austen", yearPublishe:1813 , available: true};

//adding books to the library
library.push(book1, book2, book3, book4)
console.log(library);

//availability of"1984"
console.log(library.includes("1984"));

//removing "pride and prejudice" from the library
library.splice(3, 1);
console.log(library);


// //checking if 
console.log(newArrary.includes("The Great Gatsby"));

// //borrow the first book
library.shift()
console.log(library);

// //adding a new book to the library
// library.unshift("The Catcher in the Rye", "J.D.Salinger", 1951); 
// console.log(library);