import readlineSync from "readline-sync";

const suhu = readlineSync.question("Berapa suhu oven? dalam celcius");

const isPanas = suhu < 100 ? "tidak panas" : "panas";
console.log(isPanas);

console.log(suhu < 100 ? "tidak panas" : "panas");
