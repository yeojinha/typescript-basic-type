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

# string
  * 다른 언어에서와 마찬가지로 텍스트 형식을 참조하기 위해 `string` 형식을 사용
  * Javascript와 마찬가지로, TypeScript는 문자열 데이터를 둘러싸기 위해 큰 따옴표 (")나, 작은 따옴표(')를 사용

```typescript
let name: string = "mark";
name = 'anna'
```

# Template String
  * 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
  * 이 문자열은 backtick(=backquote) 기호에 둘러쌓여 있다.
  * 포함된 표현식 `${expr}` 와 같은 형태로 사용한다.

```typescript
let fullName: string = `Bob Bobbington`;
let age: number = 38;

let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`;

//template string을 사용하지 않을 경우
let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
"I'll be " + (age + 1) + " years old next month.";
```