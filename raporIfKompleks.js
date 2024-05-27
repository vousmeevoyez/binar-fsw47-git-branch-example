import readlineSync from "readline-sync";

const inputNilai = readlineSync.question("Masukkan nilai Anda: ");
const nilai = parseInt(inputNilai);

if (isNaN(nilai)) {
  console.log("Input tidak valid. Harap masukkan angka.");
} else {
  let gradeNilai;

  if (nilai >= 90) {
    gradeNilai = "A";
  } else if (nilai >= 80) {
    gradeNilai = "B";
  } else if (nilai >= 70) {
    gradeNilai = "C";
  } else if (nilai >= 60) {
    gradeNilai = "D";
  } else {
    gradeNilai = "E";
  }

  console.log(`Nilai grade Anda adalah: ${gradeNilai}`);
}
