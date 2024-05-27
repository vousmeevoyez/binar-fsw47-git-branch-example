//exercise 1
//tampilkan bintang berdasarkan jumlah angka
//misal 5
//*
//**
//***
//****
//*****
import readlineSync from "readline-sync";

// Meminta input jumlah angka dari pengguna
const jumlahAngka = parseInt(readlineSync.question("Masukkan jumlah angka: "));

// Loop untuk mencetak bintang berdasarkan jumlah angka
for (let i = 1; i <= jumlahAngka; i++) {
  let bintang = "";
  for (let j = 1; j <= i; j++) {
    bintang += "*";
  }
  console.log(bintang);
}
