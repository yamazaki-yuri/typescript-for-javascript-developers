export {};

const nextYearSalary = (currentSalary: number, rate: number = 1.1): number => {
  return currentSalary * rate;
};

//第二引数はdefault引数→引数が与えられなかったときに、1.1が渡される
console.log(nextYearSalary(1000, 1.05));