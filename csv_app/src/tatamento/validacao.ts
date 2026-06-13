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

export const generateCSV = (data: User): string => {
  const header = "name,email,age";
  const row = `${data.name},${data.email},${data.age}`;

  return `${header}${row}`;
};
