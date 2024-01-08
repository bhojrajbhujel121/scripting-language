// Create an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use forEach to print all the even numbers in the array
console.log("Even numbers in the array:");
numbers.forEach(function(number) {
  if (number % 2 === 0) {
    console.log(number);
  }
});
