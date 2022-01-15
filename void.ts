function returnVoid(message: string): void {
  console.log(message);
  //void에 undefined는 가능
  return undefined;
}

const r = returnVoid('리턴이 없다');