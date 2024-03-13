export {};

interface Profile {
  underTwenty: boolean;
  name: string;
  [index: string]: string | number| boolean;
}
let profile: Profile = { name: 'yuri', underTwenty: false };

//let profile: { [index: string]: string | number } = {};

profile.name = 'yuri';
profile.age = 27;
profile.nationality = 'Japan';

//index signaturesの書き方
// { [ index: typeForIndex ]: typeForValue }