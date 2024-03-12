export {};

//型エイリアス
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'yuri',
  age: 27
};

type Profile = {
  name: string;
  age: number;
}

const example2: Profile = {
  name: 'yuri',
  age: 27
};

type Profile2 = typeof example1;