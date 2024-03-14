export {};

function add(a: number, b: number) {
  return a + b;
};

console.log(add(3,5));
//関数の戻り値の型を取得するutilityとして、ReturnTypeがある
type ReturnTypeFormAdd = ReturnType<typeof add>;
