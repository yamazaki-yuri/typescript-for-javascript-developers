export {};

class Me {
  //ここで初期化するのはハードコーディングという？
  //staticをつけると、静的メンバーになる
  static isProgrammer: boolean = true;
  static firstName: string = 'yuri';
  static lastName: string = 'yamazaki';
  
  //メソッドにも使える
  static work() {
    //'Hey! This is yuri!'にする
    //return `Hey! This is ${Me.firstName}!`以下の方がいい
    return `Hey! This is ${this.firstName}!`
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

//静的メンバーへのアクセスは以下
console.log(Me.isProgrammer)
console.log(Me.work())


//動的メンバーで管理することもできるけど、一回一回new演算子でクラスをインスタンス化する必要がある
//静的メンバーにすると、クラス名から、メンバー変数にアクセスできる

