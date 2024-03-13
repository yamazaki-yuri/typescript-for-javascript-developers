export {};

let profile: { name: string; age: number | null } = {
  name: 'yuri',
  age: null
};

//tsconfig.jsonの設定を変えることで、型アサーションを無視して、nullを入れられるようになってしまう
// "strictNullChecks": true,これをfalseにすると。

//上記はあまりやらない方がいい。代わりにunion型を使おう！
