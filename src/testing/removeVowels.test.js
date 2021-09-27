const functions = require("./functions");

// ========== removeVowels tests
test("test an empty string", () => {
  expect(functions.removeVowels("")).toBe("");
});

test("test a string with NO vowels", () => {
  expect(functions.removeVowels("hymn")).toBe("hymn");
});

test("test a string with ALL vowels", () => {
  expect(functions.removeVowels("aeiou")).toBe("");
});

test("tries to input a number and throws error", () => {
  expect(() => {
    functions.removeVowels(0);
  }).toThrow();
});

test("test numbers in a string", () => {
  expect(functions.removeVowels("12345")).toBe("12345");
});
