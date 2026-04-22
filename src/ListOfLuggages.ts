import { FragileLuggage } from "./FragileLuggage";
import { Luggage } from "./Luggage";

export class ListOfLuggages {
  private luggages: Luggage[] = [];

  insertLuggage(luggage: Luggage): void {
    this.luggages.push(luggage);
  }

  printAllLuggages(): void {
    for (let i = 0; i < this.luggages.length; i++) {
      console.log(this.luggages[i].toString());
    }
  }

  priceOfEachLuggage(): void {
    for (let i = 0; i < this.luggages.length; i++) {
      console.log(this.luggages[i].getPrice());
    }
  }

  totalPrice(): number {
    let sum = 0;
    for (let i = 0; i < this.luggages.length; i++) {
      sum += this.luggages[i].getPrice();
    }
    return sum;
  }

  getFragileLuggageWithInsurance(): {
    quantity: number;
    totalInsuranceValue: number;
  } {
    let quantity = 0;
    let totalInsuranceValue = 0;

    for (let i = 0; i < this.luggages.length; i++) {
      const item = this.luggages[i];
      if (item instanceof FragileLuggage) {
        quantity += 1;
        totalInsuranceValue += item.getInsuranceValue();
      }
    }

    return { quantity, totalInsuranceValue };
  }

  sortByPrice(): void {
    this.luggages.sort((a, b) => a.getPrice() - b.getPrice());
  }

  sortByWeight(): void {
    this.luggages.sort((a, b) => a.getWeight() - b.getWeight());
  }
}
