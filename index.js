// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'Please enter name.',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please enter your location.',
        name: 'location',
    },
    {
        type: 'input',
        message: 'Please talk about yourself.',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'Please enter your LinkedIn URL.',
        name: 'linkedIn',
    },
    {
        type: 'input',
        message: 'Please enter your GitHub URL.',
        name: 'github',
    },
    {
        type: 'list',
        message: 'What is your favorite pet?',
        name: 'favoritePet',
        choices: ['Cat', 'Dog', 'Fish', 'Guinea Pig', 'Hedgehog']
    }
    
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('sample.md', parseInt(questions), (err) =>
        err ? console.error(err) : console.log(questions));
}

// TODO: Create a function to initialize app
function init() { 
    writeReadMe();
}
// Function call to initialize app
init();
