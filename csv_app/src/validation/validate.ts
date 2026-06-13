import { existsSync, writeFileSync, appendFileSync } from "fs";
import { Person } from "../Person";

export const validateData = (persons: Person): string[] => {
  const errors: string[] = [];

  if (!persons.data.name.trim()) {
    errors.push("Name is required");
  }

  if (!persons.data.email.includes("@")) {
    errors.push("Invalid email");
  }

  if (!persons.data.phone.trim()) {
    errors.push("Phone is required");
  }

  return errors;
};

export const generateCSV = (persons: Person) => {
  const header = "name,email,phone\n";
  const row = persons.toCSV() + `\n`;

  if (!existsSync("persons.csv")) {
    writeFileSync("persons.csv", header + row);
  } else {
    appendFileSync("persons.csv", row);
  }
};
