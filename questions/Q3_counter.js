// Q3_counter.js
// Boilerplate for: counter

const q3_counter = (input) => {
  // TODO: implement solution
  let inputCopy = input;

  const increment = () => ++inputCopy;

  const decrement = () => --inputCopy;

  const reset = () => (inputCopy = input);

  return { increment, decrement, reset };
};

const counter = q3_counter(5);
const output = [counter.increment(), counter.reset(), counter.decrement()];

console.log(output);

export default q3_counter;
