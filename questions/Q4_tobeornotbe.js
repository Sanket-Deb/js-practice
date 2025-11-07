// Q4_tobeornotbe.js
// Boilerplate for: toBeorNotBe

const q4_tobeornotbe = (input) => {
  // TODO: implement solution
  const toBe = (val) => {
    if (val === input) {
      return true;
    } else throw new Error("Not Equal");
  };

  const notToBe = (val) => {
    if (val !== input) {
      return true;
    } else throw new Error("Equal");
  };

  return { toBe, notToBe };
};

const tobeornotbe = q4_tobeornotbe(5);

const safeCall = (fn) => {
  try {
    return fn();
  } catch (error) {
    return error.message;
  }
};
const output = [
  safeCall(() => tobeornotbe.toBe(5)),
  safeCall(() => tobeornotbe.toBe(4)),
  safeCall(() => tobeornotbe.notToBe(5)),
  safeCall(() => tobeornotbe.notToBe(6)),
];

console.log(output);

export default q4_tobeornotbe;
