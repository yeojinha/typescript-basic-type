```typescript
let isDone : boolean = false;
isDone = true;

console.log(typeof isDone)// 'boolean'

let isOk : Boolean = true; //Object형태
//let isNotOk : boolean = new Boolean(true); error! primitive에 Object는 불가능하지만 역은 가능
```

--------------------------------------------

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

--------------------------------------------

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

--------------------------------------------

# Symbol
  * ECMAScript 2015의 Symbol이다.
  * new Symbol로 사용할 수 없다.
  * Symbol을 함수로 사용해서 symbol 타입을 만들어낼 수 있다.
  * 프리미티브 타입의 값을 담아서 사용한다.
  * 고유하고 수정불가능한 값으로 만들어준다.
  * 그래서 주로 접근을 제어하는데 쓰는 경우가 많다.(수정불가, 유니크)
  * 함수로 Symbol() 타입은 symbol

```typescript
console.log(Symbol('foo') === Symbol('foo'))
```

--------------------------------------------

```typescript
let sym = Symbol();
let obj = {
  [sym]: "value" //obj 객체의 [sym]이 symbole이며, [sym]이 key, "value"가 value이다.
};
console.log(obj[sym]); // "value"
```

--------------------------------------------

# Undefined & Null
  * TypeScript에서, undefined와 null은 실제로 각각 undefined 및 null이라는 타입을 가진다.
  * void와 마찬가지로, 그 자체로는 그다지 유용하지 않다.
  * 둘다 소문자로만 존재한다.

```typescript
  // 이 변수들에 할당할 수 있는 것들은 거의 없다.
 
  let u: undefined = undefined;
  let n: null = null;
```

--------------------------------------------

# undefined & null are subtypes of all other types.
  * 설정을 하지 않으면 그렇다.
  * number 에 null 또는 undefined를 할당할 수 있다는 의미.
  * 하지만, 컴파일 옵션에서 `--stringNullChecks` 사용하면, null과 undefined는 void 나 자기 자신들에게만 할당할 수 있다.
    * 이 경우, null과 undefined 를 할당할 수 있게 하려면, union type을 이용해야 한다.

```typescript
let name : string = null;
let age: number = undefined;

// stringNullChecks => true
// Type 'null' is not assignable to type 'string'.
let name: string = null; //(X)

// null => null || void, undefined => undefined || void
// Type 'null' is not assginable to type 'undefined'.
let u: undefined = null; //(X)
let v: void = undefinedl; //(O)

let union: string | null | undefined = 'str';
```

--------------------------------------------

# null in JavaScript
  * null 이라는 값으로 할당된 것을 null이라고 한다.
  * 무언가가 있는데, 사용 준비가 덜 된 상태.
  * null이라는 타입은 null 이라는 값만 가질 수 있다.
  * 런타임에서 typeof 연산자를 사용하면 object라고 나온다.

```javascript
let n: null = null;
console.log(n); // null
console.log(typeof n);// object
```

--------------------------------------------

# object
  * "primitive type이 아닌 것"을 나타내고 싶을 때 사용하는 타입

# non-primitive type
  * not number, string, boolean, bigint, symbol, null, or undefined


* object에 들어가도 되는 형식은 아래와 같다.(단순 primitive는 불가능)
```typescript

let obj: object = {};

obj = {name="Mark"};

obj = [{name: 'Mark'}];

obj = 39; //Error

obj = 'Mark'; //Error

obj = true; //Error

obj = 100n; //Error

obj = Symbol(); //Error

obj = null; //Error

obj = undefined; //Error
```

* Object.create()에 들어가도 되는 형식은 아래와 같다.

```typescript
  declare function create(o: object | null): void; //object와 null만 받음

  create({prop: 0});

  create(null);

  create(42); //Error

  create("string"); //Error

  create(false); //Error

  create(undefined); //Error

//Object.create
Object.create(0); //Error
```


```typescript
//create by obejct literal
const person1= {name: 'Mark', age: 39};

//person1 is not "object" type.
//peson1 is "{name: string, age: number}" type.

//create by Object.create
const person2 = Object.create({name: 'Mark'm age: 39});
```

--------------------------------------------

# Array
  * 원래 자바스크립트에서 array는 객체이다.
  * 사용방법
    * Array<타입>
    * 타입[]

```typescript
  let list: number[] = [1,2,3];

  let list: Array[number] = [1,2,3];
```

--------------------------------------------

# any
  * 어떤 타입이어도 상관없는 타입
  * 컴파일 타임에 타입 체크가 정상적으로 이루어지지 않기 때문에 지양해야 함.
  * 그래서 컴파일 옵션 중에는 any를 써야하는데, 쓰지 않으면 오류를 뱉도록 하는 옵션도 있다.
    * noImplicitAny

```typescript
  function returnAny(message) : any{
    console.log(message);
  }
  returnVoid('리턴은 아무거나')
```
  * any는 계속해서 개채를 통해 전파된다
  * 결국, 모든 편의는 타입 안정성을 잃는 대가로 온다는 것을 기억
  * 타입 안전성은 TypeScript를 사용하는 주요 동기 중 하나이며 필요하지 않은 경우에는 any를 사용하지 않도록 해야한다.

```typescript
  let looselyTyped: any ={};

  let d = looselyTyped.a.b.c.d;
  //  d = let d: any  <- any타입이 되어 안정성 저하
  //any 타입의 변수를 다른 곳에 대입하면 그것이 any 타입이 된다.
```
