// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
async function renderLicenseBadge(license) {
  let licenseBadge;
  if (answers.license === 'MIT'){
    licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (answers.license === 'Apache 2.0') {
    licenseBadge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (answers.license === 'Mozilla Public License 2.0') {
    licenseBadge = '![License: GPL v3](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)'
  } else {
    licenseBadge = ''
  }
  return licenseBadge
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  if (answers.license === 'MIT'){
    licenseLink = 'https://opensource.org/licenses/MIT'
  } else if (answers.license === 'Apache 2.0') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0'
  } else if (answers.license === 'Mozilla Public License 2.0') {
    licenseLink = 'https://opensource.org/licenses/MPL-2.0'
  } else {
    licenseLink = ''
  }
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
const licenseBadge = renderLicenseBadge(license);
const licenseLink = renderLicenseLink(license);
return `
${answers.license}
Please follow the link to learn more about the license: 
${licenseLink}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
${renderLicenseBadge()}

# ${answers.title}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.install}

## License
${renderLicenseSection()}

## Contributors

${answers.contributors}

## Tests

${answers.test}

## Questions

For any questions you may email ${email} or visit ${github}.
`;
}

module.exports = generateMarkdown;
