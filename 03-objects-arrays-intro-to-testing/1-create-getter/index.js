/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    const pathArr = path.split(`.`);

    return function getter(obj) {
        if (typeof obj !== 'object' || obj === null || path === '')
             return undefined;
        pathArr.forEach((element) => {
            if (!Object.hasOwn(obj, element)) return undefined;
            obj = obj[element];
        });
        if (typeof obj === 'object' && obj !== null) return undefined;
        return obj;
    }
}