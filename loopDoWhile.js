import readlineSync from "readline-sync";

const lantaiLevel = readlineSync.question("Mau ngepel berapa lantai? (1-100)?");

let i = 1;
do {
  console.log(i);
  console.log(`lagi ngepel lantai ${i}`);
  i++;
} while (i <= lantaiLevel);
