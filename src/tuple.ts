export {};

let profile = ['Ham', 43];
//profile = [43, 'Ham'];のようにならないようにしたい

let profile1: [string, number] = ['Ham', 43];
//profile1 = [43, 'Ham'];
//tuple型は、型推論されないので、自分で定義できるようにならないと！

