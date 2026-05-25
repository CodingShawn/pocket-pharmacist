import { replaceAmpersand, parseString, separateComponents } from "./utils";

describe("Testing of parseString function", () => {
  test("replaceAmpersand returns a string that replaces && with ', '", () => {
    expect(replaceAmpersand("Adapalene&&Benzoyl peroxide")).toBe(
      "Adapalene, Benzoyl peroxide"
    );
  });

  test("parseString function parses string correctly with special characters removed", () => {
    expect(parseString("Adapalene&&Benzoyl peroxide")).toBe(
      "ADAPALENE, BENZOYL PEROXIDE"
    );
  });
});

describe("Substituting commas with newlines in string", () => {
  test("Replaces , with newline", () => {
    expect(separateComponents("ORPHENADRINE CITRATE, PARACETAMOL")).toBe(
      "ORPHENADRINE CITRATE\n PARACETAMOL"
    );
  });

  test("Replaces multiple , with newlines", () => {
    expect(
      separateComponents(
        "BETAMETHASONE DIPROPIONATE, CLOTRIMAZOLE, GENTAMICIN SULPHATE EQV GENTAMICIN"
      )
    ).toBe(
      "BETAMETHASONE DIPROPIONATE\n CLOTRIMAZOLE\n GENTAMICIN SULPHATE EQV GENTAMICIN"
    );
  });
});
