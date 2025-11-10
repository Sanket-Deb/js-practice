// Q7_array-reduce-transformation.js
// Boilerplate for: array reduce transformation

const q7_array_reduce_transformation = (nums, fn, init) => {
  // TODO: implement solution
  var input = init;
  for (let i = 0; i < nums.length; i++) {
    input = fn(input, nums[i]);
  }
  return input;
};

console.log(
  q7_array_reduce_transformation(
    [1, 2, 3, 4],
    function sum(accum, curr) {
      return accum + curr;
    },
    0
  )
);

export default q7_array_reduce_transformation;
