import readlineSync from "readline-sync";

const lantaiLevel = readlineSync.question("Mau ngepel berapa lantai? (1-100)?");
const levelLantaiRuangan = readlineSync.question(
  "Berapa ruangan setiap lantai? (1-100)?"
);

for (let lantai = 1; lantai <= lantaiLevel; lantai++) {
  console.log(lantai);
  console.log(`lagi ngepel lantai ${lantai}`);

  for (let ruangan = 1; ruangan <= levelLantaiRuangan; ruangan++) {
    console.log(ruangan);
    console.log(`lagi ngepel ruang ${ruangan} di lantai ${lantai}`);
  }
}
