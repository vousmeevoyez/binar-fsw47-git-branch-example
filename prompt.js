// // Import the readline module
// const readline = require("readline");

// // Create an interface for reading input from the console
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // Function to ask a question and return a promise
// const askQuestion = (question) => {
//   return new Promise((resolve) => {
//     rl.question(question, (answer) => {
//       resolve(answer);
//     });
//   });
// };

// // Main function to run the prompt
// const main = async () => {
//   try {
//     // Ask for the user's name
//     const name = await askQuestion("What is your name? ");

//     // Ask for the user's age
//     const age = await askQuestion("How old are you? ");

//     // Print a message based on the input
//     console.log(`Hello, ${name}! You are ${age} years old.`);

//     // Close the readline interface
//     rl.close();
//   } catch (err) {
//     console.error("Error:", err);
//     rl.close();
//   }
// };

// // Run the main function
// main();

import readlineSync from "readline-sync";

const age = readlineSync.question("How old are you? ");

if (age > 18) {
  console.log("Your age can be next");
} else {
  console.log("Sorry, you are a child");
}
