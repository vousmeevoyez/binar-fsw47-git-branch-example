import readlineSync from "readline-sync";

// Meminta input jumlah lantai dari pengguna
const lantaiLevel = parseInt(
  readlineSync.question("Mau ngepel berapa lantai? (1-100)? ")
);

// Memastikan input yang diberikan adalah angka yang valid
if (isNaN(lantaiLevel) || lantaiLevel < 1 || lantaiLevel > 100) {
  console.log("Input tidak valid. Harap masukkan angka antara 1 dan 100.");
} else {
  let i = 1;
  while (i <= lantaiLevel) {
    console.log(`Lagi ngepel di lantai ${i}`);

    // Loop untuk mencetak bintang sebanyak nomor lantai
    let bintang = "";
    for (let j = 0; j < i; j++) {
      bintang += "*";
    }
    console.log(bintang);

    i++;
  }
}

// w3school
