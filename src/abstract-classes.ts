export {};

//抽象メソッドは、必ずオーバーライドしないといけない
//抽象メソッドにある宣言を、シグネチャーという

//抽象メソッドの親クラス
abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}
//抽象クラスの親クラスにあるメソッドを実装し忘れることがない
class Tiger extends Animal {
  cry() {
    return 'gaaaa';
  }
}