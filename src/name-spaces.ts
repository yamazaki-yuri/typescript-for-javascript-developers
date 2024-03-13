export {};

//同じnamespaceで区切ると、Personというクラスを作成できる
//namespaceの外からアクセスするには、exportをつける
namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

//Japaneseクラスの中に、さらに

namespace English {
  export class Person {
    constructor(
      public firstName: string, 
      public middleName: string,
      public lastName: string
    ) {}
  }
}


const me = new Japanese.Tokyo.Person('yuri');
console.log(me);
const meOsaka = new Japanese.Osaka.Person('yuuuuuuuuri');
console.log(meOsaka);


const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);

