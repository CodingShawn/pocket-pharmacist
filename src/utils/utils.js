export function replaceAmpersand(string) {
  return string.replace(/&&/g, ", ");
}

export function parseString(string) {
  return replaceAmpersand(string).toUpperCase();
}

export function seperateComponents(string) {
  return string.replace(/,/g, "\n");
}

