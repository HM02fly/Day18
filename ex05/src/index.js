let shoppingList = new Map([
  ['Banana', 3],
  ['Pineapple', 5],
  ['Pear', 2],
  ['Carrot', 10],
  ['Apple', 1.5],
]);

let arrKey = [];
let arrValue = [];

for (let val of shoppingList.entries()) {
  arrKey.push(val[0]);
  arrValue.push(val[1]);
}

arrKey.forEach((key) => {
  console.log('groceries: ' + key);
});

arrValue.forEach((value) => {
  console.log('amount: ' + value);
});

for (let val of shoppingList.entries()) {
  console.log(val);
}
module.exports = { shoppingList, arrKey, arrValue };
