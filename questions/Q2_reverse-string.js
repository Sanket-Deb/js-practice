// Q2_reverse-string.js
// Boilerplate for: reverse string

const q2_reverse_string = (s) => {
  // TODO: implement solution
  let sarray = s.split(" ");

  let reversedString = "";

  for (let i = sarray.length - 1; i >= 0; i--) {
    reversedString = reversedString + sarray[i];

    if (i > 0) {
      reversedString = reversedString + " ";
    }
  }
  return reversedString;
};

console.log(
  q2_reverse_string(
    "Show me the hearts unfettered by foolish dreams , and I will show you a happy man ; but only in their dreams can a man truly be free twas alwyays thus and always will be"
  )
);

export default q2_reverse_string;
