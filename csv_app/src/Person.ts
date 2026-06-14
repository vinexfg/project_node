interface PersonParams {
  name: string;
  phone: string;
  email: string;
}

export class Person {
  get name() {
    return this.data.name;
  }
  get phone() {
    return this.data.phone;
  }
  get email() {
    return this.data.email;
  }

  constructor(private data: PersonParams) {}

  toCSV(): string {
    return `${this.name},${this.email},${this.phone}`;
  }
}
