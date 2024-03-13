export {};

//* owner
//  *所有者
//  *初期化時に設定できる
//  *途中で変更できないものにする
//  *参照できるものにする
//* secretNumber
//  *個人番号
//  *初期化時に設定できる
//  *途中で変更できる
//  *参照できない
class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }
  //privateをつけてしまうと、クラス外で呼び出せないので
  //呼び出せるように参照専用メソッドを作る
  //参照するメソッドをgetterという
  //クラスのメンバー変数の方を、_をつけてrenameするのが慣習
  get owner() {
    return this._owner;
  }
  //途中で変更できるという要件を満たすため
  //値を変更するときのみ呼び出すメソッド
  //getterと同じように、メンバー変数を_をつけてrenameする
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  //値が変更できているかの確認するため、デバック用メソッドを作る
  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('yuri', 1234567);
//card.owner = 'Yuri';
console.log(card.owner)
//card._secretNumber
console.log(card.debugPrint());
card.secretNumber = 1111111;
console.log(card.debugPrint());



//これって、reactで書くとuseStateなのでは？
