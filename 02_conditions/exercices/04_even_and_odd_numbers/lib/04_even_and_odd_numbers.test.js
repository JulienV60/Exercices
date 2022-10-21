/* global beforeAll describe test expect */
const fs = require("fs");
const path = require("path");
const readcode = require("./readcode");

let studentCode;
beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(path.resolve(__dirname, "../lib/index.js"));
  return studentCode;
});

describe("#03_even_and_odd_numbers", () => {
  test("It should log the right message when the number is even", () => {
    return studentCode.then((code) => {
      const fakeLog = jest.spyOn(console, "log").mockImplementation((log) => log);

      eval(code);

      expect(fakeLog).toHaveBeenCalledWith("The number is even");
      fakeLog.mockRestore();
    });
  });

  test("It should log the right message when the number is odd", () => {
    return studentCode.then((code) => {
      const changedCode = code.replace("let numberToCheck = 18;", "let numberToCheck = 17;");

      const fakeLog = jest.spyOn(console, "log").mockImplementation((log) => log);

      eval(changedCode);

      expect(fakeLog).toHaveBeenCalledWith("The number is odd");
      fakeLog.mockRestore();
    });
  });
});
