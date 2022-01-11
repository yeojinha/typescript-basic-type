let maybe: unknown;
// unknown 타입은 런타임하여 타입이 한정된다고 싶으면 그 타입으로 한정시킨다.
// const aNumber: number = maybe;
let aString : any = maybe;
if(maybe === true){
  const aBoolean: boolean = maybe;
  console.log(typeof aBoolean);
  // const aString: string = maybe;
}

if(typeof maybe === 'string'){
  const aString: string = maybe;
  console.log(typeof aString);
  // const aBoolean: boolean = maybe;
}