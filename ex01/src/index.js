let myArr = [];

function* multiplication(x) {
  for (let i = 0; i < x; i++) {
    yield (x *= 2);
    myArr.push(x);
  }
}
const num = multiplication(3);
// console.log(myArr);
// console.log(num.next().value);

for (let i = 0; i < 3; i++) {
  console.log(num.next().value);
}

module.exports = multiplication;
