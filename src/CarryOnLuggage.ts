import { Luggage } from "./Luggage";
import { Priority } from "./Priority";

export class CarryOnLuggage extends Luggage {
  constructor(weight: number, description: string, priority: Priority) {
    super(weight, description, priority);
  }

  getPrice(): number {
    const weight = this.getWeight();
    if (weight <= 5) {
      return 0;
    }
    const extraKg = weight - 5;
    return this.fee * 3 * extraKg;
  }

  toString(): string {
    return this.getDescription() + " (Carry-on)";
  }
}
