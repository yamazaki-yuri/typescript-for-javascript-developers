export {};

class VisaCard {
  constructor(public readonly owner: string) {
  }
}

let myVisaCard = new VisaCard('yuri');
console.log(myVisaCard.owner)
//myVisaCard.owner = 'Yuri'

