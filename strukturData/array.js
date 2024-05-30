const cars = ["BMW", "Volvo", "Toyota", "Ford"];
const outputDiv = document.getElementById("arrayOutput");

// Clear the content of the div (if any)
outputDiv.innerHTML = "";

// Iterate through the array and create a link for each item
cars.forEach((car, index) => {
  // Create a new paragraph (p) element to hold the link and the dot
  const p = document.createElement("p");

  // Create a new anchor (a) element
  const anchor = document.createElement("a");
  anchor.href = "#"; // Set the href attribute. Modify as needed.
  anchor.textContent = car; // Set the text content to the car name

  // Add the dot before the link text
  p.textContent = `${index + 1}. `;
  p.appendChild(anchor);

  // Append the paragraph to the div
  outputDiv.appendChild(p);
});
