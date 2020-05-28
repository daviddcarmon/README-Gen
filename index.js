const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const util = require("util");
const markDown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);
readME();
async function readME() {
  try {
    const data = await inquirer.prompt([
      {
        type: "input",
        message: "What's your GitHub username?",
        name: "username",
      },
      {
        type: "input",
        message: "What is your project's name?",
        name: "project",
      },
      {
        type: "input",
        message: "Please write a short description of your project",
        name: "description",
      },
      {
        type: "input",
        message: "What kind of license should your project have?",
        name: "license",
      },
      {
        type: "input",
        message: "What dependencies should the user know about?",
        name: "dependence",
      },
      {
        type: "input",
        message: "What command should be ran to run tests?",
        name: "test",
      },
      {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "repo",
      },
      {
        type: "input",
        message:
          "What does the user need to know about contributing to the repo",
        name: "contribute",
      },
    ]);

    let username = data.username;

    // html_url
    const results = await axios.get(`https://api.github.com/users/${username}`);
    var filename = data.project.toLowerCase().split(" ").join("") + ".md";
    let allData = { ...results, ...data };
    let dataString = markDown(allData);
    let fileWrite = await writeFileAsync(filename, dataString);
    console.log(`Success!! File name was saved ${data.project}.md`);
  } catch (err) {
    console.log(`${err} error? You don't know your username?`);
  }
}
