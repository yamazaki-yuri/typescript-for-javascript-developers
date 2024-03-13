export {};

//インスタンスからの呼び出しを制限できる
//Publicは書いても書かなくても挙動は一緒。普通は書かない
class Person {
  public name: string;
  private age: number;
  protected nationality: string;

  //constructorは戻り値がないので、戻り値の型定義はいらない
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  //profileメソッドはPersonクラスの中なので、.ageも使える
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

//Personクラスを継承したクラスを作成
class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }//ageはエラーだけど、nationalityはエラーにならない
}
let taro = new Person('Taro', 30, 'Japan');
console.log(taro.profile());
console.log(taro.name);
console.log(taro.age);
console.log(taro.nationality);