// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter the title of your project.',
        name: 'title',
    },

    {
        type: 'input',
        message: 'Please enter a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter installation instuctions.',
        name: 'installationInstructions',
    },
    {
        type: 'input',
        message: 'Please enter usage information.',
        name: 'usageInformation',
    },
    {
        type: 'input',
        message: 'Please enter the contribution guidelines.',
        name: 'contributionGuidelines',
    },
    {
        type: 'input',
        message: 'Please enter the test instructions.',
        name: 'testInstructions',
    },
    {
        type: 'list',
        message: 'Which license would you like to add?',
        name: 'license',
        choices: ['MIT License', 'Apache License 2.0', 'GNU GPL v3','Mozilla Public License 2.0','BSD 3-Clause License']
    },
    {
        type: 'input',
        message: 'Please enter your GitHub name.',
        name: 'githubName',
    },
    {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email',
    }
    
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
