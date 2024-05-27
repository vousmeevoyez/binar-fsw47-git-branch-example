import readlineSync from "readline-sync";

const lantaiLevel = readlineSync.question("Mau ngepel berapa lantai? (1-100)?");

let i = 1;
while (i <= lantaiLevel) {
  console.log(i);
  console.log(`Lagi ngepel dilantai ${i}`);
  i++;
}
