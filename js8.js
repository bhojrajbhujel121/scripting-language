// Create an array of strings
const stringArray = ["apple", "banana", "orange", "grape"];

// Print the initial array
console.log("Initial array of strings:");
console.log(stringArray);

// Remove the first element using shift()
const removedElement = stringArray.shift();

// Print the array after removing the first element
console.log("\nArray after removing the first element:");
console.log(stringArray);

// Add a new string to the beginning using unshift()
const newString = "kiwi";
stringArray.unshift(newString);

// Print the array after adding a new string to the beginning
console.log("\nArray after adding a new string to the beginning:");
console.log(stringArray);

// Print the details of the removed element
console.log("\nDetails of the removed element:");
console.log(removedElement);
