import { createInterface } from "readline";
import { Person } from "./Person";
import { validateData } from "./validation/validate";
import { generateCSV } from "./generateCSV";
import { ValidationError } from "./validation/validateError";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (text: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(text, resolve);
  });
};

const register = async () => {
  const name = await question("Name: ");
  const email = await question("Email: ");
  const phone = await question("Phone: ");

  const data = new Person({ name, email, phone });

  try {
    validateData(data);
    generateCSV(data);
    console.log("Data saved to CSV successfully!");
  } catch (err: unknown) {
    if (err instanceof ValidationError) {
      console.error(err.name);
      console.error(err.message);
      return;
    }

    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
  }
};

const menu = async () => {
  console.log(" CSV App ");
  console.log("1. New registration");
  console.log("2. Exit");

  const option = await question("Choose an option: ");

  if (option === "1") {
    await register();
    await menu();
  } else if (option === "2") {
    console.log("Bye!");
    rl.close();
  } else {
    console.error("Invalid option!");
    await menu();
  }
};

menu();
