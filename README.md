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

--------------------------------------------

# unknown
  
  * 응용프로그램을 작성할 때 모르는 변수의 타입을 묘사해야 할 수도 있다.
  * 이러한 값은 동적 콘텐츠(예: 사용자로부터, 또는 우리 API의 모든 값을 의도적으로 수락하기를 원할 수 있다)
  * 이 경우, 컴파일러와 미래의 코드를 읽는 사람에게 이 변수가 무엇이든 될 수 있음을 알려주는 타입을 제공하기를 원하므로 unknown 타입을 제공한다.

  * Typescript 3.0 버전부터 지원
  * any와 짝으로 any 보다 Type-safe한 타입
    * any와 같이 아무거나 할당할 수 있다.
    * 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나
    * 타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고, 사용할 수 없다.
  * unknown 타입을 사용하면 runtime error를 줄일 수 있을 것 같다.
    * 사용 전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용할 수 있을 것 같다.

```typescript
  declare const maybe: unknown;
// unknown 타입은 런타임하여 타입이 한정된다고 싶으면 그 타입으로 한정시킨다.
// const aNumber: number = maybe;

if(maybe === true){ // unknown 타입이 if문 내에서 boolean 하나로 한정되었으므로 
  const aBoolean: boolean = maybe; // aBoolean: bolean에 unknown 타입을 넣어도 error 발생하지 않는다.
  console.log(typeof aBoolean);
  // const aString: string = maybe; // 타입 에러 발생
}

if(typeof maybe === 'string'){// if문에서 'string'으로 한정되어 타입 error 미발생
  const aString: string = maybe;
  console.log(typeof aString);
  // const aBoolean: boolean = maybe; 타입에러 발생한다.
}
```
  # never
  * never 타입은 모든 타입의 subtype이며, 모든 타입에 할당할 수 있다.
  * 하지만, never에는 그 어떤 것도 할당할 수 없다.
  * any 조차도 never에게 할당할 수 없다.
  * 잘못된 타입을 넣는 실수를 막고자 할 때 사용한다.
  * never를 반환하는 함수에 사용하면 불가능한 위치에 추가적인 코드를 사용하게끔 하는데, 이는 더 나은 에러 메시지를 보여주거나 파일 또는 반복문과 같은 자원을 닫는데 유용핟ㄷ. 

```typescript
  let a: string = 'hello';

  if(typeof a!== 'string'){
    let b: never = a;
  }

  type Indexable<T> = T extends string ? T & {[index: string]: any} : never;
```

  # structural tpye system - 구조가 같으면 , 같은 타입이다. -> javascript

