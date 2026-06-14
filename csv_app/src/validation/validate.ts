import { Person } from "../Person";
import { ValidationError } from "./validateError";

export const validateData = (person: Person): void => {
  const errors: string[] = [];

  if (!person.name.trim()) {
    errors.push("Name is required");
  }

  if (!person.email.includes("@")) {
    errors.push("Invalid email");
  }

  if (!person.phone.trim()) {
    errors.push("Phone is required");
  }

  if (errors.length > 0) {
    throw new ValidationError(errors.join(", "));
  }
};
