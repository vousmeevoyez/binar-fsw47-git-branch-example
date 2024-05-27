import readlineSync from "readline-sync";

// Menyimpan metode memasak dalam variabel
const metodeMemasak = ["bakar", "rebus", "panggang"];

// Mengajukan pertanyaan kepada pengguna
const dagingDimasakApa = readlineSync.question(
  "Daging mau dimasak apa? (bakar/rebus/panggang) "
);

// Menyesuaikan input pengguna dengan metode memasak
if (metodeMemasak.includes(dagingDimasakApa.toLowerCase())) {
  if (dagingDimasakApa === "bakar") {
    console.log("Daging dibakar");
  } else if (dagingDimasakApa === "rebus") {
    console.log("Daging direbus");
  } else if (dagingDimasakApa === "panggang") {
    console.log("Daging dipanggang");
  }
} else {
  console.log(
    "Metode memasak tidak dikenali. Silakan pilih antara bakar, rebus, atau goreng."
  );
}
