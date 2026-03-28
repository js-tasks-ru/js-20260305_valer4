/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    if (string === undefined) return "";
    if (size === undefined) return string;
    if (size === 0) return "";


  let last = "";
  let count = 0;
  let result = "";

  for (const ch of string) {
    if (ch !== last) {
      last = ch;
      count = 1;
      result += ch;
    } else if (count < size) {
      count += 1;
      result += ch;
    }
  }

  return result;
}