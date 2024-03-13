export {};

let name: any = 'yuri';

//let length: number = name.length;
//型アサーションだと以下のように書く
let length: number = name.length as number;
//または(非推奨)
let length2: number = (name as string).length;
//または(非推奨)
let length3: number = (<string>name).length;



//length = 'foo';
console.log(length)