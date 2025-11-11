// Q8_function-composition.js
// Boilerplate for: function composition

const q8_function_composition = ({ functions, x }) => {
  // TODO: implement solution
  let tempVar = x;
  for (let i = functions.length - 1; i >= 0; i--) {
    if (functions.length === 0) return x;
    tempVar = functions[i](tempVar);
  }
  return tempVar;
};

console.log(
  q8_function_composition({
    functions: [(x) => x + 1, (x) => x * x, (x) => 2 * x],
    x: 4,
  })
);

export default q8_function_composition;
