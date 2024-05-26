function masakSup(daging) {
  const listDaging = ["ayam", "ikan", "sapi"];
  if (typeof daging === "string" && listDaging.includes(daging.toLowerCase())) {
    return function (bumbu) {
      return function (level) {
        return `Sup ${daging} dengan ${bumbu} level ${level}`;
      };
    };
  } else {
    return "Input tidak valid";
  }
}

console.log(masakSup("ikan")("kari")(100));
