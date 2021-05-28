const parser = require("./utils");

describe("Testing of parseString function ", () => {
  test("removeQuotations function removes quotations at start and end of string", () => {
    expect(parser.removeQuotations('""Adapalene&&Benzoyl peroxide""')).toBe(
      "Adapalene&&Benzoyl peroxide"
    );
  });

  test("replaceAmpersand returns a string that replaces && with ', '", () => {
    expect(parser.replaceAmpersand("Adapalene&&Benzoyl peroxide")).toBe(
      "Adapalene, Benzoyl peroxide"
    );
  });

  test("parseString function parses string correctly with special characters removed", () => {
    expect(parser.parseString('""Adapalene&&Benzoyl peroxide""')).toBe(
      "Adapalene, Benzoyl peroxide"
    );
  });
});
