function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
}

function multiply(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw "Inputs must be numbers.";
  }
  return a * b;
}

// export
module.exports.removeVowels = removeVowels;
module.exports.multiply = multiply;

// testing
// console.log(removeVowels(""));
