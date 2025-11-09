// Q5_apply-transform-over-each-element-in-array.js
// Boilerplate for: apply-transform-over-each-element-in-array

const q5_apply_transform_over_each_element_in_array = (arr, fn) => {
  // TODO: implement solution
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i], i));
  }
  return newArray;
};

console.log(
  q5_apply_transform_over_each_element_in_array(
    [10, 20, 30],
    function constant() {
      return 42;
    }
  )
);

export default q5_apply_transform_over_each_element_in_array;
