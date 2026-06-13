interface PersonParams {
  name: string;
  phone: string;
  email: string;
}

export class Person {
  constructor(public data: PersonParams) {}

  toCSV(): string {
    return `${this.data.name},${this.data.email},${this.data.phone}`;
  }
}
