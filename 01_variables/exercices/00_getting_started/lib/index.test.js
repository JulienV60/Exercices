import { boooleanVariable } from "./index.js";
import { nullVariable } from "./index.js";
import { greetingVariable } from "./index.js";

describe("#booleanVariable", () => {
  test("Should have a `true` value.", () => {
    expect(boooleanVariable).not.toBe(undefined);
    expect(boooleanVariable).toBe(true);
  });
});

describe("#nullVariable", () => {
  test("Shoud have a 'null' value.", () => {
    expect(nullVariable).not.toBe(undefined);
    expect(nullVariable).toBe(null);
  });
});
describe("#greetingVariable", () => {
  test("Should have 'Hello World!' as a value.", () => {
    expect(greetingVariable).toBe("Hello World!");
  });
});
