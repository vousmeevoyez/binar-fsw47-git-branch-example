import readlineSync from "readline-sync";

const lantaiLevel = readlineSync.question("Mau ngepel berapa lantai? (1-100)");

for (let i = 1; i <= lantaiLevel; i++) {
  console.log(i);
  console.log(`lagi ngepel lantai ${i}`);
}
