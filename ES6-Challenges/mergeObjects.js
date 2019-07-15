const arrObj = [{a: 1, b: 2}, {c: 3, d: 4}, {e: 5, f: 6}];

console.log(arrObj.reduce(function(result, current) {
  return Object.assign(result, current);
}, {}));

console.log(arrObj.reduce(((r, c) => Object.assign(r, c)), {}));

console.log(Object.assign({}, ...arrObj));