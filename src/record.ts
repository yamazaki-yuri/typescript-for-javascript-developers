export {};

// Record<K, T>
//型引数を２つ受け取ってくれる

type Prefectures = 'Tokyo' | 'Kyoto' | 'Osaka';
//共通の方を持たせたい時にrecord型が便利

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covid19Japan: {
  Tokyo: Covid19InfectionInfo;
  Kyoto: Covid19InfectionInfo;
  Osaka: Covid19InfectionInfo;
} = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Kyoto: { kanji_name: '京都', confirmed_cases: 1500 },
  Osaka: { kanji_name: '大阪', confirmed_cases: 1221 },
};
//上記のように書くのはだるいので、こういう時にrecordを使う(下記)
const covid19Japan2: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Kyoto: { kanji_name: '京都', confirmed_cases: 1500 },
  Osaka: { kanji_name: '大阪', confirmed_cases: 1221 },
};

