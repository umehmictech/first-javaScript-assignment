//EMPTY ARRARY
let library = [];

//adding books to the library
console.log(library);
library.push("the Great Gatsby", "F.Scot Fitzgerald", 1925, "To Kill a Mockingbird", "harper lee", 1960, "1984", "George Orwell", 1949, "Pride and Prejudice", "Jane Austen", 1813);
console.log(library);

//availability of"1984"
console.log(library.includes("1984"));

//removing "pride and prejudice" from the library
let newArrary = library.splice(9, 1);
console.log(library);
console.log(newArrary);

//checking if 
console.log(newArrary.includes("The Great Gatsby"));

//borrow the first book
library.shift()
console.log(library);

//adding a new book to the library
library.unshift("The Catcher in the Rye", "J.D.Salinger", 1951); 
console.log(library);