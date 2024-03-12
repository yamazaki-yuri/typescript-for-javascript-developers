export {};

let dayOfTheWeek: string = '日';
dayOfTheWeek = '月';
dayOfTheWeek = '31';

//月-日までの7つの文字列以外弾きたい
let dayOfTheWeek2: '日'|'月'|'火'|'水'|'木'|'金'|'土' = '日';
dayOfTheWeek2 = '月';
//dayOfTheWeek2 = '31';

//数字でも。
let month: 1|2|3|4|5|6|7|8|9|10|11|12 = 1;
month = 12;
//month = 14;

//booleanのリテラル型も
let TRUE: true = true;
//TRUE = false;