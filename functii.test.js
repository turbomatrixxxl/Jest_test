const {
  add,
  multiply,
  divide,
  stringReverse,
  getLength,
  getLengthEqualsFive,
  promiseResolve,
} = require("./functii");

beforeAll(() => {
  console.log("Before all !");
});

beforeEach(() => {
  console.log("Before each !");
});

afterAll(() => {
  console.log("After all !");
});

afterEach(() => {
  console.log("After each !");
});

test("add function", () => {
  expect(add(2, 3)).toBe(5);
});

test("multiply function", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("divide function", () => {
  expect(divide(6, 3)).toBe(2);
});

test("stringReverse should correctly reverse the string", () => {
  expect(stringReverse("hello")).toBe("olleh");
  expect(stringReverse("world")).toBe("dlrow");
  expect(stringReverse("")).toBe(""); // Test with empty string
  expect(stringReverse("a")).toBe("a"); // Test with a single character
});

test("getLength function", () => {
  expect(getLength("Hello")).toBe(5);
});

test("getLengthEqualsFive function", () => {
  expect(getLengthEqualsFive("Hello")).toBeTruthy();
  expect(getLengthEqualsFive("Hello!")).not.toBeTruthy();
  expect(getLengthEqualsFive("Hello!")).toBeFalsy();
});

test('promiseResolve should resolve with "Resolved !"', async () => {
  await expect(promiseResolve()).resolves.toBe("Resolved !");
});
