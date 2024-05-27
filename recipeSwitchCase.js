import readlineSync from "readline-sync";

// Menyimpan metode memasak dalam variabel
const metodeMemasak = ["bakar", "rebus", "panggang"];

// Mengajukan pertanyaan kepada pengguna
const dagingDimasakApa = readlineSync
  .question("Daging mau dimasak apa? (bakar/rebus/panggang) ")
  .toLowerCase();

// Menggunakan switch untuk menentukan keluaran berdasarkan input pengguna
switch (dagingDimasakApa) {
  case "bakar":
    console.log("Daging dibakar");
    break;
  case "rebus":
    console.log("Daging direbus");
    break;
  case "panggang":
    console.log("Daging panggang");
    break;
  default:
    console.log(
      "Metode memasak tidak dikenali. Silakan pilih antara bakar, rebus, atau goreng."
    );
    break;
}
