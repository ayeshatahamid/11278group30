const functions = require("./functions");

// ========== multiply tests
test("multiply 5 by 5", () => {
  expect(functions.multiply(5, 5)).toBe(25);
});

test("multiply by 0", () => {
  expect(functions.multiply(1, 0)).toBe(0);
});

test("tries to input a string and throws error", () => {
  expect(() => {
    functions.multiply("two");
  }).toThrow();
});
