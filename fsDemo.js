// import fs from "fs";
import fs from "fs/promises";

// readFile() method - callback version
// fs.readFile("./testFile.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readFileSync() - Synchronous version
// const data = fs.readFileSync("./testFile.txt", "utf8");
// console.log(data);

// readFile() - Promise version .then()
fs.readFile("./testFile.txt", "utf8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// readFile() - async/await version
const readFile = async () => {
  try {
    const data = await fs.readFile("./testFile.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// writeFile() method - async/await version
const writeFile = async () => {
  try {
    await fs.writeFile(
      "./testFile.txt",
      "Hello, I am writing this statement to the testFile."
    );
    console.log("File written to ...");
  } catch (error) {
    console.log(error);
  }
};

// appendFile() method - async/await version
const appendFile = async () => {
  try {
    await fs.appendFile(
      "./testFile.txt",
      "\nThis is an appended text (meaning this statement is added to the file)"
    );
    console.log("File appended to ...");
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();
