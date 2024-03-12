export {};

const kannsuu = (): number => 43;

let numberAny: any = kannsuu();
let numberUnknown: unknown = kannsuu();

let sumAny = numberAny + 10;
if (typeof numberUnknown === 'number') {
let sumberUnknown = numberUnknown + 10;
};
//typeofは型を確認するもの
