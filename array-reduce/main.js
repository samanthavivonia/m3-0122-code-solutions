const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = (previousValue, currentValue) => previousValue + currentValue;
console.log('sum: ', numbers.reduce(sum));

const product = (previousValue, currentValue) => previousValue * currentValue;
console.log('product: ', numbers.reduce(product));

const balance = (previousValue, currentValue) => {
  // console.log('previousValue: ', previousValue, ' currentValue: ', currentValue)
  if (currentValue.type === 'deposit') {
    previousValue = previousValue + currentValue.amount;
  } if (currentValue.type === 'withdrawal') {
    previousValue = previousValue - currentValue.amount;
  };
  return previousValue;
};
console.log('balance: ', account.reduce(balance, 0));

const composite = (previousValue, currentValue) => {
  Object.assign(previousValue, currentValue);
  return previousValue;
}
console.log('composite: ', traits.reduce(composite, {}));
