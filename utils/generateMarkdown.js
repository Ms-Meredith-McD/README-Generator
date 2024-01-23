// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  let licenseBadge;
  if (answers.license === 'MIT') {
    licenseBadge = '<img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg">';
  } else if (answers.license === 'Apache 2.0') {
    licenseBadge = '<img alt="License: Apache 2.0" src="https://img.shields.io/badge/License-Apache%202.0-blue.svg">';
  } else if (answers.license === 'Mozilla Public License 2.0') {
    licenseBadge = '<img alt="License: MPL 2.0" src="https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg">';
  } else {
    licenseBadge = '';
  }
  return licenseBadge;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {
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
function renderLicenseSection(answers) {
  const licenseBadge = renderLicenseBadge(answers);
  const licenseLink = renderLicenseLink(answers);
  return `
  This application is covered under the ${answers.license} license.
  Please follow the link to learn more about the license: [License Information](${licenseLink})
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
${renderLicenseBadge(answers)}

# ${answers.title}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.install}

## Usage

${answers.usage}

## License
${renderLicenseSection(answers)}

## Contributing

${answers.contributors}

## Tests

${answers.test}

## Questions

For any questions you may email ${answers.email} or visit https://github.com/${answers.github}.
`;
}

module.exports = generateMarkdown;
