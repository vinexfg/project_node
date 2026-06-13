import { existsSync, writeFileSync, appendFileSync } from "fs";

interface User {
  name: string;
  email: string;
  age: string;
}

export const validateData = (data: User): string[] => {
  const errors: string[] = [];

  if (!data.name.trim()) {
    errors.push("Name is required");
  }

  if (!data.email.includes("@")) {
    errors.push("Invalid email");
  }

  if (isNaN(Number(data.age)) || Number(data.age) <= 0) {
    errors.push("Age must be a valid number");
  }

  return errors;
};

export const generateCSV = (data: User) => {
  const header = "name,email,age\n";
  const row = `${data.name},${data.email},${data.age}\n`;

  if (!existsSync("users.csv")) {
    writeFileSync("users.csv", header + row);
  } else {
    appendFileSync("users.csv", row);
  }
};
