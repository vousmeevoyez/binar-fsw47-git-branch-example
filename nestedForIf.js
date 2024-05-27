import readlineSync from "readline-sync";
const brpLantai = parseInt(
  readlineSync.question("Mau ngepel berapa lantai? (1 - 100): ")
);

const brpRuanganTiapLantai = parseInt(
  readlineSync.question("Mau ngepel berapa ruangan? (1 - 100): ")
);

for (let lantai = 1; lantai <= brpLantai; lantai++) {
  console.log(`Lantai ${lantai}`);

  for (let ruangan = 1; ruangan <= brpRuanganTiapLantai; ruangan++) {
    if (ruangan % 2 === 1) {
      console.log(`Ruangan ${ruangan}: Ruangan Ganjil`);
    } else {
      console.log(`Ruangan ${ruangan}: Ruangan Genap`);
    }
  }
}
