const masakSup = (daging) => {
  const listDaging = ["ayam", "ikan", "sapi"];
  if (typeof daging === "string" && listDaging.includes(daging.toLowerCase())) {
    return `Sup ${daging}`;
  } else {
    return "Input tidak valid";
  }
};

const masakSup2 = (daging, bumbu, level) =>
  `Sup ${daging} bumbu ${bumbu} level ${level}`;

console.log(masakSup("Ikan")); // Output: Sup Ikan
console.log(masakSup("ayam")); // Output: Sup ayam
console.log(masakSup(100)); // Output: Input tidak valid
console.log(masakSup2("ayam", "balado", 100));
