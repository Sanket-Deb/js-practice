// Q6_filter-elements-from-array.js
// Boilerplate for: filter-elements-from-array

const q6_filter_elements_from_array = (arr, fn) => {
  // TODO: implement solution
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

console.log(
  q6_filter_elements_from_array([1, 2, 3], function firstIndex(n, i) {
    return i === 0;
  })
);

export default q6_filter_elements_from_array;
