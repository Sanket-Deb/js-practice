// Q7_array-reduce-transformation.js
// Boilerplate for: array reduce transformation

const q7_array_reduce_transformation = ({ nums, fn, init }) => {
  // TODO: implement solution
  var input = init;
  for (let i = 0; i < nums.length; i++) {
    // i!< 0 when the array is empty so the loop fails immediately and returns the init value
    input = fn(input, nums[i]);
  }
  return input;
};

console.log(
  q7_array_reduce_transformation({
    nums: [1, 2, 3, 4],
    fn: function sum(accum, curr) {
      return accum + curr * curr;
    },
    init: 100,
  })
);

export default q7_array_reduce_transformation;
