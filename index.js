// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile('sample.md', md) {
    fs.writeFile('sample.md', md, (err) =>
        err ? console.error(err) : console.log(md));
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
