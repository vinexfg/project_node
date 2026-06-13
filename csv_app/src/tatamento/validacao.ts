import { existsSync, writeFileSync, appendFileSync } from "fs";

interface User {
  name: string;
  email: string;
  phone: string;
}

export const validateData = (data: User): string[] => {
  const errors: string[] = [];

  if (!data.name.trim()) {
    errors.push("Name is required");
  }

  if (!data.email.includes("@")) {
    errors.push("Invalid email");
  }

  if (!data.phone.trim()) {
    errors.push("Phone is required");
  }

  return errors;
};

export const generateCSV = (data: User) => {
  const header = "name,email,phone\n";
  const row = `${data.name},${data.email},${data.phone}\n`;

  if (!existsSync("users.csv")) {
    writeFileSync("users.csv", header + row);
  } else {
    appendFileSync("users.csv", row);
  }
};
