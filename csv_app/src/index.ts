import { createInterface } from "readline";
import { validateData, generateCSV } from "./tatamento/validacao";

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
  const age = await question("Age: ");

  const data = { name, email, age };

  const errors = validateData(data);

  if (errors.length > 0) {
    console.log("Errors found:");
    errors.forEach((error: string) => console.log(` ${error}`));
  } else {
    generateCSV(data);
    console.log("Data saved to CSV successfully!");
  }

  rl.close();
};

main();
