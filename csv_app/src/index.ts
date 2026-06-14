import { createInterface } from "readline";
import { validateData, generateCSV } from "./validation/validate";
import { Person } from "./Person";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (text: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(text, resolve);
  });
};

const main = async () => {
  const name = await question("Name: ");
  const email = await question("Email: ");
  const phone = await question("Phone: ");

  const data = new Person({ name, email, phone });

  try {
    validateData(data);
    generateCSV(data);
    console.log("Data saved to CSV successfully!");
  } catch (err) {
    if (err instanceof Error) {
      console.log(`${err.message}`);
    }
  }

  rl.close();
};

main();
