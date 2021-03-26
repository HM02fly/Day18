function* myGenerator() {
  yield* [1, 2, 3, 4, 5];
  yield* 'Arena';
  yield* arguments;
}

const iterator = myGenerator(6, 7, 8);
generatorArray = [];

for (val of iterator) {
  generatorArray.push(val);
}

console.log(generatorArray);

module.exports = { myGenerator, generatorArray };
