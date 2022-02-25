export function ShowOnlyFirstLetters(string) {
  const slicedString = string.slice(0, 20);
  const concatenatedString = slicedString.concat("...");
  return concatenatedString;
}
