const items = [
  {
    name: "Apple",
    priceUSD: 9,
  },
  {
    name: "Mango",
    priceUSD: 14,
  },
  {
    name: "Banana",
    priceUSD: 4,
  },
];
const exchangeRate = 80;
function exchange(USDprice) {
  return exchangeRate * USDprice;
}

let result = items.map((element) => (
  {
    ...element,
    priceInINR: exchange(element.priceUSD)
  }
))
console.log(result); // { Apple: 120, Orange: 160, Banana: 100 }