// Create an array of objects representing books
const booksArray = [
    { title: "Book 1", author: "Author 1" },
    { title: "Book 2", author: "Author 2" },
    { title: "Book 3", author: "Author 3" },
    { title: "Book 4", author: "Author 4" }
  ];
  
  // Print the initial array of books
  console.log("Initial array of books:");
  console.log(booksArray);
  
  // Use splice() to remove the second book (index 1)
  const removedBooks = booksArray.splice(1, 1);
  
  // Print the modified array after removing the second book
  console.log("\nArray after removing the second book:");
  console.log(booksArray);
  
  // Print details of the removed book
  console.log("\nDetails of the removed book:");
  console.log(removedBooks);
  