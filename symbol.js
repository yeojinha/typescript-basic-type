"use strict";
console.log(Symbol('foo') === Symbol("foo")); // false
const sym = Symbol(); // Symbol은 const 그 자체, 변할 수 없다 고유한 값 생성
const obj = {
    [sym]: "value",
};
obj[sym];
