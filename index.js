const naiveFibonacci = numberOfIterations => {
  console.log(0);
  if (numberOfIterations == 1) return;
  console.log(1);
  if (numberOfIterations == 2) return;

  let [previous, current] = [0, 1];

  for (let i = 2; i < numberOfIterations; ++i) {
    [previous, current] = [current, current + previous];
    console.log(current);
  }
};

naiveFibonacci(10);

const lessNaiveFibonacci = numberOfIterations => {
  let numbers = [0, 1];
  let [previous, current] = numbers;
  for (i = 2; i < numberOfIterations; ++i) {
    [previous, current] = [current, current + previous];
    numbers.push(current);
  }
  return numbers;
};

lessNaiveFibonacci(10).map(e => console.log(e));

function* fibonacci() {
  yield 0;
  yield 1;
  let [previous, current] = [0, 1];

  while (true) {
    [previous, current] = [current, current + previous];
    yield current;
  }
}

function* take(numberToTake, iterable) {
  const iterator = iterable[Symbol.iterator]();
  for (let i = 0; i < numberToTake; ++i) {
    const { done, value } = iterator.next();
    if (!done) yield value;
  }
}

for (let n of take(10, fibonacci())) {
  console.log(n);
}

const fibonacciAt = index => [...take(index + 1, fibonacci())][index];

console.log(fibonacciAt(7));

const naiveAt = (index, iterable) => [...take(index + 1, iterable)][index];

console.log(naiveAt(7, fibonacci()));
const at = (index, iterable) => {
  const iterator = iterable[Symbol.iterator]();

  let value = undefined;

  for (let i = 0; i < index; ++i) {
    value = iterator.next().value;
  }

  return value;
};

console.log(at(10, fibonacci()));
