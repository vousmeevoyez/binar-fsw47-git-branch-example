// function masakSup() {
//   return "sup";
// }

// const masakan = masakSup();
// console.log(masakan);
// console.log(masakSup());

// function masakSup(daging) {
//   const listDaging = ["ikan", "ayam", "sapi"];
//   if (listDaging.includes(daging.toLowerCase())) {
//     return `Sup ${daging}`;
//   }
// }

// console.log(masakSup("Ikan"));
// console.log(masakSup("ayam"));
// console.log(masakSup(100));

function masakSup(daging) {
  const listDaging = ["ayam", "ikan", "sapi"];
  if (typeof daging === "string" && listDaging.includes(daging.toLowerCase())) {
    return `Sup ${daging}`;
  } else {
    return "Input tidak valid";
  }
}

console.log(masakSup("Ikan")); // Output: Sup Ikan
console.log(masakSup("ayam")); // Output: Sup ayam
console.log(masakSup(100)); // Output: Input tidak valid
