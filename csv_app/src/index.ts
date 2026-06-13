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

  const errors = validateData(data);

  if (errors.length > 0) {
    console.log("\nErrors found:");
    errors.forEach((error: string) => console.log(`${error}`));
  } else {
    generateCSV(data);
    console.log("Data saved to CSV successfully!");
  }

  rl.close();
};

main();
