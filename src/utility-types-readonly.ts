export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'yuri',
  age: 27,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Yuri',
  age: 27
};