```typescript
  interface IPerson{
    name: string;
    age: number;
    speak(): string;
  }

  type PersonType = {
    name: string;
    age: number;
    speak(): string;
  };

  let personInterface: IPerson = {} as any;
  let personType: PersonType = {} as any;

  personInterface = personType;
  personType = personInterface;
```
  # nominal type system - 구조가 같아도 이름이 다르면, 다른 타입이다. -> C , JAVA
    ```typescript
      type PersonID = string & {readonly brand : unique symbol};

      function Person(id: string) PersonID{
        return id as PersonID;
      }

      function getPersonById(id: PersonID){}

      getPersonById(PersonID ('id-aaaaaa'));
      getPersonById('id-aaaaaa');
    ```
  # duck typing -> Python
    * 만약 어떤 새가 오리처럼 걷고, 헤엄치고, 꽥꽥거리는 소리를 낸다면 나는 그 새를 오리라고 부를 것이다.

  ```python
    class Duck:
      def sound(self):
        print u"꽥꽥"
    
    class Dog:
      def sound(self):
          print u"멍멍"

    def get_sound(animal):
      animal.sound()
    
    def main():
      bird = Duck()
      dog = Dog()
      get_sound(bird)
      get_sound(dog)
  ```

  # 서브 타입(1)

  ```typescript
  // sub1 타입은 sup1 타입의 서브타입이다.
  let sub1: 1 = 1;
  let sup1: number = sub1;
  sub1= sup1; // error! Type 'number' is not assignable to type '1'.

  // sub2 타입은 sup2 타입의 서브타입이다.
  let sub2: number[]=[1];
  let sup2: object = sub2;
  sub2=sup2 //error! Type '{}' is missing the following properties from type 'number[]': length, pop, push, concat, and 16 more

  //sub3 타입은 sup3 타입의 서브 타입이다.
  let sub3: [number, number]= [1,2];
  let sup3: number[] = sub3;
  sub3=sup3; //error! Type 'number[]' is not assignable to type '[number, number]'. Target requires 2 elements(s) but source may have fewer.
  ```

  # 서브 타입(2)

  ```typescript
  // sub4 타입은 sup4 타입의 서브 타입이다.
  let sub4: number =1;
  let sup4: any = sub4;
  sub4 = sup4;

  // sub5 타입은 sup5 타입의 서브 타입이다.
  let sub5: never = 0 as never;
  let sup5: number = sub5;
  sub5 = sup5; // error! Type 'number' is not assignable to type 'never'

  class Animal{}
  class Dog extends Animal{
    eat(){}
  }

  //sub6 타입은 sup6 타입의 서브 타입이다.
  let sub6: Dog = new Dog();
  let sup6: Animal = sub6;
  sub6 = sup6; // error! Property 'eat' is missing in type'SubAnimal' but required int type 'SubDog'.
  ```

  ## 1. 같거나 서브 타입인 경우, 할당이 가능하다 => 공변

  ```typescript
  //primitive type
  let sub7: string = '';
  let sup7: string | number = sub7;

  //object - 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브 타입이어야 한다.
  let sub8: {a: string; b: number} = {a: '', b: 1};
  let sup8: {a: string | number; b: number} = sub8;

  //array - object 와 마찬가지
  let sub9: Array<{a: string; b: number}>=[{a:'', b:1}];
  let sup9: Array<{a: string | number; b: number}> = sub9;
  ```

  ## 2. 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다. => 반병

  ```typescript
  class Person{}
  class Developer extends Person{
    coding(){}
  }
  class StartupDeveloper extends Developer{
    burning(){}
  }
  function tellme(f: (d: Developer) => Developer)

  //Developer => Developer 에다가 Developer => Developer 를 할당하는 경우
  tellme(function dToD (d: Developer): Developer{
    return new Developer();
  });

  //Developer => Developer 에다가 Person => Developer 를 할당하는 경우
  tellme(function pToD(d: Person): Developer{
    return new Developer();
  });

  //Developer => Developer 에다가 StartipDeveloper => Developer 를 할당하는 경우
  tellme(function sTOd(d: StartupDeveloper): Developer{
    return new Developer();
  });
  ```

  ## strictFunctionTypes 옵션을 켜면
  * 함수를 할당할 시에 함수의 매개변수 타입이 같거나 슈퍼타입이 아닌 경우, 에러를 통해 경고한다.

  # 타입 별칭(별명)
    * Interface랑 비슷하다.
    * Primitive, Union Type, Tuple, Function
    * 기타 직업 작성해야하는 타입을 다른 이름을 지정할 수 있다.
    * 만들어진 타입의 refer로 사용하는 것이지 타입을 만드는 것이 아님.

    ## Aliasing Primitive
    ``` typescript
    type MyStringType = string;
    
    const str = 'world';

    let myStr: MyStringType = 'hello';
    myStr = str;

    /*
    별 의미가 없다...
    */
    ```
    ## Aliasing Union Type
    ```typescript
    let person: string | number = 0;
    person = 'Mark';

    type StringOrNumber = string | number;

    let another : StringOrNumber = 0;
    another = 'Anna'

    /*
    1. 유니온 타이은 A도 가능하고 B도 가능한 타입
    2. 길게 쓰는 걸 짧게
    */
    ```

    ## Aliasing Tuple
    ```typescript
    let person: [string, number] = ['Mark', 35];

    type PersonTuple = [string, number];

    let another: PersonTuple = ['Anna', 24];
    /*
    1. 튜플 타입에 별칭을 줘서 여러군데서 사용할 수 있게 한다.
    */
    ```

    ## Aliasing Function

    ```typescript
    type EatType = (food: string) => void;
    ```
