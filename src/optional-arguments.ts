export {};

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

bmi(1.78, 86);

//bmi(身長, 体重, console.logで出力するかどうか？)
//3番目のは、optionalの引数となる
//bmi(1.78, 86, true);
//bmi(1.78, 86, false);
//bmi(1.78, 86);出力しない

let bmi2: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi2: number =  weight / (height * height);
  if (printable) {
  console.log({bmi2}); 
  } return bmi2;
};
bmi2(1.78, 86, true);