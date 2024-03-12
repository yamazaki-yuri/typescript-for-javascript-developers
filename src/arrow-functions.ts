export {};

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => {
  return weight / (height * height);
};

//return文は省略できる
let bmi2: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);
