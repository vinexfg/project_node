import { existsSync, writeFileSync, appendFileSync } from "fs";
import { Person } from "../Person";

export const validateData = (persons: Person): string[] => {
  const errors: string[] = [];

  if (!persons.name.trim()) {
    errors.push("Name is required");
  }

  if (!persons.email.includes("@")) {
    errors.push("Invalid email");
  }

  if (!persons.phone.trim()) {
    errors.push("Phone is required");
  }

  if (errors.length > 0) {
    throw new Error(`Validation Error: ${errors.join(", ")}`);
  }

  return errors;
};

export const generateCSV = (persons: Person) => {
  const header = "name,email,phone\n";
  const row = persons.toCSV() + "\n";

  if (!existsSync("persons.csv")) {
    writeFileSync("persons.csv", header + row);
  } else {
    appendFileSync("persons.csv", row);
  }
};
