// Create an array of objects representing people
const peopleArray = [
    { name: "Bhojraj", age: 25 },
    { name: "Niraj", age: 30 },
    { name: "Sirash", age: 22 }
  ];
  
  // Print the initial array
  console.log("Initial array of people:");
  console.log(peopleArray);
  
  // Add a new person using push()
  const newPerson = { name: "Kshitiz", age: 28 };
  peopleArray.push(newPerson);
  
  // Print the array after adding a new person
  console.log("\nArray after adding a new person:");
  console.log(peopleArray);
  
  // Remove the last person using pop()
  const removedPerson = peopleArray.pop();
  
  // Print the array after removing the last person
  console.log("\nArray after removing the last person:");
  console.log(peopleArray);
  
  // Print the details of the removed person
  console.log("\nDetails of the removed person:");
  console.log(removedPerson);
  
