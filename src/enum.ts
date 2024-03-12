export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
};

Months.January;
//数値のkeyvalueは勝手に割り振られるけど、1月を1に再定義すれば、以降も勝手に数値が更新される

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#0000FF',
  BLUE = '#0000FF',
  BLACK = '#000000'
}
let green = COLORS.GREEN;