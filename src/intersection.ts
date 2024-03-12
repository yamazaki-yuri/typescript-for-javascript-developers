export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
};

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367
};

//ピッチャーもバッターも行う選手がいた時、以下のように改めて定数を定義しないといけない
type TwoWayPlayer = {
  throwingSpeed: number;
  battingAverage: number;
};

//この面倒な作業をせず、元からある定数を使って定義できるのが、intersection型
//intersectionという単語は使わない
type TwoWayPlayer2 = Pitcher1 & Batter1;
const OtaniShohei: TwoWayPlayer2 = {
  throwingSpeed: 165,
  battingAverage: 0.286
}