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
        "Apache 2.0 License",
        "IBM Public License Version 1.0",
        "Mozilla Public License 2.0",
        "None"
      ],
    },
    {
      type: "input",
      name: "Contributions",
      message: "List all contributors to this project",
      default: "No contributors listed"
    },
    {
      type: "input",
      name: "Tests",
      message: "List all testing procedures for this project",
      default: 'No Procedure'
    },
    {
      type: "Input",
      name: "Email",
      message: "What is your Email address? (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("You must enter a valid Email address!");
          return false;
        }
      }
    },
    {
      type: "Input",
      name: "Github",
      message: "What is your Github Username ? (Required)",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("You must enter a valid Email address!");
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
  .then(answers => {var data = generateReadMe(answers)
  // .then(data => {
    fs.writeFile('./dist/README.md', data, err => {
      err ? console.log(err) : console.log("Generated Function")
  })});
  //})
// .then(answers => {
//   return generateReadme
// })