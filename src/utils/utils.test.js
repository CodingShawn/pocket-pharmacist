import {
  replaceAmpersand,
  parseString,
  separateComponents,
  pairIngredientsWithStrength,
  toTitleCase,
} from "./utils";

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

describe("Pairing active ingredients with their strengths", () => {
  test("pairs a single ingredient with its strength", () => {
    expect(pairIngredientsWithStrength("ADAPALENE", "0.1%")).toEqual([
      { ingredient: "ADAPALENE", strength: "0.1%" },
    ]);
  });

  test("zips multiple parallel ingredient/strength pairs positionally", () => {
    expect(
      pairIngredientsWithStrength(
        "ADAPALENE&&BENZOYL PEROXIDE",
        "0.1%&&2.5%"
      )
    ).toEqual([
      { ingredient: "ADAPALENE", strength: "0.1%" },
      { ingredient: "BENZOYL PEROXIDE", strength: "2.5%" },
    ]);
  });

  test("leaves strength empty when there are fewer strengths than ingredients", () => {
    expect(
      pairIngredientsWithStrength("ADAPALENE&&BENZOYL PEROXIDE", "0.1%")
    ).toEqual([
      { ingredient: "ADAPALENE", strength: "0.1%" },
      { ingredient: "BENZOYL PEROXIDE", strength: "" },
    ]);
  });

  test("handles missing/undefined fields without throwing", () => {
    expect(pairIngredientsWithStrength(undefined, undefined)).toEqual([
      { ingredient: "", strength: "" },
    ]);
  });
});

describe("Title-casing display text", () => {
  test("capitalizes the first letter of each word and lowercases the rest", () => {
    expect(toTitleCase("ADAPALENE GEL")).toBe("Adapalene Gel");
  });

  test("capitalizes after non-space word boundaries (hyphens, slashes)", () => {
    expect(toTitleCase("CO-TRIMOXAZOLE/PARACETAMOL")).toBe(
      "Co-Trimoxazole/Paracetamol"
    );
  });

  test("returns an empty string for missing input", () => {
    expect(toTitleCase(undefined)).toBe("");
  });
});
