/*
More Array Methods
There are many more array methods than just .push() and .pop(). You can read about these array methods on the Docs entry for JavaScript Arrays.

.pop() and .push() mutate the array on which they’re called. However, 
there are times that we don’t want to mutate the original array and we can use non-mutating array methods. 
Be sure to check the Docs to understand the behavior of the method you are using.

Some arrays methods that are available to JavaScript developers include:
 .join(), .slice(), .splice(), .shift(), .unshift(), and .concat() amongst many others. 
 Using these built-in methods makes it easier to do some common tasks when working with arrays.
*/

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList);

// array.slice(start, end);
console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);