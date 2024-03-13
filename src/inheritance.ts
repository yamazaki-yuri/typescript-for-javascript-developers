export {};

//継承のベースとなる親クラス
class Animal {
  constructor(public name: string) {}
  run():string {
    return 'I can run';
  }
}

//継承して作るクラス
class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    //nameの初期化は親クラスを呼び出すことでやってくれる
    super(name);

    this.speed = speed;
  }
  run(): string {
    //superを使って、親クラスのrunメソッドを呼べる
    // const parentMessage = super.run();
    // console.log({parentMessage});
    return `${super.run()} ${this.speed}km.`;
  }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 80).run());