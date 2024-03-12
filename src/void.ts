export {};

//関数の戻り値に対する型定義
//関数の戻り値がない場合には、void型を指定する
function returnNothing(): void {
  console.log("I don't return anything");
}

console.log(returnNothing());
