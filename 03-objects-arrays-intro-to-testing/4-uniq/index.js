/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
    if (arr === undefined) return [];
    const res = [];
    for (const item of arr) {
        if (!res.includes(item)) res.push(item);
    }
    return res;
}
