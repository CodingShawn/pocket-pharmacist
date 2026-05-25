export function replaceAmpersand(string) {
  return string.replace(/&&/g, ", ");
}

export function parseString(string) {
  return replaceAmpersand(string).toUpperCase();
}

export function separateComponents(string) {
  return string.replace(/,/g, "\n");
}

