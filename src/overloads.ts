export {};

// function double(value: number): number {
//  return value * 2;
// };

// console.log(double(100));

// function double(value: string): string {
//   return value + value;
// }

// console.log(double('Go'));

//上記のdoubleは、引数が数字のものと文字列のものがあり、コンパイルエラーになる
//Duplicate function implementation.というエラー
//エラー回避のためオーバーロードを使う。そのためにはシグネチャーを宣言する(関数の前に定義)
function double2(value: number): number;
function double2(value: string): string;

function double2(value: any): any {
  if (typeof value === 'number') {
  return value * 2;
  } else {
    return value + value;
  } 
};

console.log(double2(100));
console.log(double2('GO'));

//union型を使って、それぞれ受け取れつようにすればいいのでは？　実態に型が不要なので、これは違う
//any型は危険じゃないの？　シグネチャーの宣言で、受け取る値の型を定義しているので問題ない

