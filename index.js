// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What would you like to name your project?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please describe your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please share installation instructions.',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Please share usage instructions.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Which license would you like to use?',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'Mozilla Public License 2.0']
    },
    {
        type: 'input',
        message: 'Please share instructions for contributors.',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Please share test instructions.',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your GitHub URL?',
        name: 'github',
    },
    {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('sample.md', parseInt(questions), (err) =>
        err ? console.error(err) : console.log(questions));
}

// TODO: Create a function to initialize app, so when someone types node "name of file.js" to start it up, put something in there to get the first function to get it going
function init() { 
    writeReadMe();
}
// Function call to initialize app (this is done)
init();
