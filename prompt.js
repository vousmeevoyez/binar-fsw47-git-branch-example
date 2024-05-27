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

const readlineSync = require("readline-sync");

// Wait for user's response.
const userName = readlineSync.question("May I have your name? ");
console.log("Hi " + userName + "!");

// Handle the secret text (e.g. password).
const favFood = readlineSync.question("What is your favorite food? ", {
  hideEchoBack: true, // The typed text on screen is hidden by `*` (default).
});
console.log("Oh, " + userName + " loves " + favFood + "!");
