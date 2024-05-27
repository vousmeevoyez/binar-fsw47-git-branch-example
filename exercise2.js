//exercise 2
//tampilkan bilangan ganjil berdasarkan jumlah yang diinginkan
//misalkan 10
//1
//3
//5
//7
//9
//clue bilangan ganjil angka yang dibagi 2 memiliki sisa bukan 0
import readlineSync from "readline-sync";

// Meminta input jumlah bilangan ganjil dari pengguna
const jumlahBilangan = parseInt(
  readlineSync.question(
    "Masukkan jumlah bilangan ganjil yang ingin ditampilkan: "
  )
);

// Variabel untuk menyimpan bilangan ganjil
let bilanganGanjil = 1;

// Loop untuk mencetak bilangan ganjil
for (let i = 0; i < jumlahBilangan; i++) {
  console.log(bilanganGanjil);
  bilanganGanjil += 2;
}
