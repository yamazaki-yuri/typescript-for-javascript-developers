export {};

//引数が何個になるかわからないとき。rest-parametersを使う
//const sum: (...values: number[]) => number = (...values: number[]): number => {
  //console.log(values);
  //return 100;
//};

//sum(1, 2, 3, 4, 5);

//配列の総和を求めてreturnに渡したい
//mds reduce()を使う
const reducer = (accumulator: number, currentValue: number) => {
  console.log({ accumulator, currentValue });
  return accumulator + currentValue;
};

const sum2: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum2(1, 2, 3, 4, 5));
