// Using variables to represent a book

/*var bookTitle;
var bookAuthor;

bookTitle = "The Hobbit";
bookAuthor = "J. R. R. Tolkien";

console.log(bookTitle + " by " + bookAuthor);*/



/* Further Adventures
 *
 * 1) Declare variables for a second book
 *    and assign them values.
 *
 * 2) Add code to log its details to the console.
 *
 * 3) Repeat steps 1 and 2 for a third book.
 *
 * 4) Consider the code needed for 10 books.
 *    For 100 books.
 *
 */
var books = [
    {title:"To Kill a Mockingbird", author: "Harper Lee"},
    {title:"1984",author: "George Orwell"},
    {title:"The Great Gatsby" ,author: "F. Scott Fitzgerald"},
    {title:"Pride and Prejudice" ,author: "Jane Austen"},
    {title:"The Catcher in the Rye",author:"J.D. Salinger"},
    {title:"The Lord of the Rings", author:"J.R.R. Tolkien"},
    {title:"Jane Eyre", author: "Charlotte Brontë"},
    {title:"Catch-22", author:"Joseph Heller"},
    {title:"Moby-Dick", author: "Herman Melville"},
    {title:"The Grapes of Wrath",author: "John Steinbeck"}
];
function logBooks(bookArray) {
    bookArray.forEach(function(book) {
        console.log(book.title + " by " + book.author);
    });
}
logBooks(books);
