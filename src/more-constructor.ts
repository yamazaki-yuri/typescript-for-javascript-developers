export {};

// class Person {
//   public name: string;
//   protected age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

//この基本コードを何度も書かなくて済む方法
//この書き方の場合は、初期化するために、publicの宣言も必要
//constructorメソッドの引数にアクセス修飾子を渡すと、初期化ができる
class Person {
  constructor(public name: string, protected age: number) {}
}
const me = new Person('yuri', 27);
console.log(me);