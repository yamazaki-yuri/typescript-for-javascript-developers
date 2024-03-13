export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

//型の互換性がある
console.log(typeof fooCompatible)
fooCompatible = barCompatible
console.log(typeof fooCompatible)

let fooIncompatible: string;
let barInCompatible: number = 1;
//fooIncompatible = barInCompatible;

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;
//文字リテラル型は、文字列型の一部なので、互換性あり

let fooNumber: number;
let fooNumberLiteral: 1996 = 1996;
fooNumber = fooNumberLiteral;
//numberリテラル型は、number型の一部なので、互換性あり

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

//ここで、AnimalとPersonは関係ないのに、エラーは発生しない
//代入されるオブジェクトの内部にあるメンバーが、代入するオブジェクトにもあるかどうか
//そして、それらが持つ型に互換性があるか
//構造的部分型という
let me: Animal;
me = new Person(27, 'yuri');