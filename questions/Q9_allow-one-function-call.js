// Q9_allow-one-function-call.js
// Boilerplate for: allow one function call

const q9_allow_one_function_call = (fn) => {
  // TODO: implement solution
  let calls = 0;
  return (...args) => {
    calls++;
    if (calls > 1) {
      return undefined;
    }
    return fn(...args);
  };
};

const fn1 = (a, b, c) => a + b + c;
const onceFn1 = q9_allow_one_function_call(fn1);
console.log(onceFn1(1, 2, 3)); // 6
console.log(onceFn1(2, 3, 6)); // undefined

export default q9_allow_one_function_call;
