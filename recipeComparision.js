import readlineSync from "readline-sync";

const daging = readlineSync.question("Masak daging apa hari ini? ");
const dagingBeku = readlineSync.question("Apa dagingnya beku? (ya/tidak) ");
const listDaging = ["sapi", "ikan", "ayam", "kambing"];
const isFrozen = dagingBeku.toLowerCase() === "ya";

if (!isFrozen && listDaging.includes(daging.toLowerCase())) {
  console.log("Daging bisa dimasak");
} else if (!isFrozen && !listDaging.includes(daging.toLowerCase())) {
  console.log("Mungkin kita belum ready stock");
} else {
  console.log("Daging tidak bisa dimasak");
}
