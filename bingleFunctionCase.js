function greetings(username) {
  console.log(
    "Selamat datang " + username + " di Bingle, Let's start your journey!"
  );
}

greetings("Farhan Adi S");

function diskonBirthday(x) {
  let birthdaySale = (x * 30) / 100;
  return birthdaySale;
}

let sale = diskonBirthday(25000);
console.log(sale);

//Kode 1 function declaration
test();

function test() {
  console.log("it works");
}

//Kode 2 function expression
const test2 = function () {
  console.log("it works");
};

test2();

//error arrow function code
// test(1);

// const test = (a, b) => {
//   console.log(b);
// };
