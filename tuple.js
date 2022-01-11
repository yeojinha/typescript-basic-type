"use strict";
let x; // 순서는 string, number이다.
x = ["hello", 39];
//x = [10, 'Mark'];//string 자리에 number가 들어가서 error
//x[2];
const person = ['Mark', 39]; // length is 2
//const [] = person; // destructing 분해할당 person 요소를 가지고 []에 넣는다.
const [first, second] = person; // destrtsucting 분해할당  person의 요소를 first, second tuple에 넣는다.
console.log(person);
console.log(first);
console.log(second);
