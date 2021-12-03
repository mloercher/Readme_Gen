// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require('./src/readme-template');

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
      message: "Would you like to describe your project installation process?"
    },
    {
      type: "input",
      name: "Usage",
      message: "Would you like to describe the usage of your project?"
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
      message: "List all contributors to this project"
    },
    {
      type: "input",
      name: "Tests",
      message: "List all testing procedures for this project",
      default: false
    },
    {
      type: "Input",
      name: "Questions",
      message: "Are there any questions regarding this project?",
      default: false
    },
  ]);
};

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

promptUser()
  .then(answers => console.log(answers))
// .then(answers => {
//   return generateReadme
// })