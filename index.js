// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateReadMe = require('./src/readme-template');

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "Title",
      message: "What is your project Title? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("You must enter a title for your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Description",
      message: "Describe your project (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("You must enter a description for your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Installation",
      message: "Describe your project installation process",
      default: "No installation process listed"
    },
    {
      type: "input",
      name: "Usage",
      message: "Would you like to describe the usage of your project?",
      default: "No Usage entered"
    },
    {
      type: "checkbox",
      name: "License",
      message: "What license does your project have? (Required)",
      choices: [
        "MIT",
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "Boost Software License 1.0",
        "The Unlicense"
      ],
    },
    {
      type: "input",
      name: "Contributions",
      message: "List all contributors to this project",
      default: "No contributors"
    },
    {
      type: "input",
      name: "Tests",
      message: "List all testing procedures for this project",
      default: 'No Procedure'
    },
    {
      type: "Input",
      name: "Questions",
      message: "What is your GitHub Username? (Required)",
      validate: (questionsInput) => {
        if (questionsInput) {
          return true;
        } else {
          console.log("You must enter a valid Username!");
          return false;
        }
      }
    }
  ]);
};

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
promptUser()
  .then(answers => {return generateReadMe(answers)})
  .then(data => {
    fs.writeFile('./dist/README.md', data, err => {
      err ? console.log(err) : console.log("Generated Function")
    })
  })
// .then(answers => {
//   return generateReadme
// })