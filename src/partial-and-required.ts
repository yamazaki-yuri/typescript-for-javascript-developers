export {};

//以下の既存のプロパティを破壊せず、
type Profile = {
  name: string;
  age?: number;
};

//このProfileが持つオブジェクトを、オプショナルなプロパティにしたい時どうする？
//そんな時はpartialを使う
//既存のプロパティを更新すると、新しいプロパティにも、追加される
type PartialType = Partial<Profile>;

//すべてのプロパティを、必須なプロパティにしたいときはどうする？
//requireを使う
type RequiredType = Required<Profile>;