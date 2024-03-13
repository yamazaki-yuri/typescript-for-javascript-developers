export {};

let name = 'yuri';

name = 'Yui';

//文字列リテラルで、型がyuri型になっているので、
//変数だけど、定数状態
let nickName = 'yuri' as const;

//as constをつけると、readonly属性に変わる
//readonlyをいちいち書かなくていい！
//ネストした構造でも対応可
let profile = {
  name: 'yuri',
  height: 156
} as const;

//profile.name = 'Yui';
//profile.height = 157;