'use strict';
function inc(n) {
  return n + 1;
}

const a = 5;
const b = inc(a);
console.dir({ a, b }); 

function incRef(num) {
  num.n += 1;
}

const obj = { n: 5 };
incRef(obj);
console.dir(obj); 