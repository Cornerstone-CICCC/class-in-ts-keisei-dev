import { Luggage } from "./Luggage";
import { Priority } from "./Priority";

export class FragileLuggage extends Luggage {
  private insurance: number;

  constructor(
    weight: number,
    description: string,
    priority: Priority,
    insurance: number
  ) {
    super(weight, description, priority);
    this.insurance = insurance;
  }

  getInsuranceValue(): number {
    return this.insurance;
  }

  setInsuranceValue(value: number): string {
    this.insurance = value;
    return "";
  }

  getPrice(): number {
    const p = this.getPriority();

    if (p === Priority.Normal) {
      return this.insurance;
    }
    if (p === Priority.Priority) {
      return this.fee * 5 + this.insurance;
    }
    // Urgent
    return this.fee * 10 + this.insurance;
  }

  toString(): string {
    return (
      this.getDescription() +
      " (Fragile), insurance: " +
      this.insurance
    );
  }
}
