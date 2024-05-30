const vegetables = ["Spinach", "Leaf", "Tauge"];
const fruits = ["Apple", "Banana", "Cherry"];
const fruitsVegetables = fruits.concat(vegetables);

fruitsVegetables.push("Mango");
fruitsVegetables.pop();
fruitsVegetables.unshift("Strawberry");
fruitsVegetables.shift();

//for ..of
const outputDiv = document.getElementById("arrayOutput");
let content = "<ul>";
for (let item of fruitsVegetables) {
  content += `<li> ${item} </li>`;
}
content += "</ul>";

outputDiv.innerHTML = content;

//foreach
const outputDiv2 = document.getElementById("arrayOutput2");
const fruitsVegetablesExApple = fruitsVegetables.filter(
  (item) => item !== "Apple"
);

let content2 = "<ul>";
fruitsVegetablesExApple.forEach((item) => {
  content2 += `<li> ${item} </li>`;
});
content2 += "</ul>";

outputDiv2.innerHTML = content2;

//Map Method Array
const fruitsVegetablesInPlastic = fruitsVegetables.map((item) => {
  return `bungkus : ${item}`;
});

const outputDiv3 = document.getElementById("arrayOutput3");

let content3 = "<ul>";
fruitsVegetablesInPlastic.forEach((item) => {
  content3 += `<li>${item}</li>`;
});
content3 += "</ul>";

outputDiv3.innerHTML = content3;
