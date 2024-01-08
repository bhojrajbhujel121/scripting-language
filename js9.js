// Create an array of strings
const stringArray = ["apple", "banana", "orange", "grape"];

// Use map() to create a new array with capitalized strings
const capitalizedArray = stringArray.map(function(str) {
  return str.toUpperCase();
});

// Print the new array with capitalized strings
console.log("Original array of strings:");
console.log(stringArray);

console.log("\nArray with capitalized strings:");
console.log(capitalizedArray);
