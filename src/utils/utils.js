export function replaceAmpersand(string) {
  return string.replace(/&&/g, ", ");
}

export function parseString(string) {
  return replaceAmpersand(string).toUpperCase();
}

export function seperateComponents(string) {
  return string.replace(/,/g, "\n");
}

export function toTitleCase(string) {
  return (string || "").toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}

export function pairIngredientsWithStrength(activeIngredients, strength) {
  const ingredients = (activeIngredients || "").split("&&");
  const strengths = (strength || "").split("&&");
  return ingredients.map((ingredient, i) => ({
    ingredient: ingredient.trim(),
    strength: (strengths[i] || "").trim(),
  }));
}

