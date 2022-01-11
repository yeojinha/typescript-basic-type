function returnAny(message : any): any{
  return (message);
}

const any1 = returnAny("리턴은 아무거나");
console.log(any1.toString());

let looselyTyped: any = {};

const d = looselyTyped.any1;

function leakingAny(obj: any){
  const a = obj.num;
  const b = a+1;
  return b;
}

const c = leakingAny({num: 0});
console.log(typeof c);
console.log(c.toString().indexOf("0"))