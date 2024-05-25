function racikBumbu(bumbu) {
  const bumbuYangBisaDimasak = ["kari", "asam-manis", "pedas"];
  if (
    typeof bumbu === "string" &&
    bumbuYangBisaDimasak.includes(bumbu.toLowerCase())
  ) {
    return true;
  } else {
    return false;
  }
}

function periksaDaging(daging) {
  const listDaging = ["ikan", "ayam", "sapi"];
  if (typeof daging === "string" && listDaging.includes(daging.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}

function periksaPedas(pedas) {
  return `cek level kepedasan ${pedas}`;
}

function masakSup(daging, bumbu, pedas) {
  if (periksaDaging(daging)) {
    if (racikBumbu(bumbu)) {
      console.log(periksaPedas(pedas));
      return `Sup ${daging} dengan ${bumbu} ${pedas}`;
    } else {
      return "Bumbu tidak valid";
    }
  } else {
    return "Daging tidak valid";
  }
}

console.log(masakSup("sapi", "kari", "pedas")); // Output: cek level pedas sedang \n Sup ikan dengan kari sedang
console.log(masakSup("domba", "kari", "sedang")); // Output: Daging tidak valid
console.log(masakSup("ikan", "manis", "sedang")); // Output: Bumbu tidak valid
