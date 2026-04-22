import { Luggage } from "./Luggage";
import { Priority } from "./Priority";

export class RegularLuggage extends Luggage {
  constructor(weight: number, description: string, priority: Priority) {
    super(weight, description, priority);
  }

  getPrice(): number {
    const weight = this.getWeight();
    if (weight <= 23) {
      return 0;
    }
    const extraKg = weight - 23;
    const p = this.getPriority();

    if (p === Priority.Normal) {
      return this.fee * extraKg;
    }
    if (p === Priority.Priority) {
      return this.fee * 5 * extraKg;
    }
    // Urgent
    return this.fee * 10 * extraKg;
  }

  toString(): string {
    return this.getDescription() + " (Regular)";
  }
}
