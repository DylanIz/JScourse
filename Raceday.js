// Import the readline module from the Node.js standard library
import { createInterface } from 'readline';

// Create a readline interface that reads from the standard input and writes to the standard output
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the runner for their age, and call the callback function with the entered age
rl.question("What is your age? ", function(age) {
  // Set the registeredEarly variable to false (change this value to test the different code paths)
  const registeredEarly = false;

  // Generate a random race number between 0 and 999
  let raceNumber = Math.floor(Math.random() * 1000);

  // Check if the runner is over 18 and registered early
  if (age > 18 && registeredEarly) {
    // If so, add 1000 to their race number and log a message telling them their race number and start time
    raceNumber += 1000;
    console.log(`Your race number is ${raceNumber}. You will race at 9:30am.`);
  }
  // Check if the runner is over 18 and did not register early
  else if (age > 18 && !registeredEarly) {
    // If so, log a message telling them their race number and start time
    console.log(`Your race number is ${raceNumber}. You will race at 11:00am.`);
  }
  // Check if the runner is exactly 18 years old
  else if (age === 18) {
    // If so, log a message telling them their race number and start time
    console.log(`Your race number is ${raceNumber}. You will race at 12:30pm.`);
  }
  // Check if the runner is under 18
  else if (age < 18) {
    // If so, add 1000 to their race number and log a message telling them their race number and start time
    raceNumber += 1000;
    console.log(`Your race number is ${raceNumber}. You will race at 12:30pm.`);
  }
  // If the runner's age is not recognized, log a message asking them to see the registration desk
  else {
    console.log('Please see the registration desk.');
  }

  // Close the readline interface
  rl.close();
});
