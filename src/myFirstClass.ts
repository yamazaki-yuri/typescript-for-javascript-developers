export {};

class Person {
  name: string;
  age: number;

  //constructorは戻り値がないので、戻り値の型定義はいらない
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new Person('Taro', 30);
console.log(taro.profile());