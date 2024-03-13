export {};

class Mahoutsukai {}
class Souryo {}

//複数のクラスを継承はできない
//複数の場所にある定義を継承したいときある
//複数のinterfaceを継承するようなことはできる
class Taro extends Mahoutsukai {}

interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

//interfaceを複数継承(=実装)するには、implementsを使う
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }

  kougeki(): void {
    console.log('kougeki');
  }
}
const jiro = new Jiro();
jiro.ionazun();