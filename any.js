"use strict";
function returnAny(message) {
    return (message);
}
const any1 = returnAny("리턴은 아무거나");
console.log(any1.toString());
let looselyTyped = {};
const d = looselyTyped.any1;
function leakingAny(obj) {
    const a = obj.num;
    const b = a + 1;
    return b;
}
const c = leakingAny({ num: 0 });
console.log(typeof c);
console.log(c.toString().indexOf("0"));
