import { Priority } from "./Priority";

// Base class — you cannot use "new Luggage()" (abstract)
export abstract class Luggage {
  private weight: number;
  private description: string;
  protected priority: Priority;
  protected readonly fee = 5.2;

  constructor(weight: number, description: string, priority: Priority) {
    this.weight = weight;
    this.description = description;
    this.priority = priority;
  }

  getWeight(): number {
    return this.weight;
  }

  setWeight(weight: number): void {
    this.weight = weight;
  }

  getDescription(): string {
    return this.description;
  }

  getPriority(): Priority {
    return this.priority;
  }

  // Only fragile luggage has real insurance; others stay at 0
  getInsuranceValue(): number {
    return 0;
  }

  // Only fragile luggage can set this; others get a message back
  setInsuranceValue(_value: number): string {
    return "Insurance is only applicable to fragile luggage.";
  }

  abstract getPrice(): number;

  abstract toString(): string;
}
