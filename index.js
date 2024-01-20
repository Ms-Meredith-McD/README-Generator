// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


const questions = [

    
];

// TODO: Create a function to write README file
function writeToFile() {
    fs.writeFile('sample.md', parseInt(questions), (err) =>
        err ? console.error(err) : console.log(questions));
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
