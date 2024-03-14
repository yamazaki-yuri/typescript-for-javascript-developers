export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('yuri', 27);

//parameterとは関数の引数の型を取得したい時
type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Gloria', 30];