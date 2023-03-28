/*
Nested Loops
When we have a loop running inside another loop, we call that a nested loop. One use for a nested for loop is to compare the elements in two arrays.
 For each round of the outer for loop, the inner for loop will run completely.

Let’s look at an example of a nested for loop:

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}
Let’s think about what’s happening in the nested loop in our example. For each element in the outer loop array, myArray, 
the inner loop will run in its entirety comparing the current element from the outer array, myArray[i], to each element in the inner array, yourArray[j]. When it finds a match, 
it prints a string to the console.

Now it’s your turn to write a nested loop!

Note: To exit out of an infinite loop in an exercise, refresh the page - then fix the code for your loop(s).

*/

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}
// Define the arrays we want to compare
const bobsFollowers = ["Alice", "Bob", "Charlie", "Dave"];
const tinasFollowers = ["Charlie", "Dave", "Eve"];

// Create an empty array to hold the mutual followers
const mutualFollowers = [];

// Loop through the first array (bobsFollowers)
for (let i = 0; i < bobsFollowers.length; i++) {

  // Loop through the second array (tinasFollowers)
  for (let j = 0; j < tinasFollowers.length; j++) {

    // Check if the current element of bobsFollowers is the same as the current element of tinasFollowers
    if (bobsFollowers[i] === tinasFollowers[j]) {

      // If they are the same, push the element into the mutualFollowers array
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

// Log the mutualFollowers array to the console
console.log(mutualFollowers);
