const discountSteamSale = (price, discountPercentage) => {
  return price - price * (discountPercentage / 100);
};

const summerSale = (price) => {
  const summerDiscount = 20; // Contoh diskon Summer Sale 20%
  return discountSteamSale(price, summerDiscount);
};

const winterSale = (price) => {
  const winterDiscount = 30; // Contoh diskon Winter Sale 30%
  return discountSteamSale(price, winterDiscount);
};

// Contoh penggunaan
let originalPrice = 99; // Misal harga asli game adalah $50

let summerSalePrice = summerSale(originalPrice);
console.log(`Harga setelah Summer Sale: $${summerSalePrice}`); // Harga setelah diskon Summer Sale

let winterSalePrice = winterSale(originalPrice);
console.log(`Harga setelah Winter Sale: $${winterSalePrice}`); // Harga setelah diskon Winter Sale
