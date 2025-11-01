// Q1_first-non-repeating-character.js
// Boilerplate for: first non-repeating character

const q1_first_non_repeating_character = (input) => {
  // TODO: implement solution
  // for (let i = 0; i < input.length; i++) {
  //   let isUnique = true;

  //   for (let j = 0; j < input.length; j++) {
  //     if (i !== j && input[i] == input[j]) {
  //       isUnique = false;
  //       break;
  //     }
  //   }

  //   if (isUnique) return input[i];
  // }
  // return null;

  for (let i = 0; i < input.length; i++) {
    if (input.indexOf(input[i]) === input.lastIndexOf(input[i])) {
      return input[i];
    }
  }
  return null;
};

console.log(q1_first_non_repeating_character("aabbcc"));

export default q1_first_non_repeating_character;
