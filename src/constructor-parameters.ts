export {};

//parametersはクラスにも使えるよ
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  };
};

let taro = new Person('Taro', 30);
console.log(taro);

//Personクラスの型を取得して新たに定義
type PersonType = typeof Person;
//それをProfileに代入
type Profile = ConstructorParameters<PersonType>

const profile: Profile = ['yuri', 27];
const yuri = new Person(...profile);
console.log(yuri);
