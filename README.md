```typescript
let isDone : boolean = false;
isDone = true;

console.log(typeof isDone)// 'boolean'

let isOk : Boolean = true; //Object형태
//let isNotOk : boolean = new Boolean(true); error! primitive에 Object는 불가능하지만 역은 가능
```

# Number / number
  * JavaScript 와 같이, TypeScript의 모든 숫자는 부동 소수점 값 입니다.
  * TypeScript는 16진수 및 10진수 리터럴 외에도, ECMAScript 2015에 도입된 2진수 및 8진수를 지원합니다.
  * NaN
  * 1_000_000 과 같은 표기 가능

```typescript
let decimal: number = 6;//10진수 리터럴
let hex: number = 0xf00d;// 16진수 리터럴
let binary: number = 0b1010;// 2진수 리터럴
let octal: number = 0o744;// 8진수 리터럴
let notAnumber: number = NaN;
let underscoreNum: number = 1_000_000;
```