import { createInterface } from "readline";
import { validateData, generateCSV } from "./tatamento/validacao";
import { appendFileSync } from "fs";
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

const name = "Rodrigo Silva2";
const phone = "5512345678";
const email = "rodrigo@email.com";

const person = new Person({
  name,
  phone,
  email,
});

const content = person.toCSV();

try {
  appendFileSync("./persons.csv", content);
  console.log("Sucess!");
} catch (err) {
  console.error(err);
}

const main = async () => {
  const name = await question("Name: ");
  const email = await question("Email: ");
  const age = await question("Age: ");

  const data = { name, email, age };

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
