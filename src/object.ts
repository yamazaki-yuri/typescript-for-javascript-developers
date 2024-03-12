export {};

let profile: object = { name: 'yuri' };
profile = { birthYear: 1996 };
//object型は、objectならなんでも入れられてしまうので、危険
//上記はstringを入れた後、numberを再代入できてしまう


//{}を使用することで、オブジェクトの内容と、そのプロパティの型を定義できる
let profile1: {
  name: string;
} = { name: 'yuri'};
//profile1 = { birthYear: 1996 };
profile1 = { name: 'king' };
