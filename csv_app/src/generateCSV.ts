import { existsSync, writeFileSync, appendFileSync } from "fs";
import { Person } from "../src/Person";

export const generateCSV = (persons: Person) => {
  const header = "name,email,phone\n";
  const row = persons.toCSV() + "\n";

  if (!existsSync("persons.csv")) {
    writeFileSync("persons.csv", header + row);
    return;
  }

  appendFileSync("persons.csv", row);
};
