import { Person } from "../Person";

export const validateData = (persons: Person): void => {
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
    throw new Error(errors.join(", "));
  }
};
