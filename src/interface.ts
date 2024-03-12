export {};

//型エイリアス(別名)は=が必要
type ObjectType = {
  name: string;
  age: number;
};

let object: ObjectType = {
  name: 'yuri',
  age: 27
};

//エイリアスではく、単独で型を定義できるものなので=はいらない
interface ObjectInterface {
  name: string;
  age: number;
};